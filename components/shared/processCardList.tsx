import React from "react";
import { Card } from "./card-component-service";
import {
  EngineeringIcon,
  ERPSystemIcon,
  ProcessIcon,
  AIIcon,
  RobotIcon,
  TrackingIcon,
  AnalyticIcon,
  RobotHandIcon,
  ComputerSupportIcon,
  BusinessProcessIcon,
  LogisticIcon,
} from "./icons";
import { Container } from "./container";

export const ProcessCardList = () => {
  return (
    <div className="bg-[#0F172A] text-white py-8 px-4 sm:px-6 md:px-8">
      {/* Заголовок и подзаголовок */}
      <Container>
        <div className="lg:w-[60%] my-10">
          <h2 className="h2-font  font-bold mb-4">
            Наши решения по автоматизации
          </h2>
          <p className="p-font  text-gray-300 leading-relaxed">
            Мы внедряем решения для автоматизации ключевых процессов бизнеса
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="flex flex-wrap gap-6 mb-10">
          {/* Первая строка: три карточки */}
          <Card
            icon={<RobotHandIcon />}
            title="Автоматизация производственных процессов"
            description="Внедрение роботизированных систем для автоматизации сборки, мониторинга качества и логистики на производстве"
            bgColor="#065BAA"
            iconColor="#F97316"
            textColor="#ffffff"
          />
          <Card
            icon={<ComputerSupportIcon />}
            title="Автоматизация офисных процессов"
            description="Автоматизация рутинных задач, таких как отчёты, планирование и документооборот, что позволяет сократить время и повысить точность"
            bgColor="#ffffff"
            iconColor="#065BAA"
            textColor="#0F172A"
          />
          <Card
            icon={<BusinessProcessIcon />}
            title="Роботизация бизнес-процессов"
            description="Техническое обслуживание серверов, резервное копирование, восстановление данных и управление базами данных"
            bgColor="#065BAA"
            iconColor="#F97316"
          />
          <Card
            icon={<LogisticIcon />}
            title="Автоматизация логистики"
            description="Автоматизация управления складами, транспортировкой и отслеживанием запасов для повышения эффективности и снижения затрат"
            bgColor="#ffffff"
            iconColor="#065BAA"
            textColor="#0F172A"
          />
        </div>
      </Container>
    </div>
  );
};
