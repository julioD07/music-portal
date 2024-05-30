import { FaPlay } from "react-icons/fa";

type Song = {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
  };
  
  type SongsGridProps = {
    songs: Song[];
  };
  
  export const SongsGridDashboard: React.FC<SongsGridProps> = ({ songs }) => {
    const handlePlay = (song: Song) => {
        console.log(`Playing song: ${song.title} by ${song.artist}`);
        // Lógica para reproducir la canción
      };
    return (
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Uploaded Songs For User</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {songs.map((song) => (
            <div key={song.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src={song.imageUrl} alt={song.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{song.title}</h3>
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
  