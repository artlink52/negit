import { Container } from "./container";
import {
  ComputerAchievementIcon,
  ComputerIcon,
  IntegrationIcon,
  OptimizationIcon,
} from "./icons";

export const KeyAchievements: React.FC = () => {
  return (
    <div className="md:py-16 py-10 bg-[#faf9f6]">
      <Container>
        <h2 className="text-[#065BAA] h2-font font-bold mb-[50px]">
          Ключевые <span className="text-[#F97316]">достижения</span>
        </h2>
        <div className="flex gap-[20px] mb-[50px] items-center">
          <div className="h-[40px] w-[40px]">
            <IntegrationIcon />
          </div>
          <p className="text-[#0F172A] p-font font-medium">
            Разработано и внедрено 20+ проектов цифровизации производства
          </p>
        </div>
        <div className="flex gap-[20px] mb-[50px] items-center">
          <div className="h-[40px] w-[40px]">
            <OptimizationIcon />
          </div>
          <p className="text-[#0F172A] p-font font-medium">
            Оптимизировано более 50 бизнес-процессов
          </p>
        </div>
        <div className="flex gap-[20px]  items-center">
          <div className="h-[40px] w-[40px]">
            <ComputerAchievementIcon />
          </div>
          <p className="text-[#0F172A] p-font font-medium">
            Внедрены системы ERP, PLM, IoT на крупных промышленных предприятиях
          </p>
        </div>
      </Container>
    </div>
  );
};
