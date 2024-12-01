import { Container } from "./container";
import YandexMap from "./map";

export const Location: React.FC = () => {
  return (
    <div className="md:py-16 py-10 bg-[#faf9f6]">
      <Container>
        <h2 className="text-[#065BAA] h2-font font-bold mb-[30px]">
          Местоположение
        </h2>
        <YandexMap />
      </Container>
    </div>
  );
};
