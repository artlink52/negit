import { AllTitleSubtitle } from "./all-title-subtitle";

export const DigitalizationTitleSubtitle: React.FC = () => {
  return (
    <AllTitleSubtitle
      title={
        <>
          Что такое <span className="text-[#F97316]">цифровизация</span>{" "}
          производства?
        </>
      }
      subtitle="Цифровизация производства — это внедрение передовых технологий для автоматизации и управления производственными процессами. Наши решения помогают предприятиям переходить на цифровую экосистему, включая системы мониторинга, анализа данных и роботизацию "
    />
  );
};
