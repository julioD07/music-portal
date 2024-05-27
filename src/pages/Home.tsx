
import Header from '../components/Header';
import SongGrid from '../components/SongGrid';
import Footer from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-darkbg text-gray-900 dark:text-gray-100">
      <Header />
      <main className="w-full max-w-5xl p-4 flex-grow">
        <SongGrid />
      </main>
      <Footer />
    </div>
  );
};


