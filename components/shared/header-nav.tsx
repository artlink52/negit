"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRightIcon } from "lucide-react"; // Импорт стрелок из lucide-react
import { useRouter } from "next/router";
import Link from "next/link";

const ClientSideNavigation: React.FC = () => {
  const pathname = usePathname(); // Получаем текущий путь
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Состояние для управления выпадающим меню

  const isActive = (path: string) => pathname === path;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Переключение состояния выпадающего меню
  };

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="hidden lg:flex space-x-6 gap-nav relative z-19">
      <Link
        href="/"
        className={`text-lg font-medium text-[#0F172A] ${
          isActive("/") ? "border-b-2 border-[#F97316]" : "text-[#0F172A]"
        } hover:text-gray-900`}
      >
        Главная
      </Link>
      <Link
        href="/about"
        className={`text-lg font-medium text-[#0F172A] ${
          isActive("/about") ? "border-b-2 border-[#F97316]" : "text-[#0F172A]"
        } hover:text-gray-900`}
      >
        О нас
      </Link>
      {/* Услуги как кнопка без ссылки */}
      <div
        className={`text-lg font-medium ${
          isActive("/services") ? "text-[#F97316] underline" : "text-gray-700"
        } hover:text-gray-900 flex items-center cursor-pointer relative dropdown`} // Добавлен класс dropdown
        onClick={toggleDropdown} // Обработчик клика для открытия/закрытия всплывающего окна
      >
        Услуги
        <ChevronDown
          className={`ml-2 transform transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        {/* Выпадающее окно */}
        {isDropdownOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg p-4 rounded-md w-64 z-10">
            {" "}
            {/* Центрирование меню */}
            <ul className="flex flex-col divide-y divide-gray-200">
              {" "}
              {/* Разделитель между элементами */}
              <li className="flex items-center justify-between py-2 group">
                {" "}
                {/* Добавлен отступ через py-2 */}
                <Link
                  href="/software-development"
                  className={`text-gray-700 group-hover:text-gray-800 transition-colors flex-1 ${isActive("/software-development") ? "border-l-4 border-[#F97316] pl-2" : ""}`} // flex-1 чтобы текст занимал оставшееся пространство
                >
                  Разработка ПО
                </Link>
                <ArrowRightIcon
                  className="text-gray-700 group-hover:text-[#F97316] transition-colors w-5 h-5 flex-shrink-0" // Фиксированный размер иконки и flex-shrink-0
                />
              </li>
              <li className="flex items-center justify-between py-2 group">
                <Link
                  href="/production-digitalization"
                  className={`text-gray-700 group-hover:text-gray-800 transition-colors flex-1 ${isActive("/production-digitalization") ? "border-l-4 border-[#F97316] pl-2" : ""}`}
                >
                  Цифровизация производства
                </Link>
                <ArrowRightIcon className="text-gray-700 group-hover:text-[#F97316] transition-colors w-5 h-5 flex-shrink-0" />
              </li>
              <li className="flex items-center justify-between py-2 group">
                <Link
                  href="/it-systems-support"
                  className={`text-gray-700 group-hover:text-gray-800 transition-colors flex-1 ${isActive("/it-systems-support") ? "border-l-4 border-[#F97316] pl-2" : ""}`}
                >
                  Поддержка ИТ-систем
                </Link>
                <ArrowRightIcon className="text-gray-700 group-hover:text-[#F97316] transition-colors w-5 h-5 flex-shrink-0" />
              </li>
              <li className="flex items-center justify-between py-2 group">
                <Link
                  href="/process-automation"
                  className={`text-gray-700 group-hover:text-gray-800 transition-colors flex-1 ${isActive("/process-automation") ? "border-l-4 border-[#F97316] pl-2" : ""}`}
                >
                  Автоматизация процессов
                </Link>
                <ArrowRightIcon className="text-gray-700 group-hover:text-[#F97316] transition-colors w-5 h-5 flex-shrink-0" />
              </li>
            </ul>
          </div>
        )}
      </div>
      <a
        onClick={() => {
          const footer = document.getElementById("contacts");
          footer?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`text-lg font-medium  hover:text-gray-900 cursor-pointer`}
      >
        Контакты
      </a>
    </nav>
  );
};

export default ClientSideNavigation;
