import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_p04d1ix",
        "template_nsdy8rg",
        form.current,
        "HwFCcTlnCv13Jq6Cy"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-16 mb-20"
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="grid gap-3 mt-6">
        <input
          name="name"
          placeholder="Your name"
          required
          className="p-3 border rounded-md"
        />
        <input
          name="email"
          placeholder="Your email"
          required
          type="email"
          className="p-3 border rounded-md"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="p-3 border rounded-md h-32"
        />
        <button
          type="submit"
          disabled={sending}
          className={`px-4 py-2 rounded-md text-white ${
            sending ? "bg-gray-400" : "bg-teal-600"
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.section>
  );
};

export default ContactSection;
