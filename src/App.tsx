import Header from './components/Header';
import Hero from './components/Hero';
import Ceremony from './components/Ceremony';
import Reception from './components/Reception';
import Practical from './components/Practical';
import Footer from './components/Footer';
import BridalParty from './components/BridalParty';

function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      <main>
        <Hero />
        <Ceremony />
        <Reception />
        <Practical />
        <BridalParty />
      </main>
      <Footer />
    </div>
  );
}

export default App;