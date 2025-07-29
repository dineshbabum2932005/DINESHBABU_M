// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);
app.use(express.json());

/* ------------------------------------------------------------- */
/* Utility: create transporter for a given port / secure combo   */
/* ------------------------------------------------------------- */
const createTransporter = (port, secure) =>
  nodemailer.createTransport({
    host: "smtp.gmail.com",
    port,
    secure, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000, // 10 s
    greetingTimeout: 10000,
  });

/* ------------------------------------------------------------- */
/* POST /api/contact                                             */
/* ------------------------------------------------------------- */
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "All fields (name, email, message) are required." });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "📨 Portfolio contact form",
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  /* --- 1️⃣  Try STARTTLS on port 587 first ------------------ */
  let transporter = createTransporter(587, false);
  try {
    await transporter.verify();
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (firstErr) {
    console.warn("Port 587 failed:", firstErr.message);
  }

  /* --- 2️⃣  Fallback to SSL on port 465 --------------------- */
  transporter = createTransporter(465, true);
  try {
    await transporter.verify();
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (secondErr) {
    console.error("Port 465 failed:", secondErr.message);
    return res.status(500).json({
      error: secondErr.message.includes("timeout")
        ? "SMTP connection timed out. Your network may block ports 587/465."
        : secondErr.message,
    });
  }
});

/* ------------------------------------------------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✉️  Contact API running on port ${PORT}`)
);
