
import AboutHero from "@/components/About/AboutHero";
import ContactForm from "@/components/Contact/Form";
import EventTicket from "@/components/Home/EventTicket";
import MissionOperationalModel from "@/components/Mission/MissionOperationalModel";
import MissionVision from "@/components/Mission/MissionVision";
import Highlight from '@/components/Home/YearHighlight/page';


const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <Highlight/>
      <MissionVision />
      <MissionOperationalModel />
      <EventTicket />
      <ContactForm/>
    </main>
  );
};

export default AboutPage;