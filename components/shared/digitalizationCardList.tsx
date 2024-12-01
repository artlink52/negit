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
} from "./icons";
import { Container } from "./container";

export const DigitalizationCardList = () => {
  return (
    <div className="bg-[#0F172A] text-white py-8 px-4 sm:px-6 md:px-8">
      {/* Заголовок и подзаголовок */}
      <Container>
        <div className="lg:w-[60%] my-10">
          <h2 className="h2-font  font-bold mb-4">Основные решения</h2>
          <p className="p-font  text-gray-300 leading-relaxed">
            Мы предлагаем широкий спектр решений для цифровизации производства,
            от внедрения IoT-систем до автоматизации контроля качества
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="flex flex-wrap gap-6 mb-10">
          {/* Первая строка: три карточки */}
          <Card
            icon={<RobotIcon />}
            title="Роботизированные системы контроля качества"
            description="Интеграция автоматизированных систем контроля качества с 3D моделями для повышения точности производства"
            bgColor="#065BAA"
            iconColor="#F97316"
            textColor="#ffffff"
          />
          <Card
            icon={<TrackingIcon />}
            title="IoT решения для мониторинга"
            description="Внедрение систем интернета вещей для отслеживания состояния оборудования и производственных показателей"
            bgColor="#ffffff"
            iconColor="#065BAA"
            textColor="#0F172A"
          />
          <Card
            icon={<AnalyticIcon />}
            title="Аналитика больших данных"
            description="Использование анализа больших данных для прогнозирования и предотвращения неисправностей на производственных линиях"
            bgColor="#065BAA"
            iconColor="#F97316"
          />
        </div>
      </Container>
    </div>
  );
};
