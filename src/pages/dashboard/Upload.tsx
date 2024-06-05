import { useState, DragEvent, ChangeEvent, useRef } from 'react';

export const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile && droppedFile.type === 'audio/mpeg') {
      setFile(droppedFile);
      setError(null);
    } else {
      setError('Solo se permiten archivos MP3.');
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && selectedFile.type === 'audio/mpeg') {
      setFile(selectedFile);
      setError(null);
    } else {
      setError('Solo se permiten archivos MP3.');
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (file) {
      // Aquí iría la lógica para subir el archivo al servidor
      console.log('Archivo subido:', file);
    } else {
      setError('Por favor, seleccione un archivo MP3 válido.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Subir Canción</h1>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
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
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Subir
      </button>
    </div>
  );
};
