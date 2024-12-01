import { FirstBlock } from "./first-block";

export const FirstBlockAbout: React.FC = () => {
  return (
    <FirstBlock
      title="ООО «НЭГ ИТ»"
      subtitle="Наша компания – ведущий поставщик цифровых решений для оптимизации производственных и управленческих процессов. С 2021 года мы внедряем передовые технологии, такие как ERP, PLM, IoT, машинное обучение и роботизация, помогая нашим клиентам повышать производительность."
      backgroundImage="/assets/first-block-about.jpg"
    />
  );
};
