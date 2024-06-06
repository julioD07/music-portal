import { useState, DragEvent, ChangeEvent, useRef } from "react";
import { useForm } from "../../common/hooks";
import { httpAdapter, urlBase } from "../../common/adapters/httpAdapter";
import { ResponseUploadSong } from "../../interfaces/Responses";
import { useAppSelector } from "../../store";

interface UploadProps {
  songTitle: string;
  artist: string;
}

export const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const backgroundImageInputRef = useRef<HTMLInputElement | null>(null);
  const user = useAppSelector((state) => state.auth.user);

  const { values, handleInputChange } = useForm<UploadProps>({
    songTitle: "",
    artist: "",
  });

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile && droppedFile.type === "audio/mpeg") {
      setFile(droppedFile);
      setError(null);
    } else {
      setError("Solo se permiten archivos MP3.");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && selectedFile.type === "audio/mpeg") {
      setFile(selectedFile);
      setError(null);
    } else {
      setError("Solo se permiten archivos MP3.");
    }
  };

  const handleBackgroundImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setBackgroundImage(selectedFile);
      setError(null);
    } else {
      setError("Por favor, seleccione una imagen válida.");
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleBackgroundImageClick = () => {
    backgroundImageInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (file && values.songTitle && values.artist) {
      // Aquí iría la lógica para subir el archivo al servidor junto con los demás datos
      console.log("Archivo subido:", file);
      console.log("Título de la canción:", values.songTitle);
      console.log("Artista:", values.artist);
      if (backgroundImage) {
        console.log("Imagen de fondo:", backgroundImage);
      }

      const formData = new FormData();
      formData.append("name", values.songTitle);
      formData.append("artist", values.artist);
      formData.append("file", file);

      //? Limpiamos los campos
      const resp = await httpAdapter.postFile<ResponseUploadSong>(
        `${urlBase}/api/music`,
        formData,
        {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${user?.token}`,
        }
      );

      console.log(resp);
    } else {
      setError(
        "Por favor, complete todos los campos y seleccione un archivo MP3 válido."
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Subir Canción</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Título de la canción
        </label>
        <input
          type="text"
          name="songTitle"
          value={values.songTitle}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm dark:bg-white dark:text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Artista</label>
        <input
          type="text"
          name="artist"
          value={values.artist}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm dark:bg-white dark:text-gray-700"
        />
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer mb-4"
        onClick={handleClick}
      >
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>Arrastre su archivo MP3 aquí o haga clic para seleccionarlo</p>
        )}
        <input
          type="file"
          accept="audio/mpeg"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div
        onClick={handleBackgroundImageClick}
        className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer mb-4"
      >
        {backgroundImage ? (
          <p>{backgroundImage.name}</p>
        ) : (
          <p>Haga clic para seleccionar una imagen de fondo</p>
        )}
        <input
          type="file"
          accept="image/*"
          ref={backgroundImageInputRef}
          onChange={handleBackgroundImageChange}
          className="hidden"
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {/* Hacemos el boton tipo Block */}
      <button
        onClick={handleSubmit}
        className="block w-full bg-blue-500 text-white font-semibold p-3 rounded-lg mt-4 hover:bg-blue-600"
      >
        Subir
      </button>
    </div>
  );
};
