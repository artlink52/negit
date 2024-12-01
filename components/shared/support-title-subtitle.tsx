import { AllTitleSubtitle } from "./all-title-subtitle";

export const SupportTitleSubtitle: React.FC = () => {
  return (
    <AllTitleSubtitle
      title={
        <>
          Что включает <span className="text-[#F97316]">поддержка</span>{" "}
          IT-систем?
        </>
      }
      subtitle="Поддержка IT-систем — это комплекс мероприятий, направленных на обеспечение бесперебойной работы всех цифровых компонентов предприятия. Мы предлагаем мониторинг, диагностику и устранение неполадок, что позволяет минимизировать время простоя и повысить эффективность работы "
    />
  );
};
