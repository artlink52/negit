import { CardServices } from "./card-services";
import { Container } from "./container";
import {
  AutomatizationIcon,
  ComputerIcon,
  DigitalizationIcon,
  SupportIcon,
} from "./icons";

export const MainServices: React.FC = () => {
  return (
    <section className="bg-[#0F172A] pb-16 pt-[55px]">
      <Container>
        <h2 className="h2-font text-[#faf9f6] font-bold mb-10 ">
          <span className="border-b-4 border-[#F97316]">Услуги</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardServices
            title="Разработка ПО"
            description="Создание специализированного ПО для управления производством, автоматизации процессов и инженерных решений, адаптированное под индивидуальные задачи наших клиентов"
            href="/software-development"
            bgColor="bg-[#065BAA]"
            titleColor="text-white"
            descriptionColor="text-gray-200"
            arrowColor="text-white"
            icon={<ComputerIcon />} // Убедитесь, что используете text-white
            iconColor="text-white"
          />
          <CardServices
            title="Цифровизация производства "
            description="Мы внедряем цифровые технологии, такие как IoT и AI, для оптимизации процессов производства, повышения эффективности и автоматизации рабочих процессов"
            href="/production-digitalization"
            bgColor="bg-white"
            titleColor="text-[#065BAA]"
            descriptionColor="text-[#065BAA]"
            arrowColor="text-[#065BAA]"
            icon={<DigitalizationIcon />}
            iconColor="text-[#065BAA]" // Убедитесь, что используете text-white
          />
          <CardServices
            title="Поддержка IT-систем"
            description="Наша команда обеспечивает круглосуточную поддержку IT-систем, включая ERP, PLM, и CAD, обеспечивая их стабильную работу и оперативное устранение неисправностей"
            href="/it-systems-support"
            bgColor="bg-white"
            titleColor="text-[#065BAA]"
            descriptionColor="text-[#065BAA]"
            arrowColor="text-[#065BAA]"
            icon={<SupportIcon />}
            iconColor="text-[#065BAA]" // Убедитесь, что используете text-white
          />
          <CardServices
            title="Автоматизация процессов"
            description="Мы разрабатываем автоматизированные решения для управления бизнес-процессами, упрощая их и делая их более эффективными с помощью цифровых инструментов"
            href="/process-automation"
            bgColor="bg-[#065BAA]"
            titleColor="text-white"
            descriptionColor="text-gray-200"
            arrowColor="text-white"
            icon={<AutomatizationIcon />}
            iconColor="text-white" // Убедитесь, что используете text-white
          />
          {/* Добавьте другие карточки здесь */}
        </div>
      </Container>
    </section>
  );
};
