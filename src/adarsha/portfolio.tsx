import React, { useState, useEffect, useRef } from "react";
import { color, motion } from "framer-motion";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Downloading } from "@mui/icons-material";
import DataObjectIcon from "@mui/icons-material/DataObject";
import FacebookIcon from "@mui/icons-material/Facebook";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import emailjs from "emailjs-com";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
}
const iconMap: Record<string, React.ElementType> = {
  LinkedInIcon,
  GitHubIcon,
  YouTubeIcon,
  FacebookIcon,
  DataObjectIcon,
};
const social_media = [
  {
    name: "linkedin",
    logo: "LinkedInIcon",
    links: "https://www.linkedin.com/in/adarsha-bairagi-079940260/",
  },
  {
    name: "github",
    logo: "GitHubIcon",
    links: "https://github.com/adarsha5",
  },
  {
    name: "youtube",
    logo: "YouTubeIcon",
    links: "#",
  },
  {
    name: "facebook",
    logo: "FacebookIcon",
    links: "https://www.facebook.com/profile.php?id=100039308932060",
  },
  {
    name: "leetcode",
    logo: "DataObjectIcon",
    links: "https://leetcode.com/u/adarsha45/",
  },
];
const projectsData: Project[] = [
  {
    id: 1,
    title: "File Transfer System",
    subtitle: "Secure Peer-to-peer file transfering",
    description:
      "Designed and implemented a system for transferring files using Java Sockets.",
    tech: ["Java", "Socket Programmin"],
    link: "https://github.com/adarsha5/JAVA-socket-programming.git",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    subtitle: "Content-based movie recommender",
    description:
      "A movie recommendation system built using cosine similarity on TF-IDF features extracted from movie metadata.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "#",
  },
  {
    id: 3,
    title: "Crop Prediction Model (Mini Project)",
    subtitle: "Machine learning based on crop prediction",
    description:
      "Built a machine learning model to predict crop types based on historical agricultural data.",
    tech: ["Python", "NumPy", "Scikit-learn", "Pandas", "ML Alogorithms"],
    link: "https://github.com/adarsha5/Crop-Prediction.git",
  },
  {
    id: 4,
    title: "AI Voice Chatbot",
    subtitle: "Audio-based artificial chatbot system",
    description:
      "Developed an AI-powered voice chatbot that can interact with users through voice commands and perform basic tasks like opening files and launching applications.",
    tech: [
      "Python",
      "OpenAI api",
      "Google Translate API",
      "pyautogui",
      "Selenium",
      "pyttsx3",
    ],
    link: "https://github.com/adarsha5/Jarvis-AI-Chatbot.git",
  },
  {
    id: 5,
    title: "IPL Data Analysis",
    subtitle: "Analyse and predict upcoming matches",
    description:
      "Analyzed IPL cricket data to generate insights and assess player performance under varying match conditions.",
    tech: ["Python", "NumPy", "Scikit-learn", "Pandas"],
    link: "https://github.com/adarsha5/IPL-Prediction.git",
  },
  {
    id: 6,
    title: "Parkeze app",
    subtitle: "Machine Learning with ennovation  ",
    description:
      "To minimize parking problem in urban area public as well as private sector with automated number plate detection and compter vision",
    tech: [
      "Python",
      "React native",
      "Opencv",
      "FireBase",
      "IOT",
      "ESP32",
      "ultrasonic sensor",
    ],
    link: "https://github.com/adarsha5/Park-eze.git",
  },
  {
    id: 7,
    title: "Portfolio Website",
    subtitle: "Frontend development with proffessional UI/UX",
    description:
      "Created a yoga portfolio website to showcase skills and projects during the internship at YCSAS Pvt. Ltd.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/adarsha5/Yoga-portfolio.git",
  },
  {
    id: 8,
    title: "E-commerce meets with AI",
    subtitle:
      "Fully functional fashion e-commerce platform with AI integration",
    description:
      "This project develops an intelligent fashion e-commerce platform featuring personalized product recommendations, skin tone–based color suggestions, sentiment analysis for customer feedback, a virtual try-on system, secure payments via Razorpay and Stripe, and predictive tools for sales trends and pre-booking upcoming collections.",
    tech: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "MySQL",
      "ML",
      "DL",
      "Tailwind",
      "Redux",
    ],
    link: "#",
  },
];

