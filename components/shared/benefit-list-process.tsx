import BenefitList from "./benefit-list";

const benefits = [
  {
    text: "Экономия времени и ресурсов",
    description: "Автоматизация сокращает затраты на выполнение рутинных задач",
  },
  {
    text: "Снижение ошибок",
    description:
      "Минимизация человеческого фактора за счёт автоматизированных решений",
  },
  {
    text: "Увеличение производительности",
    description: "Автоматизация повышает скорость выполнения операций",
  },
  {
    text: "Гибкость и масштабируемость",
    description:
      "Возможность легко масштабировать решения по мере роста компании",
  },
];

export const BenefitListProcess = () => {
  return (
    <BenefitList
      title={
        <>
          Почему стоит <span className="text-[#F97316]">автоматизировать</span>{" "}
          бизнес?
        </>
      }
      items={benefits}
    />
  );
};
