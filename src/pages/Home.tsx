import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import Services from '../components/Services';
import PersonalTrainingSection from '../components/PersonalTrainingSection';
import ChallengeWinners from '../components/ChallengeWinners';
import CorporateSection from '../components/CorporateSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroCarousel autoplay autoplayDelay={6000} />
      <About />
      <Services />
      <PersonalTrainingSection />
      <ChallengeWinners />
      <CorporateSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
