import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, captchaToken } = await req.json();

  // Проверка капчи
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  const captchaResponse = await fetch(verificationUrl, { method: "POST" });
  const captchaData = await captchaResponse.json();

  if (!captchaData.success) {
    return NextResponse.json({ message: "Проверка капчи не пройдена" }, { status: 400 });
  }

  // Отправка email через nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Например, "smtp.gmail.com"
      port: 587, // или 465 для SSL
      secure: false, // true для 465, false для других портов
      auth: {
        user: process.env.SMTP_USER, // Ваш email
        pass: process.env.SMTP_PASS, // Ваш пароль приложения
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // От кого письмо
      to: process.env.MAIL_TO, // Кому отправить (например, вам)
      subject: "Новое сообщение с формы обратной связи",
      text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Сообщение отправлено!" }, { status: 200 });
  } catch (error) {
    console.error("Ошибка при отправке email:", error);
    return NextResponse.json({ message: "Ошибка при отправке email." }, { status: 500 });
  }
}
