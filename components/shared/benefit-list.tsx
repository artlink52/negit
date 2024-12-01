import { Dot } from "lucide-react"; // Используется точка из библиотеки lucide
import { Container } from "./container";

interface BenefitListProps {
  title: React.ReactNode;
  items: { text: string; description: string }[];
}

const BenefitList: React.FC<BenefitListProps> = ({ title, items }) => {
  return (
    <div className="py-[55px]">
      <Container>
        {/* Заголовок */}
        <h2 className="h2-font font-bold text-[#0F172A] mb-6">{title}</h2>

        {/* Список */}
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Dot size={60} className="text-[#F97316] flex-shrink-0" />
              <div>
                <span className="p-font text-[#0F172A] font-bold">
                  {item.text}:{" "}
                </span>
                <span className="p-font text-[#0F172A]">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default BenefitList;
