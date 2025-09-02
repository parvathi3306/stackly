import React, { useEffect, useMemo, useState } from "react";
import "./Blog.css"; // Optional: Add styles for your blog
import { useNavigate } from "react-router-dom";
import blog from "../images/blogg.mp4";

const Blog = () => {
  const navigate = useNavigate();

  const handleGetStarted = (path) => {
    navigate(path);
  };

  const [language, setLanguage] = useState(() => localStorage.getItem("app_language") || "en");

  const translations = useMemo(() => ({
    en: {
      heroTitle: "Blog",
      heroSubtitle: "Empowering Digital Futures with Scalable IT Solutions.",
      latestInsights: "Latest Insights & Trends",
      card1Title: "5 Ways to Secure Your Cyber",
      card1Desc: "Learn how to future-proof your business against the latest threats and stay compliant in an evolving digital landscape.",
      readMore: "Read more →",
      card2Title: "Future of Software: Cloud-Native",
      card2Desc: "Discover the benefits of building cloud-native applications and how they enable speed, scalability, and innovation.",
      card3Title: "AI-Driven Business Intelligence",
      card3Desc: "Explore how AI-powered analytics and smarter data pipelines can drive real-time decision-making.",
      featured: "Featured Innovations",
      feat1Title: "The Rise of Quantum Computing",
      feat1Body: "Quantum computing is no longer science fiction—it’s rapidly becoming a reality that's set to redefine how we approach complex problem-solving. Unlike classical computers that use bits, quantum computers use qubits, enabling them to perform calculations at speeds previously unimaginable. As major tech companies and governments invest heavily in this domain, understanding quantum computing’s potential and limitations is crucial. Whether you’re an enterprise, developer, or policymaker, staying ahead of this curve will be a competitive advantage.",
      feat2Title: "5G & Beyond",
      feat2Body: "5G is more than just faster internet on your phone—it’s the backbone of tomorrow’s connected world. With ultra-low latency, higher bandwidth, and massive device connectivity, 5G enables a new generation of technologies. Looking ahead, 6G and satellite-based connectivity promise even greater speed and reach. Businesses that embrace the 5G wave today will be better prepared for a hyper-connected future.",
      feat3Title: "AR & VR in Enterprise",
      feat3Body: "AR and VR are moving beyond gaming. Industries use immersive tech to enhance training, design, and collaboration. As devices become more accessible, businesses integrating these technologies gain an edge in innovation, efficiency, and customer experience.",
      leadership: "Leadership & Digital Strategy",
      lead1Title: "Leading Digital Transformation",
      lead1Desc: "Key strategies for CIOs and CTOs to align tech with business goals and drive innovation at scale.",
      lead2Title: "Building Remote-First Cultures",
      lead2Desc: "Learn how modern enterprises are creating connected, productive remote teams with digital-first workflows.",
      lead3Title: "Smart IT Budgeting",
      lead3Desc: "Explore how to balance cost optimization with innovation investment in uncertain times.",
    },
    he: {
      heroTitle: "בלוג",
      heroSubtitle: "מקדמים עתיד דיגיטלי עם פתרונות IT ניתנים להרחבה.",
      latestInsights: "תובנות ומגמות אחרונות",
      card1Title: "5 דרכים לאבטח את הסייבר שלך",
      card1Desc: "למד כיצד להגן על העסק מול איומים חדשים ולהישאר תואם בעולם דיגיטלי משתנה.",
      readMore: "קרא עוד →",
      card2Title: "עתיד התוכנה: Cloud-Native",
      card2Desc: "גלה את היתרונות של בניית יישומים מקור-ענן וכיצד הם מאפשרים מהירות, מדרגיות וחדשנות.",
      card3Title: "בינה עסקית מונעת AI",
      card3Desc: "חקור כיצד אנליטיקה מונעת AI וצנרות נתונים חכמות מניעות קבלת החלטות בזמן אמת.",
      featured: "חדשנות מובילה",
      feat1Title: "עליית המחשוב הקוונטי",
      feat1Body: "המחשוב הקוונטי כבר אינו מדע בדיוני אלא מציאות מתקרבת שמשנה את פתרון הבעיות המורכבות. עם השקעות כבדות של חברות וממשלות, חשוב להבין הזדמנויות ואתגרים כדי להקדים את העקומה.",
      feat2Title: "5G ומה שמעבר",
      feat2Body: "5G הוא יותר מאינטרנט מהיר—זהו עמוד השדרה של העולם המחובר של מחר. הוא מאפשר טכנולוגיות חדשות, ו-6G בעתיד יביא מהירות וכיסוי גדולים יותר.",
      feat3Title: "AR ו-VR בארגונים",
      feat3Body: "ארגונים מאמצים מציאות רבודה ומציאות מדומה להכשרה, עיצוב ושיתוף פעולה. אימוץ מוקדם מספק יתרון בחדשנות ובחוויית הלקוח.",
      leadership: "מנהיגות ואסטרטגיה דיגיטלית",
      lead1Title: "הובלת טרנספורמציה דיגיטלית",
      lead1Desc: "אסטרטגיות מפתח ליישור טכנולוגיה ליעדי העסק ולהובלת חדשנות בקנה מידה.",
      lead2Title: "בניית תרבות Remote-First",
      lead2Desc: "כיצד ארגונים יוצרים צוותים מרוחקים מחוברים ופרודוקטיביים עם תהליכי עבודה דיגיטליים.",
      lead3Title: "תקצוב IT חכם",
      lead3Desc: "איזון בין אופטימיזציית עלויות להשקעה בחדשנות בזמנים לא ודאיים.",
    },
    ar: {
      heroTitle: "المدونة",
      heroSubtitle: "نمكّن المستقبل الرقمي بحلول تقنية معلومات قابلة للتوسع.",
      latestInsights: "أحدث الرؤى والاتجاهات",
      card1Title: "5 طرق لتعزيز أمنك السيبراني",
      card1Desc: "تعلّم كيفية حماية عملك من أحدث التهديدات والبقاء متوافقًا في عالم رقمي متغير.",
      readMore: "اقرأ المزيد →",
      card2Title: "مستقبل البرمجيات: السحابي الأصلي",
      card2Desc: "اكتشف مزايا بناء تطبيقات سحابية أصلية وكيف تمكّن السرعة والقابلية للتوسّع والابتكار.",
      card3Title: "ذكاء الأعمال المدفوع بالذكاء الاصطناعي",
      card3Desc: "استكشف كيف تقود تحليلات الذكاء الاصطناعي وأنابيب البيانات الأذكى قرارات فورية.",
      featured: "ابتكارات مميزة",
      feat1Title: "صعود الحوسبة الكمّية",
      feat1Body: "الحوسبة الكمّية أصبحت واقعًا يعيد تعريف حل المشكلات المعقدة. مع استثمارات ضخمة، فهم الإمكانات والحدود يمنح ميزة تنافسية.",
      feat2Title: "5G وما بعده",
      feat2Body: "5G أكثر من إنترنت أسرع—إنه العمود الفقري لعالم مترابط. يتيح تقنيات جديدة، ومع 6G مستقبلًا سنشهد سرعة وانتشارًا أكبر.",
      feat3Title: "الواقعان المعزّز والافتراضي في المؤسسات",
      feat3Body: "تعتمد المؤسسات AR وVR للتدريب والتصميم والتعاون. يوفّر التبنّي المبكر ميزة في الابتكار والكفاءة وتجربة العملاء.",
      leadership: "القيادة والاستراتيجية الرقمية",
      lead1Title: "قيادة التحول الرقمي",
      lead1Desc: "استراتيجيات أساسية لمواءمة التقنية مع أهداف العمل ودفع الابتكار على نطاق واسع.",
      lead2Title: "بناء ثقافات العمل عن بُعد",
      lead2Desc: "كيف تنشئ المؤسسات فرقًا بعيدة متصلة ومنتجة عبر أساليب رقمية أولاً.",
      lead3Title: "ميزانية تقنية معلومات ذكية",
      lead3Desc: "موازنة تحسين التكاليف مع الاستثمار في الابتكار خلال أوقات عدم اليقين.",
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
    <>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={blog}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay">
          <h1>{t("heroTitle")}</h1>
          <p>{t("heroSubtitle")}</p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="blog-cards-section">
        <h2 className="section-title">{t("latestInsights")}</h2>

        <div className="blog-cards-container">
          <div className="blog-card" onClick={() => handleGetStarted("/blog1")}>
            <img
              src="https://i.pinimg.com/1200x/88/83/e8/8883e86cb97ead6ad1e0b6d448176e7e.jpg"
              alt="Cybersecurity"
            />
            <div className="blog-card-content">
              <h3>{t("card1Title")}</h3>
              <p>{t("card1Desc")}</p>
              <span className="read-more">{t("readMore")}</span>
            </div>
          </div>

          <div className="blog-card" onClick={() => handleGetStarted("/blog2")}>
            <img
              src="https://i.pinimg.com/736x/ab/d2/4d/abd24de7e6d407557e802cc60bcc2eca.jpg"
              alt="Cloud Native"
            />
            <div className="blog-card-content">
              <h3>{t("card2Title")}</h3>
              <p>{t("card2Desc")}</p>
              <span className="read-more">{t("readMore")}</span>
            </div>
          </div>

          <div className="blog-card" onClick={() => handleGetStarted("/blog3")}>
            <img
              src="https://i.pinimg.com/736x/6c/1b/7c/6c1b7c6dac22be46c02c60028d0c9361.jpg"
              alt="AI and Data"
            />
            <div className="blog-card-content">
              <h3>{t("card3Title")}</h3>
              <p>{t("card3Desc")}</p>
              <span className="read-more">{t("readMore")}</span>
            </div>
          </div>
        </div>
      </section>



<section className="featured-blogs">
  <h2 className="section-title">{t("featured")}</h2>

  <div className="feature-row">
    <div className="feature-text">
      <h3>{t("feat1Title")}</h3>
      <p>{t("feat1Body")}</p>
    </div>
    <div className="feature-image">
      <img src="https://i.pinimg.com/1200x/72/39/a9/7239a91e57bd5af0470479a3ac6b9e0a.jpg" alt="Quantum Computing" />
    </div>
  </div>

  <div className="feature-row reverse">
    <div className="feature-text">
      <h3>{t("feat2Title")}</h3>
      <p>{t("feat2Body")}</p>
    </div>
    <div className="feature-image">
      <img src="https://i.pinimg.com/1200x/d9/a3/bb/d9a3bb5d478910634f06b55a895a3ce1.jpg" alt="5G Technology" />
    </div>
  </div>

  <div className="feature-row">
    <div className="feature-text">
      <h3>{t("feat3Title")}</h3>
      <p>{t("feat3Body")}</p>
      
    </div>
    <div className="feature-image">
      <img src="https://i.pinimg.com/1200x/d8/fd/0b/d8fd0be2f17641cf2633c9c7cc423a91.jpg" alt="AR and VR" />
    </div>
  </div>
</section>






<section className="leadership-section">
  <h2 className="section-title">{t("leadership")}</h2>
  
  <div className="leadership-list">

    <article className="leadership-item" onClick={() => handleGetStarted("/blog10")}>
      <div className="leadership-text">
        <h3>{t("lead1Title")}</h3>
        <p>{t("lead1Desc")}</p>
      </div>
      <img src="https://i.pinimg.com/1200x/a0/9a/db/a09adb47fbd1529d7edb97cc2fd4b8b3.jpg" alt="Digital Transformation" />
    </article>

    <article className="leadership-item" onClick={() => handleGetStarted("/blog11")}>
      <div className="leadership-text">
        <h3>{t("lead2Title")}</h3>
        <p>{t("lead2Desc")}</p>
      </div>
      <img src="https://i.pinimg.com/736x/40/85/53/40855388376cba2d42073e516c5f85f7.jpg" alt="Remote Work Culture" />
    </article>

    <article className="leadership-item" onClick={() => handleGetStarted("/blog12")}>
      <div className="leadership-text">
        <h3>{t("lead3Title")}</h3>
        <p>{t("lead3Desc")}</p>
      </div>
      <img src="https://i.pinimg.com/1200x/81/77/48/8177484a31bd9fc5608c98c91ee865b8.jpg" alt="Tech Budgeting" />
    </article>

  </div>
</section>

    </>
  );
};

export default Blog;
