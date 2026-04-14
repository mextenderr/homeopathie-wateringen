import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, tel, onderwerp, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ilonka.web.contact@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "ilonka.web.contact@gmail.com",
      to: "ilonkadevos@gmail.com",
      subject: "Contact formulier",
      text: `Naam: ${name}\nEmail: ${email}\nTelefoonnumer: ${tel}\n\nOnderwerp: ${onderwerp}\n\nBericht:\n${message}`,
    });

    return NextResponse.json({ message: "Form submitted" });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
