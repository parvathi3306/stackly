import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../images/logo.png";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import email from "../images/email.svg";
import twitter from "../images/twitter.svg";

const Footer = () => {
  const [language, setLanguage] = useState(() => localStorage.getItem("app_language") || "en");

  const translations = useMemo(() => ({
    en: {
      aboutText:
        "Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.",
      quickLinks: "Quick Links",
      services: "Services",
      connect: "Connect with us",
      home: "Home",
      about: "About Us",
      servicesPage: "Services",
      blog: "Blog",
      contact: "Contact",
      cloud: "Cloud",
      customerFirst: "Customer First",
      cyber: "Cybersecurity",
      dataAI: "Data & AI",
      enterprise: "Enterprise Management",
      intelligent: "Intelligent Industry",
      email: "Email",
      phone: "Phone",
      rights: "All rights reserved By ESS.",
      scrollTop: "Scroll to top",
    },
    he: {
      aboutText:
        "Stackly מאפשרת לעסקים להתקדם עם פתרונות ענן, AI ואבטחת מידע מתקדמים לעתיד דיגיטלי.",
      quickLinks: "קישורים מהירים",
      services: "שירותים",
      connect: "התחברו אלינו",
      home: "דף הבית",
      about: "אודות",
      servicesPage: "שירותים",
      blog: "בלוג",
      contact: "צור קשר",
      cloud: "ענן",
      customerFirst: "לקוח תחילה",
      cyber: "אבטחת מידע",
      dataAI: "נתונים ו‑AI",
      enterprise: "ניהול ארגוני",
      intelligent: "תעשייה חכמה",
      email: "אימייל",
      phone: "טלפון",
      rights: "כל הזכויות שמורות ESS.",
      scrollTop: "גלול למעלה",
    },
    ar: {
      aboutText:
        "تمكّن Stackly الشركات من التحول الرقمي باستخدام حلول متقدمة في السحابة والذكاء الاصطناعي والأمن السيبراني.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      connect: "تواصل معنا",
      home: "الصفحة الرئيسية",
      about: "معلومات عنا",
      servicesPage: "الخدمات",
      blog: "المدونة",
      contact: "اتصل بنا",
      cloud: "السحابة",
      customerFirst: "العميل أولاً",
      cyber: "الأمن السيبراني",
      dataAI: "البيانات والذكاء الاصطناعي",
      enterprise: "إدارة المؤسسات",
      intelligent: "الصناعة الذكية",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      rights: "جميع الحقوق محفوظة لـ ESS.",
      scrollTop: "الرجوع للأعلى",
    },
  }), []);

  const t = (key) => (translations[language] || translations.en)[key] || key;

  useEffect(() => {
    const handler = (e) => {
      const nextLang = e?.detail?.language || localStorage.getItem("app_language") || "en";
      setLanguage(nextLang);
    };
    window.addEventListener("languageChanged", handler);
    return () => window.removeEventListener("languageChanged", handler);
  }, []);

  const isRtl = language === "he" || language === "ar";

  return (
    <footer className="footer" dir={isRtl ? "rtl" : "ltr"}>
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section">
          <img src={logo} alt="Stackly Logo" className="footer-logo" />
          <p className="footer-description">{t("aboutText")}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>{t("quickLinks")}</h4>
          <ul>
            <li><Link to="/home">{t("home")}</Link></li>
            <li><Link to="/about">{t("about")}</Link></li>
            <li><Link to="/services">{t("servicesPage")}</Link></li>
            <li><Link to="/blog">{t("blog")}</Link></li>
            <li><Link to="/contact">{t("contact")}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>{t("services")}</h4>
          <ul>
            <li><Link to="/cloud">{t("cloud")}</Link></li>
            <li><Link to="/CustomerFirst">{t("customerFirst")}</Link></li>
            <li><Link to="/cybersecurity">{t("cyber")}</Link></li>
            <li><Link to="/DataAI">{t("dataAI")}</Link></li>
            <li><Link to="/EnterpriseManagement">{t("enterprise")}</Link></li>
            <li><Link to="/IntelligentIndustry">{t("intelligent")}</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="footer-section">
          <h4>{t("connect")}</h4>
          <div className="footer-social">
            <a href="https://www.linkedin.com/login" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://www.twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://mail.google.com" aria-label="Gmail" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="Gmail" style={{ width: "24px", height: "24px" }} />
            </a>
          </div>
          <p className="footer-contact">
            {t("email")}: support@stackly.com<br />
            {t("phone")}: +1 (800) 123-4567
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("scrollTop")}
          title={t("scrollTop")}
        >
          ⬆️
        </button>
        <p>© {new Date().getFullYear()} Stackly. {t("rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
