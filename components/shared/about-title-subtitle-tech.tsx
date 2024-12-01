import { AboutTitleSubtitle } from "./about-title-subtitle";
import { FirstBlock } from "./first-block";

export const AboutTitleSubtitleTech: React.FC = () => {
  return (
    <AboutTitleSubtitle
      title="Используемые технологии"
      subtitle="Мы используем самые современные инструменты и решения, такие как ERP-системы, системы PLM, машинное обучение, интернет вещей (IoT), роботизация"
      backgroundImage="/assets/technologies.jpeg"
    />
  );
};
