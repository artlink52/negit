import { Container } from "./container";

interface AboutTitleSubtitleProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const AboutTitleSubtitle: React.FC<AboutTitleSubtitleProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <section className="relative w-full flex items-start justify-start py-[150px]">
      {/* Фоновое изображение с фиксированным позиционированием */}
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center bg-custom"
        // style={{
        //   backgroundImage: `url(/negit${backgroundImage})`,
        // }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-70 -z-10"></div>

      {/* Контейнер для контента */}
      <Container>
        <div className="relative h-full lg:w-[60%] flex flex-col items-start justify-between fade-in-up">
          <h1 className="h2-font font-medium lg:font-bold text-[#faf9f6]">
            {title}
          </h1>
          <div className="flex items-start mt-4">
            {/* Вертикальная черта слева от подзаголовка */}
            <div className="w-2 bg-[#F97316] mr-3 self-stretch"></div>
            <p className="p-font text-[#faf9f6]">{subtitle}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
