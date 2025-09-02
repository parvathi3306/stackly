import React, { useEffect, useMemo, useState } from "react";
import "./Blog2.css"; // Optional CSS for styles

const Blog2 = () => {
  const [language, setLanguage] = useState(() => localStorage.getItem("app_language") || "en");

  const translations = useMemo(() => ({
    en: {
      title: "☁️ Why Cloud-Native Is the Future of Software",
      p1Title: "🚀 1. Speed & Agility",
      p1Body: "Cloud-native architectures enable teams to rapidly build, test, and deploy applications. With microservices, CI/CD pipelines, and containers, updates can happen in hours—not weeks.",
      p1Benefit: "Benefit: Faster time-to-market and real-time innovation.",
      p2Title: "📈 2. Scalability on Demand",
      p2Body: "Cloud-native systems scale automatically based on demand, whether you have 100 or 10 million users.",
      p2Benefit: "Benefit: Elastic infrastructure with lower operational overhead.",
      p3Title: "💸 3. Cost Efficiency",
      p3Body: "With pay-as-you-go models, cloud-native apps use only the resources they need—no more overprovisioning.",
      p3Benefit: "Benefit: Reduced infrastructure costs and better resource management.",
      p4Title: "🔒 4. Built-In Resilience & Security",
      p4Body: "Cloud-native platforms support fault-tolerant, secure systems that keep your app running, even if one service fails.",
      p4Benefit: "Benefit: High availability, disaster recovery, and robust security.",
      p5Title: "🌍 5. Future-Proofing & Innovation",
      p5Body: "Cloud-native integrates easily with AI, IoT, and edge computing—helping your software evolve with technology.",
      p5Benefit: "Benefit: Long-term scalability and adaptability.",
      cta: "Explore Cloud-Native Solutions →",
    },
    he: {
      title: "☁️ מדוע Cloud-Native הוא עתיד התוכנה",
      p1Title: "🚀 1. מהירות וזריזות",
      p1Body: "ארכיטקטורות מקור-ענן מאפשרות לבנות, לבדוק ולפרוס מהר. עם מיקרו-שירותים, CI/CD וקונטיינרים, עדכונים קורים בשעות—not שבועות.",
      p1Benefit: "תועלת: ירידה לזמן שוק וחדשנות בזמן אמת.",
      p2Title: "📈 2. מדרגיות לפי דרישה",
      p2Body: "מערכות מקור-ענן נדרגות אוטומטית לפי העומס, בין אם יש 100 או 10 מיליון משתמשים.",
      p2Benefit: "תועלת: תשתית אלסטית ועלויות תפעול נמוכות יותר.",
      p3Title: "💸 3. יעילות עלות",
      p3Body: "עם מודלים מבוססי שימוש, היישומים צורכים רק את המשאבים הנדרשים—ללא הקצאת יתר.",
      p3Benefit: "תועלת: הפחתת עלויות תשתית וניהול משאבים טוב יותר.",
      p4Title: "🔒 4. עמידות ואבטחה מובנות",
      p4Body: "פלטפורמות מקור-ענן תומכות במערכות סבילות תקלות ומאובטחות לשמירה על זמינות גם בעת כשל שירות.",
      p4Benefit: "תועלת: זמינות גבוהה, התאוששות מאסון ואבטחה חזקה.",
      p5Title: "🌍 5. חסינות לעתיד וחדשנות",
      p5Body: "מקור-ענן משתלב בקלות עם AI, IoT ומחשוב קצה—כך שהתוכנה מתפתחת עם הטכנולוגיה.",
      p5Benefit: "תועלת: מדרגיות לטווח ארוך וכושר הסתגלות.",
      cta: "גלה פתרונות Cloud-Native →",
    },
    ar: {
      title: "☁️ لماذا السحابي الأصلي هو مستقبل البرمجيات",
      p1Title: "🚀 1. السرعة والمرونة",
      p1Body: "تمكّن بنى السحابة الأصلية الفرق من البناء والاختبار والنشر بسرعة. مع الخدمات المصغّرة وCI/CD والحاويات، تحدث التحديثات خلال ساعات لا أسابيع.",
      p1Benefit: "الفائدة: سرعة الوصول إلى السوق وابتكار فوري.",
      p2Title: "📈 2. قابلية التوسع عند الطلب",
      p2Body: "تتوسع الأنظمة السحابية الأصلية تلقائيًا حسب الطلب سواء كان لديك 100 أو 10 ملايين مستخدم.",
      p2Benefit: "الفائدة: بنية تحتية مرنة وتكاليف تشغيل أقل.",
      p3Title: "💸 3. كفاءة التكلفة",
      p3Body: "مع نماذج الدفع حسب الاستخدام، تستخدم التطبيقات السحابية الأصلية الموارد التي تحتاجها فقط—لا إفراط في التخصيص.",
      p3Benefit: "الفائدة: تقليل تكاليف البنية التحتية وإدارة أفضل للموارد.",
      p4Title: "🔒 4. مرونة وأمن مدمجان",
      p4Body: "تدعم المنصات السحابية الأصلية أنظمة متحمّلة للأعطال وآمنة تُبقي تطبيقك قيد التشغيل حتى عند تعطل خدمة.",
      p4Benefit: "الفائدة: توافر عالٍ، تعافي من الكوارث، وأمن قوي.",
      p5Title: "🌍 5. مواكبة المستقبل والابتكار",
      p5Body: "يتكامل السحابي الأصلي بسهولة مع الذكاء الاصطناعي وإنترنت الأشياء والحوسبة الطرفية—لمواكبة تطور التقنية.",
      p5Benefit: "الفائدة: قابلية توسع طويلة الأمد وقابلية التكيّف.",
      cta: "استكشف حلول السحابي الأصلي →",
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
    <section className="cloud-native-section">
      <div className="cloud-native-card">
        <h2 className="cloud-native-title">
          {t("title")}
        </h2>

        {/* Section 1 */}
        <div className="cloud-native-point">
          <h3>{t("p1Title")}</h3>
          <p>{t("p1Body")}</p>
          <strong>{t("p1Benefit").split(":")[0]}:</strong> {t("p1Benefit").split(": ")[1] || t("p1Benefit").split(":")[1]}
        </div>

        {/* Section 2 */}
        <div className="cloud-native-point">
          <h3>{t("p2Title")}</h3>
          <p>{t("p2Body")}</p>
          <strong>{t("p2Benefit").split(":")[0]}:</strong> {t("p2Benefit").split(": ")[1] || t("p2Benefit").split(":")[1]}
        </div>

        {/* Section 3 */}
        <div className="cloud-native-point">
          <h3>{t("p3Title")}</h3>
          <p>{t("p3Body")}</p>
          <strong>{t("p3Benefit").split(":")[0]}:</strong> {t("p3Benefit").split(": ")[1] || t("p3Benefit").split(":")[1]}
        </div>

        {/* Section 4 */}
        <div className="cloud-native-point">
          <h3>{t("p4Title")}</h3>
          <p>{t("p4Body")}</p>
          <strong>{t("p4Benefit").split(":")[0]}:</strong> {t("p4Benefit").split(": ")[1] || t("p4Benefit").split(":")[1]}
        </div>

        {/* Section 5 */}
        <div className="cloud-native-point">
          <h3>{t("p5Title")}</h3>
          <p>{t("p5Body")}</p>
          <strong>{t("p5Benefit").split(":")[0]}:</strong> {t("p5Benefit").split(": ")[1] || t("p5Benefit").split(":")[1]}
        </div>

        {/* CTA Button */}
        <a href="/cloud" className="cloud-native-link">
          {t("cta")}
        </a>
      </div>
    </section>
  );
};

export default Blog2;
