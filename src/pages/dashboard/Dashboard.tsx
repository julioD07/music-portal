import { SongsGridDashboard } from "../../components/dashboard/SongGridDashboard";

const mockSongs = [
  {
    id: 1,
    title: 'Song One',
    artist: 'Artist One',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Song Two',
    artist: 'Artist Two',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Song Three',
    artist: 'Artist Three',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Song Four',
    artist: 'Artist Four',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Song Five',
    artist: 'Artist Five',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Song Six',
    artist: 'Artist Six',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Song Seven',
    artist: 'Artist Seven',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Song Eight',
    artist: 'Artist Eight',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Song Nine',
    artist: 'Artist Nine',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    title: 'Song Ten',
    artist: 'Artist Ten',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
      <SongsGridDashboard songs={mockSongs} />
    </div>
  );
};
