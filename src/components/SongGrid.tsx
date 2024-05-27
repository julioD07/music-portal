import { FaCirclePlay } from "react-icons/fa6";

const songs = [
  { id: 1, title: 'Song One', artist: 'Artist One', img: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Song Two', artist: 'Artist Two', img: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Song Three', artist: 'Artist Three', img: 'https://via.placeholder.com/150' },
  // Agrega más canciones según sea necesario
];

const SongGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {songs.map((song) => (
        <div key={song.id} className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md transform transition-transform hover:-translate-y-2 hover:shadow-lg">
          <img src={song.img} alt={song.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{song.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{song.artist}</p>
          <button 
            className="mt-4 bg-buttoncolor text-white py-2 px-4 rounded-md hover:bg-buttonhover"
            aria-label={`Reproducir ${song.title} de ${song.artist}`}
          >
            <FaCirclePlay /> 
          </button>
        </div>
      ))}
    </div>
  );
};

export default SongGrid;
