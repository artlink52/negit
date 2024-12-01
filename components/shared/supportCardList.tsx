import React from "react";
import { Card } from "./card-component-service";
import {
  ShieldIcon,
  ServerIcon,
  ComputerSupportIcon,
  WrenchIcon,
} from "./icons";
import { Container } from "./container";

export const SupportCardList = () => {
  return (
    <div className="bg-[#0F172A] text-white py-8 px-4 sm:px-6 md:px-8">
      {/* Заголовок и подзаголовок */}
      <Container>
        <div className="lg:w-[60%] my-10">
          <h2 className="h2-font  font-bold mb-4">
            Услуги по поддержке IT-систем
          </h2>
          <p className="p-font  text-gray-300 leading-relaxed">
            Мы предоставляем широкий спектр услуг по обслуживанию и поддержке
            IT-систем для различных типов бизнеса
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="flex flex-wrap gap-6 mb-10">
          {/* Первая строка: три карточки */}
          <Card
            icon={<ComputerSupportIcon />}
            title="Мониторинг и управление инфраструктурой"
            description="Непрерывный мониторинг серверов, сетей и приложений для своевременного выявления и устранения неисправностей  "
            bgColor="#065BAA"
            iconColor="#F97316"
            textColor="#ffffff"
          />
          <Card
            icon={<ShieldIcon />}
            title="Управление безопасностью"
            description="Реализация и управление системами кибербезопасности для защиты данных и сетевой инфраструктуры"
            bgColor="#ffffff"
            iconColor="#065BAA"
            textColor="#0F172A"
          />
          <Card
            icon={<ServerIcon />}
            title="Аналитика больших данных"
            description="Использование анализа больших данных для прогнозирования и предотвращения неисправностей на производственных линиях"
            bgColor="#065BAA"
            iconColor="#F97316"
          />
          <Card
            icon={<WrenchIcon />}
            title="Техническая поддержка"
            description="Предоставление круглосуточной технической поддержки для быстрого реагирования на возникающие проблемы"
            bgColor="#ffffff"
            iconColor="#065BAA"
            textColor="#0F172A"
          />
        </div>
      </Container>
    </div>
  );
};
