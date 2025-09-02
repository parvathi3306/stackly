import React, { useEffect, useMemo, useState } from "react";
import "./Blog1.css"; // Make sure this file exists with the styles

const Blog1 = () => {
  const [language, setLanguage] = useState(() => localStorage.getItem("app_language") || "en");

  const translations = useMemo(() => ({
    en: {
      w1Title: "1. Implement Zero Trust Architecture",
      w1Body: "Adopt a \"never trust, always verify\" approach by ensuring strict identity verification for every user and device accessing your systems — whether inside or outside the network.",
      w2Title: "2. Use AI-Powered Threat Detection",
      w2Body: "Leverage AI and machine learning to detect anomalies, automate responses to threats, and reduce the time to respond to sophisticated cyberattacks.",
      w3Title: "3. Strengthen Endpoint Security",
      w3Body: "As remote and hybrid work continues, securing all endpoints (laptops, phones, tablets) with next-gen antivirus, EDR tools, and regular patching is essential.",
      w4Title: "4. Conduct Regular Security Awareness Training",
      w4Body: "Human error is still a top cause of breaches. Train employees on phishing, secure password habits, and recognizing suspicious behavior to build a security-first culture.",
      w5Title: "5. Ensure Regulatory Compliance and Data Privacy",
      w5Body: "Keep your systems aligned with regulations like GDPR, HIPAA, or CCPA. Build policies for data retention, privacy, encryption, and access control to avoid fines and data loss.",
    },
    he: {
      w1Title: "1. יישום ארכיטקטורת Zero Trust",
      w1Body: "אמצו גישה של \"לא לסמוך לעולם, תמיד לאמת\" עם אימות זהות קפדני לכל משתמש ומכשיר הניגשים למערכות—בין אם מתוך הרשת או מחוצה לה.",
      w2Title: "2. שימוש בזיהוי איומים מונע AI",
      w2Body: "נצלו בינה מלאכותית ולמידת מכונה לזיהוי חריגות, לאוטומציה של תגובות ולהפחתת זמן התגובה למתקפות מתוחכמות.",
      w3Title: "3. חיזוק אבטחת נקודות קצה",
      w3Body: "בעידן העבודה ההיברידית/מרוחקת, אבטחו את כל נקודות הקצה בעזרת אנטי-וירוס דור חדש, כלי EDR ועדכונים שוטפים.",
      w4Title: "4. הדרכות מודעות לאבטחה באופן קבוע",
      w4Body: "טעות אנוש היא עדיין גורם מרכזי לדליפות. הכשר את העובדים לזיהוי פישינג, הרגלי סיסמאות בטוחים וזיהוי התנהגות חשודה.",
      w5Title: "5. עמידה ברגולציה והגנת פרטיות נתונים",
      w5Body: "דאגו ליישור המערכות לרגולציות כמו GDPR, HIPAA או CCPA. הגדירו מדיניות לשמירת נתונים, פרטיות, הצפנה ובקרת גישה כדי להימנע מקנסות ואובדן נתונים.",
    },
    ar: {
      w1Title: "1. تطبيق بنية الثقة الصفرية",
      w1Body: "اتباع نهج \"لا تثق أبدًا وتحقّق دائمًا\" عبر التحقق الصارم من هوية كل مستخدم وجهاز يصل إلى أنظمتك سواء داخل الشبكة أو خارجها.",
      w2Title: "2. استخدام كشف التهديدات المعتمد على الذكاء الاصطناعي",
      w2Body: "استفد من الذكاء الاصطناعي وتعلم الآلة لاكتشاف الشذوذ وأتمتة الاستجابة للتهديدات وتقليل زمن الاستجابة للهجمات المعقدة.",
      w3Title: "3. تعزيز أمن نقاط النهاية",
      w3Body: "مع استمرار العمل عن بُعد والهجين، من الضروري تأمين جميع نقاط النهاية بأدوات حماية حديثة وتحديثات منتظمة.",
      w4Title: "4. إجراء تدريبات توعية أمنية بانتظام",
      w4Body: "لا يزال الخطأ البشري سببًا رئيسيًا للاختراقات. درّب الموظفين على التصيد والعادات الآمنة لكلمات المرور والتعرّف على السلوك المشبوه.",
      w5Title: "5. ضمان الامتثال التنظيمي وخصوصية البيانات",
      w5Body: "حافظ على توافق أنظمتك مع اللوائح مثل GDPR وHIPAA وCCPA. اعتمد سياسات للاحتفاظ بالبيانات والخصوصية والتشفير والتحكم في الوصول لتجنّب الغرامات وفقدان البيانات.",
    },
  }), []);

  const t = (key) => {
    const lang = translations[language] || translations.en;
    return lang[key] || key;
  };

  useEffect(() => {
    const handler = (e) => {
      const next = e?.detail?.language || localStorage.getItem("app_language") || "en";
      setLanguage(next);
    };
    window.addEventListener("languageChanged", handler);
    return () => window.removeEventListener("languageChanged", handler);
  }, []);

  return (
    <section className="cybersecurity-ways">
  <div className="way">
    <h3>{t("w1Title")}</h3>
    <p>{t("w1Body")}</p>
  </div>

  <div className="way">
    <h3>{t("w2Title")}</h3>
    <p>{t("w2Body")}</p>
  </div>

  <div className="way">
    <h3>{t("w3Title")}</h3>
    <p>{t("w3Body")}</p>
  </div>

  <div className="way">
    <h3>{t("w4Title")}</h3>
    <p>{t("w4Body")}</p>
  </div>

  <div className="way">
    <h3>{t("w5Title")}</h3>
    <p>{t("w5Body")}</p>
  </div>
</section>

  );
};

export default Blog1;
