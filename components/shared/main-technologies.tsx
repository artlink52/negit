import MainCard from "./main-card";
import { Container } from "./container";

interface MainTechnologiesProps {
  sections: {
    heading: string;
    cards: {
      Icon1: React.FC;
      Icon2?: React.FC;
      title: string;
      description: string;
    }[];
  }[];
}

const MainTechnoligies: React.FC<MainTechnologiesProps> = ({ sections }) => {
  return (
    <section className="bg-[#faf9f6] pb-16 pt-[55px]">
      <Container>
        <h2 className="h2-font text-left text-[#065BAA] leading-tight font-bold mb-8 max-w-[550px]">
          Мы используем{" "}
          <span className="text-[#F97316]">передовые технологии</span>
        </h2>
        {sections.map((section, index) => (
          <div key={index} className="mb-16">
            {/* Заголовок для каждой секции */}
            <h2 className="text-left text-3xl font-bold mb-8 text-[#0F172A]">
              {section.heading}
            </h2>

            {/* Карточки для каждой секции */}
            <div className="flex flex-wrap gap-6">
              {section.cards.map((card, cardIndex) => (
                <MainCard
                  key={cardIndex}
                  Icon1={card.Icon1}
                  Icon2={card.Icon2}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default MainTechnoligies;
