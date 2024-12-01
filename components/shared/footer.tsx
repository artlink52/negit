import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Иконки контактов
import { Container } from "./container";

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-[#065BAA] text-white py-10">
      <Container>
        {/* Контакты */}
        <div className="text-center">
          <h3 className="h3-font font-bold mb-6">
            <span className="border-b-2 border-[#F97316]">Контакты</span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center">
              <FaMapMarkerAlt className="mr-3 h-5 w-5" />
              <a
                className="h4-font"
                href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_vatutina_3/Z0kYdQ9jTUAAQFtjfXV3cX9jZA==/?ll=30.383458%2C59.960301&z=17.11"
              >
                195009, Россия, Санкт-Петербург, улица Ватутина, дом 3, литер А
              </a>
            </li>
            <li className="flex items-center justify-center">
              <FaEnvelope className="mr-3 h-5 w-5" />
              <a
                href="mailto:Mail@neg-it.ru"
                className="hover:underline h4-font"
              >
                Mail@neg-it.ru
              </a>
            </li>
            <li className="flex items-center justify-center">
              <FaPhoneAlt className="mr-3 h-5 w-5" />
              <a href="tel:+78123267350" className="hover:underline h4-font">
                +7 (812) 326-73-50
              </a>
            </li>
          </ul>
        </div>

        {/* Копирайт */}
        <div className="mt-10 text-center h4-font">
          <p>© 2024 НЭГ ИТ</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