const Portfolio: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };
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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-start gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center text-white font-bold"
            >
              AB
            </motion.div>
            <div>
              <h1 className="text-xl font-semibold">Adarsha Bairagi</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fullstack Developer • Software Engineer • AI & IoT Enthusiast
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <a
              className="hidden md:inline-block text-sm hover:text-teal-600 hover:scale-110 hover:font-bold transform transition-all duration-200"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hidden md:inline-block text-sm hover:text-teal-600 hover:scale-110 hover:font-bold transform transition-all duration-200"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="hidden md:inline-block text-sm hover:text-teal-600 hover:scale-110 hover:font-bold transform transition-all duration-200"
              href="#education"
            >
              Education
            </a>
            <a
              className="hidden md:inline-block text-sm hover:text-teal-600 hover:scale-110 hover:font-bold transform transition-all duration-200"
              href="#contact"
            >
              Contact
            </a>

            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-md border dark:border-gray-700 hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              {dark ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </nav>
        </motion.header>

        {/* HERO SECTION */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              I build intelligent systems that combine AI, IoT, and full-stack
              engineering.
            </h2>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              I’m <strong>Adarsha Bairagi</strong>, a passionate developer
              focused on building practical and real-world solutions through{" "}
              <strong>Java</strong>,<strong>Python</strong>, and{" "}
              <strong>AI</strong>. My work spans across peer-to-peer systems,
              machine learning–based prediction models, IoT-enabled automation,
              and intelligent applications. I also enjoy sharing coding
              knowledge through my Github profile
              <strong> adarsha5</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Hire / Contact", href: "#contact", primary: true },
                { label: "View Projects", href: "#projects" },
                { label: "Resume", href: "/ADARSHA_BAIRAGI.pdf" },
              ].map((btn, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={btn.href}
                  target={btn.label === "Resume" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md shadow-sm border transition-all ${
                    btn.primary
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "hover:bg-teal-600 hover:text-white"
                  }`}
                >
                  {btn.label}
                  {btn.label === "Resume" && <Downloading />}
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {social_media.map((item, i) => {
                const IconComponent = iconMap[item.logo];
                return (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    href={item.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md border hover:text-teal-600"
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* PROFILE IMAGE */}
          <motion.aside
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-white dark:bg-gray-800 border rounded-2xl p-6 shadow-md flex flex-col items-center gap-4 "
            >
              <img
                className="rounded-full  h-36 border-4 border-teal-500 shadow-md"
                src="/hello.jpg"
                alt="Adarsha Bairagi"
              />
              <h3 className="text-lg font-semibold">Adarsha Bairagi</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                FullStack • AI • ML • IoT Developer <br /> <br />{" "}
                <strong>DOB :</strong>
                02/04/2002
                <br /> <strong>Location :</strong>
                India
              </p>
            </motion.div>
          </motion.aside>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ scale: 1.02 }}
                className="p-5 border rounded-xl bg-white dark:bg-gray-800 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{proj.subtitle}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {proj.description}
                </p>
                <motion.div
                  className="mt-8 flex items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-2 rounded-md border hover:text-teal-600"
                    href={proj.link}
                    target="_blank"
                  >
                    <GitHubIcon />
                  </motion.a>
                </motion.div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION SECTION */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 id="education" className="text-2xl font-bold mb-4">
            Education
          </h2>
          <div className="border-l-4 border-teal-500 pl-4 mt-5">
            <p className="font-semibold">
              Bachelor of Technology in Information Technology
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>College : </strong>Future Institute of Engineering and
              Management <br />
              <strong>University : </strong>Maulana Abul Kalam Azad University
              of Technology — 2022–2026 (parsuing)
            </p>
          </div>
          <div className="border-l-4 border-teal-500 pl-4 mt-5">
            <p className="font-semibold">
              Bachelor of Technology in Information Technology
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>College : </strong>Central Calcutta Ploytechnic <br />
              <strong>University : </strong>West Bengal State Council of
              Technical & Vocational Education and Skill Development (WBSCTE) —
              2020–2023
            </p>
          </div>
          <div className="border-l-4 border-teal-500 pl-4 mt-5">
            <p className="font-semibold">
              Higher Secondary Education ('XII'th)
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>School : </strong>T.S.Sanatan High School <br />
              <strong>Board : </strong>West Bengal Council of Higher Secondary
              Education (WBCHSE) — 2018-2019
            </p>
          </div>
          <div className="border-l-4 border-teal-500 pl-4 mt-5">
            <p className="font-semibold">Secondary Education ('X'th)</p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>School : </strong>T.S.Sanatan High School <br />
              <strong>Board : </strong>West Bengal Board of Secondary Education
              (WBBSE) — 2016-2017
            </p>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "TensorFlow",
              "React",
              "MySQL",
              "IoT",
              "Machine Learning",
              "Tailwind CSS",
              "Js",
              "PHP",
              "HTML",
              "CSS",
              "Wordpress",
              "Bootstrap",
              "Mongo DB",
              "PHPmyadmin",
              "Sql",
              "Pandas",
              "NumPy",
              "Scikitlearn",
              "Matplotlib",
              "Searborn",
              "ANN",
              "CNN",
              "keras",
              "Git",
            ].map((s, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold">Let’s Connect</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                Want to collaborate, discuss projects, or hire me for
                development work? Drop a quick message below — I’d love to hear
                from you!
              </p>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-6 grid grid-cols-1 gap-4"
              >
                <input
                  type="text"
                  name="name" // ⭐ added
                  placeholder="name"
                  aria-label="Your name"
                  required
                  className="px-4 py-3 border rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <input
                  type="email"
                  name="email" // ⭐ added
                  placeholder="email"
                  aria-label="Your email"
                  required
                  className="px-4 py-3 border rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <textarea
                  name="message" // ⭐ added
                  placeholder="message"
                  aria-label="Your message"
                  required
                  className="px-4 py-3 border rounded-md bg-white dark:bg-gray-800 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>

                <div className="flex flex-wrap gap-3 mt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md transition-colors"
                  >
                    Send Message
                  </button>

                  <a
                    href="https://wa.me/917318838683"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border px-5 py-2 rounded-md text-green-600 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>

            {/* Contact Info Card */}
            <aside className="bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-lg">Contact Info</h4>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:adarshabairagi1234@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    adarshabairagi1234@gmail.com
                  </a>
                </div>

                <div>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+917501417553"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    +91 7501417553
                  </a>
                </div>

                <div>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/917501417553"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:underline"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-4 h-4"
                    />
                    Message Me
                  </a>
                </div>

                <div>
                  <strong>Resume:</strong>{" "}
                  <a
                    href="/ADARSHA_BAIRAGI.pdf"
                    download="Adarsha_Bairagi_Resume.pdf"
                    className="underline hover:text-teal-600"
                  >
                    Download PDF
                  </a>
                </div>

                <div>
                  <strong>Location:</strong>{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    India
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-sm text-gray-500 dark:text-gray-400"
        >
          © 2025 Adarsha Bairagi — Built with React, Tailwind & Framer Motion.
        </motion.footer>
      </div>
    </main>
  );
};

export default Portfolio;
