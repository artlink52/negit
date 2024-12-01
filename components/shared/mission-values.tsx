import React from "react";
import { Container } from "./container";

export const MissionValues: React.FC = () => {
  return (
    <div className="bg-[#faf9f6] py-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16  ">
          {/* Блок "Наша миссия" */}
          <div className="flex flex-col items-center text-center px-6 md:px-12">
            <h2 className="text-[#065BAA] h2-font font-bold mb-4">
              <span className="border-b-4 border-[#F97316]">Наша миссия</span>
            </h2>
            <p className="text-[#065BAA] h4-font">
              Мы стремимся к созданию устойчивых и высокоэффективных
              производственных экосистем, используя инновационные цифровые
              решения.
            </p>
          </div>

          {/* Разделительная линия */}
          <div className="hidden md:block w-px h-[150px] bg-[#948484]"></div>
          <div className="block md:hidden w-full h-px bg-[#948484] my-4"></div>

          {/* Блок "Наши ценности" */}
          <div className="flex flex-col items-center text-center px-6 md:px-12">
            <h2 className="text-[#065BAA] h2-font font-bold mb-4">
              <span className="border-b-4 border-[#F97316]">Наши ценности</span>
            </h2>
            <p className="text-[#065BAA] h4-font">
              Профессионализм, инновации, ответственность перед клиентами — это
              основные принципы, которые руководят нашей деятельностью.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
