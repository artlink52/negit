import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { X, Loader2 } from "lucide-react"; // Иконки
import { Button } from "@/components/ui/button"; // Кнопка из shadcn
import { toast } from "react-hot-toast"; // Импортируем toast

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [captchaToken, setCaptchaToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Обработка токена капчи
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token || "");
  };

  const onSubmit = async (data: FormData) => {
    if (!captchaToken) {
      toast.error("Пожалуйста, подтвердите, что вы не робот."); // Показываем тостер об ошибке
      return;
    }

    setIsSubmitting(true); // Устанавливаем состояние отправки

    try {
      const response = await fetch("/negit/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, captchaToken }),
      });

      if (response.ok) {
        toast.success(
          "Сообщение успешно отправлено! Мы свяжемся с Вами в ближайшее время."
        ); // Уведомление об успехе
        setTimeout(onClose, 1000); // Закрываем модальное окно через 1 сек
      } else {
        toast.error("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      toast.error("Произошла ошибка. Попробуйте позже."); // Уведомление об ошибке
    } finally {
      setIsSubmitting(false); // Возвращаем кнопку в исходное состояние
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-white max-w-lg mx-auto p-6 rounded-lg shadow-lg space-y-4"
    >
      {/* Заголовок и кнопка закрытия */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Обратная связь</h2>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:text-orange-600"
        >
          <X size={24} />
        </button>
      </div>
      <p className="text-gray-500 mb-4">
        Оставьте сообщение, и мы обязательно свяжемся с Вами
      </p>

      {/* Поля формы */}
      <div>
        <label className="block text-sm font-medium">Имя</label>
        <input
          {...register("name", { required: "Имя обязательно" })}
          type="text"
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">E-mail</label>
        <input
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: "Некорректный email",
            },
          })}
          type="email"
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Ваше сообщение</label>
        <textarea
          {...register("message", { required: "Сообщение обязательно" })}
          className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* reCAPTCHA v2 */}
      <div className="mt-4">
        <ReCAPTCHA
          sitekey="6LepdJwqAAAAAF_DVpf5clXg1R2J5_QCThIA1IFk"
          onChange={handleCaptchaChange}
        />
      </div>

      {/* Кнопка отправки */}
      <Button
        type="submit"
        className="w-full mt-4"
        disabled={isSubmitting} // Блокируем кнопку при отправке
      >
        {isSubmitting ? ( // Если отправляется, показываем индикатор
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="animate-spin" size={20} />
            <span>Отправка...</span>
          </div>
        ) : (
          "Отправить"
        )}
      </Button>
    </form>
  );
}
