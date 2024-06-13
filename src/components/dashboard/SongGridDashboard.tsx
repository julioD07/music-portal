import { useAppDispatch } from "../../store";
import { play, setSong } from "../../store/slices";
import { urlBase } from "../../common/adapters/httpAdapter";
import { SongItemDashboard } from "./SongItemDashboard";

export interface ResponseSongs {
  id:        string;
  name:      string;
  artist:    string;
  filename:  string;
  mimetype:  string;
  path:      string;
  pathImage: string;
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
        console.log(`${urlBase}/api/music/file/${song.id}`);
        dispatch(
          setSong({
            title: song.name,
            artist: song.artist,
            imageUrl: "https://via.placeholder.com/150",
            src: `${urlBase}/api/music/file/${song.id}.mp3`,
          })
        );
        dispatch(play());
      };
    return (
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Uploaded Songs For User</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {songs.map((song) => (
            <SongItemDashboard key={song.id} song={song} handlePlay={handlePlay} />
          ))}
        </div>
      </div>
    );
  };
  