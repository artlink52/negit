import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { X } from "lucide-react"; // Иконка закрытия

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

  // Функция для получения токена reCAPTCHA
  const onChangeCaptcha = (value: string | null) => {
    setCaptchaToken(value || "");
  };

  const onSubmit = async (data: FormData) => {
    if (!captchaToken) {
      alert("Пожалуйста, подтвердите, что вы не робот.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, captchaToken }),
      });

      if (response.ok) {
        alert("Сообщение отправлено!");
        onClose();
      } else {
        alert("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка. Попробуйте позже.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-white max-w-lg mx-auto p-6 rounded-lg shadow-lg space-y-4"
    >
      {/* Контейнер для заголовка и кнопки закрытия */}
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

      {/* Google reCAPTCHA */}
      <div className="mt-4">
        <ReCAPTCHA
          sitekey="6LffCI4qAAAAAP3jRcO45WNQAfiI_hznVcukDQBZ"
          onChange={onChangeCaptcha}
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg w-full transition-colors mt-4"
      >
        Отправить
      </button>
    </form>
  );
}
