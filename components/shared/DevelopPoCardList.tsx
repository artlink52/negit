import React from "react";
import { Card } from "./card-component-service";
import { EngineeringIcon, ERPSystemIcon, ProcessIcon, AIIcon } from "./icons";
import { Container } from "./container";

export const DevelopPOCardList = () => {
  return (
    <div className="bg-[#0F172A] text-white py-8 px-4 sm:px-6 md:px-8">
      {/* Заголовок и подзаголовок */}
      <Container>
        <div className="lg:w-[60%] my-10">
          <h2 className="h2-font  font-bold mb-4">
            Направления разработки программного обеспечения
          </h2>
          <p className="p-font  text-gray-300 leading-relaxed">
            Мы предлагаем широкий спектр решений для различных задач бизнеса и
            производства: от автоматизации рабочих процессов до цифровизации
            проектирования и внедрения ERP-систем.
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {/* Первая строка: три карточки */}
          <Card
            icon={<EngineeringIcon />}
            title="Инженерные решения"
            description="Создаем ПО для автоматизации инженерных расчетов, ускоряя процесс проектирования и анализа данных."
            bgColor="#065BAA"
            iconColor="#F97316"
            textColor="#ffffff"
          />
          <Card
            icon={<ERPSystemIcon />}
            title="ERP-системы"
            description="Внедрение ERP-систем для управления производственными процессами и ресурсами."
            bgColor="#ffffff"
            iconColor="#065BAA"
            textColor="#0F172A"
          />
          <Card
            icon={<ProcessIcon />}
            title="Цифровизация процессов"
            description="Автоматизируем бизнес-процессы и производственные задачи."
            bgColor="#065BAA"
            iconColor="#F97316"
          />

          <div className="col-span-1 lg:col-span-3">
            <Card
              icon={<AIIcon />}
              title="Машинное обучение"
              description="Встраиваем алгоритмы машинного обучения для обработки больших данных."
              bgColor="#ffffff"
              iconColor="#065BAA"
              textColor="#0F172A"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
