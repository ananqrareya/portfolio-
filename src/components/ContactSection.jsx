// ContactSection.jsx
import React, { useRef, useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  // قيم EmailJS من .env (Vite)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    try {
      setSending(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
        setStatus({ type: "success", msg: "Message sent! I will get back to you shortly." });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
        setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
      < >
      
    

        <div className=" mx-auto bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate>
            {status.type === "success" && (
              <div className="text-green-600 text-sm" aria-live="polite">{status.msg}</div>
            )}
            {status.type === "error" && (
              <div className="text-red-600 text-sm" aria-live="assertive">{status.msg}</div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="user_name"   /* يطابق متغير EmailJS */
                type="text"
                placeholder="Your name"
                required
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="user_email"  /* يطابق متغير EmailJS */
                type="email"
                placeholder="you@example.com"
                required
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                name="user_phone"  /* يطابق متغير EmailJS */
                type="tel"
                placeholder="+970 597 376 520"
                required
                pattern="^[+0-9\s\-()]{8,18}$"
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="title"        /* استخدم {{title}} بالتمبلِت */
                type="text"
                placeholder="Subject"
                required
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"     /* يطابق متغير EmailJS */
                rows={6}
                placeholder="Type your message here..."
                required
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </>
 
  );
}
