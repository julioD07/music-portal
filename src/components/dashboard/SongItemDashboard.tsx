import { FaPlay } from "react-icons/fa";
import { urlBase } from "../../common/adapters/httpAdapter";
import { ResponseSongs } from "./SongGridDashboard";

interface SongItemDashboardProps {
    song: ResponseSongs;
    handlePlay: (song: ResponseSongs) => void;
}

export const SongItemDashboard = ({ song, handlePlay }: SongItemDashboardProps) => {
  return (
    <>
      <div
        key={song.id}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      >
        <img
          src={`${
            song.pathImage !== "https://via.placeholder.com/150"
              ? urlBase + "/api/music/image/" + song.pathImage
              : "https://via.placeholder.com/150"
          }`}
          alt={song.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {song.name}
          </h3>
          <p className="text-gray-700 dark:text-gray-400">{song.artist}</p>
          <button
            onClick={() => handlePlay(song)}
            className="mt-4 flex items-center justify-center w-full py-2 bg-buttoncolor text-white rounded-md hover:bg-buttonhover transition-colors"
          >
            <FaPlay className="mr-2" />
            Play
          </button>
        </div>
      </div>
    </>
  );
};
