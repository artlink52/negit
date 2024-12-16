import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

interface BurgerMenuProps {
  openModal: () => void; // Функция для открытия модального окна
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  // Блокируем прокрутку страницы при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Очистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div>
      {/* Иконка бургер-меню */}
      <Menu
        className="w-9 h-9 cursor-pointer text-[#F97316]"
        onClick={toggleMenu}
      />

      {/* Выпадающее меню */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Контейнер для вертикальной прокрутки */}
        <div className="h-full overflow-y-auto">
          {/* Кнопка закрытия */}
          <div className="flex justify-between items-center p-4">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#065BAA] to-[#F97316]">
              НордЭнергоГрупп Информационные Технологии
            </span>
            <X
              className="w-9 h-9 cursor-pointer text-gray-800"
              onClick={closeMenu}
            />
          </div>

          {/* Ссылки */}
          <ul className="flex flex-col items-start space-y-6 px-6">
            <li>
              <Link
                href="/"
                className="text-gray-800 text-lg hover:text-[#F97316]"
                onClick={closeMenu}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-800 text-lg hover:text-[#F97316]"
                onClick={closeMenu}
              >
                О нас
              </Link>
            </li>
            <li>
              <div>
                <div
                  className="flex items-center gap-2 text-gray-800 text-lg cursor-pointer "
                  onClick={toggleServices}
                >
                  <span>Услуги</span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {isServicesOpen && (
                  <ul className="mt-2 space-y-2 ml-4 text-gray-700">
                    <li>
                      <Link
                        href="/software-development"
                        className="hover:text-[#F97316]"
                        onClick={closeMenu}
                      >
                        Разработка ПО
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/production-digitalization"
                        className="hover:text-[#F97316]"
                        onClick={closeMenu}
                      >
                        Цифровизация производства
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/it-systems-support"
                        className="hover:text-[#F97316]"
                        onClick={closeMenu}
                      >
                        Поддержка ИТ-систем
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/process-automation"
                        className="hover:text-[#F97316]"
                        onClick={closeMenu}
                      >
                        Автоматизация процессов
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <a
                onClick={() => {
                  closeMenu(); // Сначала закрываем меню
                  const footer = document.getElementById("contacts");
                  footer?.scrollIntoView({ behavior: "smooth" }); // Затем прокручиваем к блоку
                }}
                className={`text-lg font-medium text-gray-800 hover:text-gray-900 cursor-pointer`}
              >
                Контакты
              </a>
            </li>
            <li>
              <button
                className="w-full bg-[#F97316] text-white py-2 px-4 rounded-lg hover:bg-[#ea620f] transition"
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
              >
                Связаться с нами
              </button>
            </li>
            <hr className="w-full border-t border-gray-300 my-6" />

            {/* Контакты */}
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 h-5 w-5 text-[#F97316]" />
                <a
                  className="text-gray-800"
                  href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_vatutina_3/Z0kYdQ9jTUAAQFtjfXV3cX9jZA==/?ll=30.383458%2C59.960301&z=17.11"
                >
                  195009, Россия, Санкт-Петербург, улица Ватутина, дом 3, литер
                  А
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 h-5 w-5 text-[#F97316]" />
                <a
                  href="mailto:Mail@neg-it.ru"
                  className="hover:underline text-gray-800"
                >
                  Mail@neg-it.ru
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 h-5 w-5 text-[#F97316]" />
                <a
                  href="tel:+78123267350"
                  className="hover:underline text-gray-800"
                >
                  +7 (812) 326-73-50
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
