import MissionHero from "@/components/Mission/MissionHero";
import MissionStory from "@/components/Mission/MissionStory";
import MissionVision from "@/components/Mission/MissionVision";
import MissionOperationalModel from "@/components/Mission/MissionOperationalModel";
import MissionAccountability from "@/components/Mission/MissionAccountability";
import MissionCTA from "@/components/Mission/MissionCTA";

const MissionPage = () => {
  return (
    <main>
      <MissionHero />
      <MissionStory />
      <MissionVision />
      <MissionOperationalModel />
      <MissionAccountability />
      <MissionCTA />
    </main>
  );
};

export default MissionPage;