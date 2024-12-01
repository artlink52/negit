import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "./container";

export const MainAbout: React.FC = () => {
  return (
    <div className="bg-[#faf9f6] pb-16">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          {/* Левая часть с заголовком */}
          <div className="mb-8 md:mb-0 md:w-[60%] pt-[55px] ">
            <h2 className="h2-font text-[#065BAA] font-bold mb-4 ">
              <span className="border-b-4 border-[#F97316]">
                О компании «НЭГ ИТ»
              </span>
            </h2>
          </div>

          {/* Правая часть с текстами и кнопкой */}
          <div className="md:w-[40%] md:pt-[73px]">
            <h3 className="h3-font  leading-tight text-[#0F172A] font-bold mb-[50px]">
              Мы разрабатываем и поддерживаем IT-системы для оптимизации
              производственных и управленческих процессов, внедряя передовые
              технологии автоматизации и цифровизации.
            </h3>
            <p className="h3-font  leading-tight font-bold mb-4">
              Наша команда из 100+ высококвалифицированных специалистов помогает
              компаниям внедрять цифровые решения, такие как ERP, PLM, IoT,
              машинное обучение и роботизация бизнес-процессов.
            </p>
            <Link href="/about">
              <Button variant="default" className="mt-4">
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
