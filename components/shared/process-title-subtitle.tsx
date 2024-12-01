import { AllTitleSubtitle } from "./all-title-subtitle";

export const ProcessTitleSubtitle: React.FC = () => {
  return (
    <AllTitleSubtitle
      title={
        <>
          Что включает <span className="text-[#F97316]">автоматизация</span>{" "}
          процессов?
        </>
      }
      subtitle="Автоматизация процессов позволяет бизнесам ускорить выполнение рутинных задач и упростить сложные операции. Мы предлагаем внедрение цифровых решений, которые автоматизируют управление производственными и управленческими процессами "
    />
  );
};
