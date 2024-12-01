import { Container } from "./container";

interface FirstBlockProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const FirstBlock: React.FC<FirstBlockProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <section className="relative w-full flex items-start justify-start py-[150px]">
      {/* Фоновое изображение с фиксированным позиционированием */}
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center bg-custom"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-70 -z-10"></div>

      {/* Контейнер для контента */}
      <Container>
        <div className="relative h-full lg:w-[60%] flex flex-col  items-start justify-between fade-in-up ">
          <h1 className="h1-font font-medium lg:font-bold text-[#faf9f6] leading-tight">
            {title}
          </h1>
          <p className="p-font text-[#faf9f6] mt-4">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
};
