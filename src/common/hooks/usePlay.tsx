import { ResponseSongs } from "../../interfaces/Responses";
import { useAppDispatch } from "../../store";
import { play, setSong } from "../../store/slices";
import { urlBase } from "../adapters/httpAdapter";

export const usePlay = () => {
  const dispatch = useAppDispatch();
  const handlePlay = (song: ResponseSongs) => {
    console.log(
      `Playing song: ${song.name} by ${song.artist} with id: ${song.id}`
    );
    // Lógica para reproducir la canción
    console.log(`${urlBase}/api/music/file/${song.id}`);
    dispatch(
      setSong({
        title: song.name,
        artist: song.artist,
        imageUrl: `${
          song.pathImage !== "https://via.placeholder.com/150"
            ? urlBase + "/api/music/image/" + song.pathImage
            : "https://via.placeholder.com/150"
        }`,
        src: `${urlBase}/api/music/file/${song.id}.mp3`,
      })
    );
    dispatch(play());
  };

  return {
    handlePlay,
  };
};
