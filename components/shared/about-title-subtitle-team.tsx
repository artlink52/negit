import { AboutTitleSubtitle } from "./about-title-subtitle";
import { FirstBlock } from "./first-block";

export const AboutTitleSubtitleTeam: React.FC = () => {
  return (
    <AboutTitleSubtitle
      title="Команда"
      subtitle="В НЭГ ИТ работают более 100 высококвалифицированных специалистов с опытом в области цифровизации производства и автоматизации процессов"
      backgroundImage="/assets/team.jpg"
    />
  );
};
