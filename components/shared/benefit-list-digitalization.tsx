import BenefitList from "./benefit-list";

const benefits = [
  {
    text: "Повышение производительности",
    description:
      "Цифровые системы оптимизируют рабочие процессы и сокращают время простоя оборудования",
  },
  {
    text: "Улучшение качества",
    description:
      "Автоматизированный контроль качества снижает количество брака и ошибок в производстве",
  },
  {
    text: "Снижение затрат",
    description:
      "Цифровые системы помогают экономить на ресурсах и оптимизировать затраты",
  },
  {
    text: "Повышение прозрачности",
    description:
      "Реализация систем мониторинга в реальном времени улучшает видимость процессов",
  },
];

export const BenefitListDigitalization = () => {
  return (
    <BenefitList
      title={
        <>
          Как цифровизация <span className="text-[#F97316]">улучшает</span>{" "}
          производство?
        </>
      }
      items={benefits}
    />
  );
};
