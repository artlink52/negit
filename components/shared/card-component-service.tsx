import React, { ReactElement } from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string; // Цвет фона карточки
  iconColor?: string; // Цвет иконки
  textColor?: string; // Цвет текста
}

export const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  bgColor,
  iconColor = "#ffffff",
  textColor = "#ffffff", // По умолчанию текст белый
}) => {
  // Устанавливаем цвет для SVG-иконок
  const styledIcon =
    React.isValidElement(icon) && iconColor
      ? React.cloneElement(icon as ReactElement, {
          fill: iconColor, // Цвет заливки
          // Цвет обводки
        })
      : icon;

  return (
    <div
      className={`flex-1 min-w-[300px] p-6 rounded-lg shadow-md transform transition-transform `}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-center mb-4">{styledIcon}</div>
      <h3
        className="h3-font font-bold mb-2 text-center"
        style={{ color: textColor }}
      >
        {title}
      </h3>
      <p className="h4-font text-center" style={{ color: textColor }}>
        {description}
      </p>
    </div>
  );
};
