import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CopaInfo from '../components/CopaInfo';
import PlayersSection from '../components/PlayersSection';
import StatisticsSection from '../components/StatisticsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Header />
      <main>
        <HeroSection heroImage="https://media.base44.com/images/public/6a1dbaa06347f9c8c65ffa9e/f3ee586ae_generated_5fb92f96.png" />
        <CopaInfo />
        <PlayersSection />
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
}