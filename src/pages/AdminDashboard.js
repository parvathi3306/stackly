import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import "./AdminDashboard.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [loginData, setLoginData] = useState({});
  const [users, setUsers] = useState([]);
  const [language, setLanguage] = useState(localStorage.getItem("app_language") || "en");

  const isDark = theme === "dark";
  const isRTL = language === "he" || language === "ar";

  const translations = useMemo(() => ({
    en: {
      title: "Admin Dashboard",
      logout: "Logout",
      totalUsers: "Total Users",
      totalLogins: "Total Logins",
      recentLogins: "Recent Logins",
      email: "Email",
      lastLogin: "Last Login",
      noLogins: "No login data.",
      signupTypes: "Signup Types",
      monthlyLogins: "Monthly Logins",
      corporate: "Corporate",
      other: "Other",
      unknown: "Unknown",
    },
    he: {
      title: "לוח ניהול",
      logout: "התנתק",
      totalUsers: "סה״כ משתמשים",
      totalLogins: "סה״כ התחברויות",
      recentLogins: "התחברויות אחרונות",
      email: "אימייל",
      lastLogin: "כניסה אחרונה",
      noLogins: "אין נתוני התחברות.",
      signupTypes: "סוגי הרשמה",
      monthlyLogins: "התחברויות חודשיות",
      corporate: "ארגוני",
      other: "אחר",
      unknown: "לא ידוע",
    },
    ar: {
      title: "لوحة تحكم المشرف",
      logout: "تسجيل الخروج",
      totalUsers: "إجمالي المستخدمين",
      totalLogins: "إجمالي تسجيلات الدخول",
      recentLogins: "تسجيلات الدخول الأخيرة",
      email: "البريد الإلكتروني",
      lastLogin: "آخر تسجيل دخول",
      noLogins: "لا توجد بيانات تسجيل دخول.",
      signupTypes: "أنواع التسجيل",
      monthlyLogins: "تسجيلات الدخول الشهرية",
      corporate: "الشركات",
      other: "أخرى",
      unknown: "غير معروف",
    },
  }), []);

  const t = (key) => translations[language]?.[key] || key;

  useEffect(() => {
    setLoginData(JSON.parse(localStorage.getItem("userLogins")) || {});
    setUsers(JSON.parse(localStorage.getItem("users")) || {});

    const handler = (e) => {
      const newLang = e?.detail?.language || localStorage.getItem("app_language") || "en";
      setLanguage(newLang);
    };

    window.addEventListener("languageChanged", handler);
    return () => window.removeEventListener("languageChanged", handler);
  }, []);

  const totalUsers = users.length;
  const totalLogins = Object.keys(loginData).length;

  const corpCount = users.filter((u) => u.email?.endsWith("@enkonix.in")).length;
  const otherCount = totalUsers - corpCount;

  const pieData = {
    labels: [t("corporate"), t("other"), t("unknown")],
    datasets: [
      {
        data: [corpCount, otherCount, 0],
        backgroundColor: ["white", "black", "blue"],
        hoverOffset: 15,
        hoverBorderColor: "blue",
        hoverBorderWidth: 4,
      },
    ],
  };

  const loginEntries = Object.entries(loginData).map(([email, time]) => ({
    email,
    time: new Date(time).toLocaleString(),
  }));

  const counts = {};
  Object.values(loginData).forEach((ts) => {
    const d = new Date(ts);
    const label = `${d.toLocaleString("default", { month: "short" })} ${d.getFullYear()}`;
    counts[label] = (counts[label] || 0) + 1;
  });

  const barData = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: t("monthlyLogins"),
        data: Object.values(counts),
        backgroundColor: "blue",
        borderRadius: 6,
        maxBarThickness: 40,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    animation: { duration: 800, easing: "easeOutQuart" },
    plugins: {
      legend: { labels: { color: isDark ? "#e0e0e0" : "#111" } },
      tooltip: {
        backgroundColor: isDark ? "#e0e0e0" : "#111",
        titleColor: isDark ? "#121212" : "#f9f9f9",
        bodyColor: isDark ? "#121212" : "#f9f9f9",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: isDark ? "#e0e0e0" : "#111" },
        grid: { color: isDark ? "#333" : "#eee" },
      },
      x: {
        ticks: { color: isDark ? "#e0e0e0" : "#111" },
        grid: { color: isDark ? "#333" : "#eee" },
      },
    },
  };

  return (
    <div data-theme={theme} className={`dashboard-root ${theme}`} dir={isRTL ? "rtl" : "ltr"}>
      <header
        className="dashboard-header"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        title="Click to toggle theme"
      >
        <h2>{t("title")}</h2>
        <button
          className="logout-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/welcome");
          }}
          aria-label={t("logout")}
        >
          {t("logout")}
        </button>
      </header>

      <section className="dashboard-stats">
        {[{ label: t("totalUsers"), value: totalUsers }, { label: t("totalLogins"), value: totalLogins }].map(
          ({ label, value }) => (
            <div key={label} className="stat-card">
              <h3>{label}</h3>
              <p>{value}</p>
            </div>
          )
        )}
      </section>

      <section className="recent-logins">
        <h4>{t("recentLogins")}</h4>
        <table>
          <thead>
            <tr>
              <th>{t("email")}</th>
              <th>{t("lastLogin")}</th>
            </tr>
          </thead>
          <tbody>
            {loginEntries.length > 0 ? (
              loginEntries.map(({ email, time }) => (
                <tr key={email}>
                  <td>{email}</td>
                  <td>{time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>{t("noLogins")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      <section className="dashboard-charts">
        <div className="chart-container pie-container">
          <h4>{t("signupTypes")}</h4>
          <Pie data={pieData} options={chartOptions} />
        </div>

        <div className="chart-container bar-container">
          <h4>{t("monthlyLogins")}</h4>
          <Bar data={barData} options={chartOptions} />
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
