import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(null);
  setLoading(true);

  // ✅ Log the environment variables before sending
  console.log(
    "ENV CHECK:",
    process.env.REACT_APP_EMAILJS_SERVICE,
    process.env.REACT_APP_EMAILJS_TEMPLATE,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );

  const templateParams = {
    from_name: form.name,
    reply_to: form.email,
    message: form.message,
  };

  try {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );
    setStatus("ok");
    setForm({ name: "", email: "", message: "" });
  } catch (err) {
    console.error("EmailJS error:", err);
    setStatus("error");
  } finally {
    setLoading(false);
  }
};



  return (
    <motion.section
      id="contact"
      className="py-24 px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Let's Build Something Together
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto flex flex-col gap-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-4 rounded-lg border focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-4 rounded-lg border focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          className="p-4 rounded-lg border focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
        />

        <button
          type="submit"
          disabled={loading}
          className={`self-center px-8 py-3 rounded-lg font-semibold shadow ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "ok" && (
          <p className="text-center text-green-600 pt-2">
            Thanks! Message sent. ✅
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-600 pt-2">
            Sorry, something went wrong. ❌
          </p>
        )}
      </form>
    </motion.section>
  );
};

export default Contact;
