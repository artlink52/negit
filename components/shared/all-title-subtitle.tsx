import { Container } from "./container";

interface AllTitleSubtitleProps {
  title: React.ReactNode;
  subtitle: string;
}

export const AllTitleSubtitle: React.FC<AllTitleSubtitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="relative w-full flex items-start justify-start py-[55px]">
      {/* Контейнер для контента */}
      <Container>
        <div className="relative h-full lg:w-[60%] flex flex-col items-start justify-between fade-in-up">
          <h1 className="h2-font font-bold text-[#0F172A]">{title}</h1>
          <div className="flex items-start mt-4">
            {/* Вертикальная черта слева от подзаголовка */}
            <div className="w-4 bg-[#F97316] mr-3 self-stretch"></div>
            <p className="p-font text-[#0F172A]">{subtitle}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
