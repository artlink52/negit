import { sections } from "@/components/shared/card-for-main-data";
import { MainAbout } from "@/components/shared/main-about";
import MainTechnoligies from "@/components/shared/main-technologies";
import { MainIntro } from "@/components/shared/main-intro";
import { MainServices } from "@/components/shared/main-services";
export default function Home() {
  return (
    <main>
      <MainIntro />
      <MainAbout />
      <MainServices />
      <MainTechnoligies sections={sections} />
    </main>
  );
}
