import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem("app_language") || "en");
  const avatarRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Get user initials from localStorage
  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find(user => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial = currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial = currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  // language translations for header labels
  const translations = {
    en: {
      home: "Home",
      home2: "Home 2",
      aboutUs: "About Us",
      services: "Services",
      cloud: "Cloud",
      customerFirst: "Customer First",
      cybersecurity: "Cybersecurity",
      dataAi: "Data & AI",
      enterpriseManagement: "Enterprise Management",
      intelligentIndustry: "Intelligent Industry",
      blog: "Blog",
      contactUs: "Contact Us",
      logout: "Logout",
    },
    he: {
      home: "ראשי",
      home2: "דף ראשי 2",
      aboutUs: "עלינו",
      services: "שירותים",
      cloud: "ענן",
      customerFirst: "לקוח תחילה",
      cybersecurity: "אבטחת סייבר",
      dataAi: "נתונים ובינה מלאכותית",
      enterpriseManagement: "ניהול ארגוני",
      intelligentIndustry: "תעשייה חכמה",
      blog: "בלוג",
      contactUs: "צור קשר",
      logout: "התנתקות",
    },
    ar: {
      home: "الصفحة الرئيسية",
      home2: "الصفحة الرئيسية 2",
      aboutUs: "من نحن",
      services: "الخدمات",
      cloud: "السحابة",
      customerFirst: "العميل أولاً",
      cybersecurity: "الأمن السيبراني",
      dataAi: "البيانات والذكاء الاصطناعي",
      enterpriseManagement: "إدارة المؤسسة",
      intelligentIndustry: "الصناعة الذكية",
      blog: "المدونة",
      contactUs: "اتصل بنا",
      logout: "تسجيل الخروج",
    },
  };

  const t = (key) => {
    const lang = translations[language] || translations.en;
    return lang[key] || key;
  };

  // Apply RTL/LTR direction based on language
  useEffect(() => {
    const isRtl = language === "he" || language === "ar";
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem("app_language", language);
    // notify other parts of the app
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language } }));
  }, [language]);

  // Close avatar dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile nav on large screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(prev => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const getActiveLink = () => {
    if (location.pathname === "/" || location.pathname === "/home2") return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/services",
        "/cloud",
        "/customer-first",
        "/cybersecurity",
        "/data-ai",
        "/enterprise-management",
        "/intelligent-industry",
      ].includes(location.pathname)
    ) return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/login");
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev);
  };

  const handleLanguageChange = (e) => {
    const next = e.target.value;
    setLanguage(next);
    // immediate broadcast (state effect will also broadcast, this ensures instant reaction)
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language: next } }));
  };

  return (
    <header className="header">
      <nav className="logo">
        <Link to="/home">
          <img src={logo} alt="Logo" />
        </Link>
      </nav>

      <button
        className={`hamburger ${mobileNavOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMobileNav}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleMainClick("home")}
          >
            {t("home")}
          </span>
          <span
            className={`arrow ${activeDropdown === "home" ? "open" : ""}`}
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="dropdown">
              <Link to="/home" onClick={handleLinkClick}>{t("home")}</Link>
              <Link to="/home2" onClick={handleLinkClick}>{t("home2")}</Link>
            </div>
          )}
        </div>

        <Link
          to="/about"
          className={`nav-link ${activeLink === "about" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {t("aboutUs")}
        </Link>

        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleMainClick("services")}
          >
            {t("services")}
          </span>
          <span
            className={`arrow ${activeDropdown === "services" ? "open" : ""}`}
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="dropdown">
              <Link to="/cloud" onClick={handleLinkClick}>{t("cloud")}</Link>
              <Link to="/CustomerFirst" onClick={handleLinkClick}>{t("customerFirst")}</Link>
              <Link to="/cybersecurity" onClick={handleLinkClick}>{t("cybersecurity")}</Link>
              <Link to="/DataAI" onClick={handleLinkClick}>{t("dataAi")}</Link>
              <Link to="/EnterpriseManagement" onClick={handleLinkClick}>{t("enterpriseManagement")}</Link>
              <Link to="/IntelligentIndustry" onClick={handleLinkClick}>{t("intelligentIndustry")}</Link>
            </div>
          )}
        </div>

        <Link
          to="/blog"
          className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {t("blog")}
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {t("contactUs")}
        </Link>
      </nav>

      <div className="rightSection">
        <select
          aria-label="Select language"
          value={language}
          onChange={handleLanguageChange}
          className="languageSelect"
          style={{ marginRight: "8px" }}
        >
          <option value="en">English</option>
          <option value="he">עברית</option>
          <option value="ar">العربية</option>
        </select>
        <button className="themeToggle" onClick={toggleTheme}>
          {isDark ? "🌙" : "🌞"}
        </button>

        <div className="avatarContainer" ref={avatarRef} style={{ position: "relative" }}>
          <div
            className="avatarCircle"
            title="Your initials"
            onClick={toggleAvatarDropdown}
            style={{ cursor: "pointer" }}
          >
            {initials || "AD"}
          </div>

          {avatarDropdownOpen && (
            <div
              className="avatarDropdown"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                minWidth: "120px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {t("logout")}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;