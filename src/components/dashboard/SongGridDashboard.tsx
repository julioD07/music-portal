import { SongItemDashboard } from "./SongItemDashboard";
import { usePlay } from "../../common/hooks";

export interface ResponseSongs {
  id: string;
  name: string;
  artist: string;
  filename: string;
  mimetype: string;
  path: string;
  pathImage: string;
  createdAt: Date;
  userId: string;
}

type SongsGridProps = {
  songs: ResponseSongs[];
};

export const SongsGridDashboard: React.FC<SongsGridProps> = ({ songs }) => {
  const { handlePlay } = usePlay();
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Uploaded Songs For User</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {songs.map((song) => (
          <SongItemDashboard
            key={song.id}
            song={song}
            handlePlay={handlePlay}
          />
        ))}
      </div>
    </div>
  );
};
