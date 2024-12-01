
import { NextResponse } from "next/server";

const secretKey = process.env.RECAPTCHA_SECRET_KEY!;

const verifyCaptcha = async (captchaToken: string) => {
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: captchaToken,
    }),
  });

  const data = await response.json();
  return data.success;
};

export async function POST(req: Request) {
  try {
    const { name, email, message, captchaToken } = await req.json();

    if (!captchaToken) {
      return NextResponse.json({ message: "Капча не пройдена" }, { status: 400 });
    }

    const isValid = await verifyCaptcha(captchaToken);
    if (!isValid) {
      return NextResponse.json({ message: "Ошибка капчи" }, { status: 400 });
    }

    // Логика отправки письма
    console.log("Сообщение от:", name, email, message);

    return NextResponse.json({ message: "Сообщение успешно отправлено!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Ошибка сервера" }, { status: 500 });
  }
}
