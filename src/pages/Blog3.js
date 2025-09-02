import React, { useEffect, useMemo, useState } from "react";
import "./Blog3.css";

const Blog3 = () => {
  const [language, setLanguage] = useState(() => localStorage.getItem("app_language") || "en");

  const translations = useMemo(() => ({
    en: {
      title: "🧠 AI + Data: Transforming Business Intelligence",
      p1Title: "📊 1. Real-Time Decision-Making",
      p1Body: "AI-powered data platforms enable instant access to actionable insights, allowing businesses to make timely and informed decisions.",
      p2Title: "📈 2. Predictive Analytics",
      p2Body: "Machine learning models forecast trends and behaviors before they happen, improving forecasting and risk mitigation.",
      p3Title: "📉 3. Smarter Dashboards",
      p3Body: "AI-integrated dashboards highlight the most relevant KPIs and adapt dynamically based on business goals.",
      p4Title: "⚙️ 4. Automated Data Pipelines",
      p4Body: "Data is collected, cleaned, and transformed automatically, reducing manual errors and speeding up analysis.",
      p5Title: "🎯 5. AI-Powered Personalization",
      p5Body: "From marketing to product recommendations, AI tailors user experiences by analyzing behavior and preferences.",
      readMore: "Read more →",
    },
    he: {
      title: "🧠 AI ונתונים: מהפכה בבינה עסקית",
      p1Title: "📊 1. קבלת החלטות בזמן אמת",
      p1Body: "פלטפורמות נתונים מונעות AI מספקות גישה מיידית לתובנות, ומאפשרות קבלת החלטות מהירה ומדויקת.",
      p2Title: "📈 2. ניתוח חזוי",
      p2Body: "מודלי למידת מכונה צופים מגמות והתנהגויות מראש כדי לשפר תחזיות וצמצום סיכונים.",
      p3Title: "📉 3. לוחות מחוונים חכמים",
      p3Body: "דשבורדים משולבי AI מדגישים KPI רלוונטיים ומסתגלים דינמית ליעדים העסקיים.",
      p4Title: "⚙️ 4. צינורות נתונים אוטומטיים",
      p4Body: "הנתונים נאספים, מנוקים ומוסבים אוטומטית להפחתת שגיאות ולהאצת הניתוח.",
      p5Title: "🎯 5. פרסונליזציה מונעת AI",
      p5Body: "ממרקטינג ועד המלצות מוצר, AI מתאים חוויות משתמש לפי התנהגות והעדפות.",
      readMore: "קרא עוד →",
    },
    ar: {
      title: "🧠 الذكاء الاصطناعي + البيانات: تحويل ذكاء الأعمال",
      p1Title: "📊 1. اتخاذ القرار الفوري",
      p1Body: "تمكّن منصات البيانات المدعومة بالذكاء الاصطناعي من الوصول الفوري إلى الرؤى العملية لاتخاذ قرارات سريعة ومدروسة.",
      p2Title: "📈 2. التحليلات التنبؤية",
      p2Body: "تتنبأ نماذج التعلم الآلي بالاتجاهات والسلوكيات مسبقًا، ما يحسن التنبؤ والتخفيف من المخاطر.",
      p3Title: "📉 3. لوحات معلومات أكثر ذكاءً",
      p3Body: "تسلّط لوحات المعلومات المدمجة بالذكاء الاصطناعي الضوء على مؤشرات الأداء الأكثر صلة وتتكيّف ديناميكيًا مع الأهداف.",
      p4Title: "⚙️ 4. خطوط بيانات مؤتمتة",
      p4Body: "يُجمَع البيانات وتُنقّى وتتحول تلقائيًا لتقليل الأخطاء اليدوية وتسريع التحليل.",
      p5Title: "🎯 5. تخصيص مدفوع بالذكاء الاصطناعي",
      p5Body: "من التسويق إلى توصيات المنتجات، يخصص الذكاء الاصطناعي تجارب المستخدم بتحليل السلوك والتفضيلات.",
      readMore: "اقرأ المزيد →",
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
    <section className="ai-data-section">
      <div className="ai-data-card">
        <h2 className="ai-data-title">{t("title")}</h2>

        <div className="ai-point" data-aos="fade-up">
          <h3>{t("p1Title")}</h3>
          <p>{t("p1Body")}</p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="100">
          <h3>{t("p2Title")}</h3>
          <p>{t("p2Body")}</p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="200">
          <h3>{t("p3Title")}</h3>
          <p>{t("p3Body")}</p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="300">
          <h3>{t("p4Title")}</h3>
          <p>{t("p4Body")}</p>
        </div>

        <div className="ai-point" data-aos="fade-up" data-aos-delay="400">
          <h3>{t("p5Title")}</h3>
          <p>{t("p5Body")}</p>
        </div>

        <a href="/dataai" className="ai-read-more">
          {t("readMore")}
        </a>
      </div>
    </section>
  );
};

export default Blog3;
