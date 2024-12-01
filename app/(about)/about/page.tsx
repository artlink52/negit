import { AboutTitleSubtitleTeam } from "@/components/shared/about-title-subtitle-team";
import { AboutTitleSubtitleTech } from "@/components/shared/about-title-subtitle-tech";
import { FirstBlockAbout } from "@/components/shared/first-block-about";
import { KeyAchievements } from "@/components/shared/key-achievements";
import { Location } from "@/components/shared/location";
import { MissionValues } from "@/components/shared/mission-values";

export default function About() {
  return (
    <main>
      <FirstBlockAbout />
      <MissionValues />
      <AboutTitleSubtitleTeam />
      <KeyAchievements />
      <AboutTitleSubtitleTech />
      <Location />
    </main>
  );
}
