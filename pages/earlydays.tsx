import Header from '../components/earlydays/Header';
import Navbar from '../components/earlydays/Navbar';
import MainContent from '../components/earlydays/MainContent';
import Footer from '../components/earlydays/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;