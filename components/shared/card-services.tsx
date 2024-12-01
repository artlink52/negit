import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react"; // Импорт стрелки

type CardProps = {
  title: string;
  description: string;
  href: string;
  bgColor: string;
  titleColor: string;
  descriptionColor: string;
  arrowColor: string;
  icon: React.ReactNode;
  iconColor: string;
};

export const CardServices: React.FC<CardProps> = ({
  title,
  description,
  href,
  bgColor,
  titleColor,
  descriptionColor,
  arrowColor,
  icon,
  iconColor,
}) => {
  return (
    <Link href={href}>
      <div
        className={`${bgColor} flex flex-col justify-between shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer group`}
        style={{ minHeight: "250px" }}
      >
        <h3 className={`h3-font font-semibold mb-2 ${titleColor}`}>{title}</h3>
        <h4 className={`h4-font mb-4 ${descriptionColor}`}>{description}</h4>
        <div className="flex justify-between items-end">
          <ArrowRightIcon
            className={`h-[30px] w-[30px] ${arrowColor} group-hover:text-orange-500 duration-300`}
          />
          <span className={iconColor}>{icon}</span>
        </div>
      </div>
    </Link>
  );
};
