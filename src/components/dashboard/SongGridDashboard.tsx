import { FaPlay } from "react-icons/fa";
import { useAppDispatch } from "../../store";
import { setSong } from "../../store/slices";

// type Song = {
//     id: number;
//     title: string;
//     artist: string;
//     imageUrl: string;
// };

export interface ResponseSongs {
  id:        string;
  name:      string;
  artist:    string;
  filename:  string;
  mimetype:  string;
  path:      string;
  createdAt: Date;
  userId:    string;
}
  
  type SongsGridProps = {
    songs: ResponseSongs[];
  };
  
  export const SongsGridDashboard: React.FC<SongsGridProps> = ({ songs }) => {
    const dispatch = useAppDispatch();
    const handlePlay = (song: ResponseSongs) => {
        console.log(`Playing song: ${song.name} by ${song.artist} with id: ${song.id}`);
        // Lógica para reproducir la canción
        console.log(`http://localhost:3000/api/music/file/${song.id}`);
        dispatch(
          setSong({
            title: song.name,
            artist: song.artist,
            imageUrl: "https://via.placeholder.com/150",
            src: `http://localhost:3000/api/music/file/${song.id}.mp3`,
          })
        );
      };
    return (
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Uploaded Songs For User</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {songs.map((song) => (
            <div key={song.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src={"https://via.placeholder.com/150"} alt={song.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{song.name}</h3>
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
          ))}
        </div>
      </div>
    );
  };
  