import React, { useEffect, useMemo, useState } from "react";
import { useDarkMode } from "../context/Darkmodecontext";

import "./Home2.css"; // Styling for hero section
import { useNavigate } from "react-router-dom";
import ho2 from "../images/ho2.mp4";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";  
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";  
import logo5 from "../images/logo5.jpg";
import ls from "../images/ls.jpg";
import cr from "../images/cr.jpg";  
import ln from "../images/ln.jpg";
import logo from "../images/logo.png";
import its1 from "../images/its1.jpg";
import its from "../images/its.jpg";



function Home2() {
  const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path); 
    }    
      const { darkMode, toggleDarkMode } = useDarkMode();
  const [language, setLanguage] = useState(() => localStorage.getItem("app_language") || "en");

  const translations = useMemo(() => ({
    en: {
      heroTitle: "Powering Your Business with Cutting-Edge IT Solutions",
      heroDesc: "From cloud migration to cybersecurity, we deliver scalable, reliable, and innovative technology services that drive growth and efficiency.",
      browseMore: "Browse More",
      trustedBy: "Trusted by businesses that\\nare serious about efficiency",
      exploreTitle: "Explore Stackly",
      lifeAt: "Life at Stackly",
      csr: "Corporate social responsibility",
      latestNews: "Latest news",
      insightsTitle: "Tech Insights Hub",
      insightsSubtitle: "Real-time trends shaping the future of IT services.",
      insight1Title: "93% Cloud Adoption",
      insight1Text: "By 2025, nearly all businesses will be cloud-driven. We help you lead, not follow.",
      insight2Title: "$10.5T in Cybercrime",
      insight2Text: "Stay ahead of threats with our real-time cybersecurity and incident response.",
      insight3Title: "AI Task Automation",
      insight3Text: "AI is reshaping work. We build intelligent automation tailored to you.",
      insight4Title: "5G + Edge Computing",
      insight4Text: "Next-gen connectivity is here. Are your networks ready for the future?",
      exploreServices: "Explore Our Services",
      businessHeading: "Business Insights & Corporate Impact",
      sharePrice: "Share price",
      locationCap: "Stackly - Paris CAP",
      sampleDate: "16 Aug 2025 12:04 CET",
      priceChange: "↑ 1.10 0.9%",
      disclaimer: "Disclaimer",
      aboutStacklyTitle: "Find out more about Stackly",
      aboutStacklyBody: "Stackly is a trusted leader in digital transformation, consulting, technology, and engineering solutions. We empower organizations to innovate and scale by delivering cutting-edge services across the cloud, digital platforms, and modern tech ecosystems.",
      aboutUsCta: "About us →",
      esg: "ESG",
      esgBody: "Discover how we integrate Environmental, Social, and Governance principles into every aspect of our business to drive sustainable growth. Stay informed with detailed reports on our initiatives, milestones, and commitments toward a responsible future. Join us on our journey to create lasting positive impact across communities and industries.",
      ctaTitle: "Ready to Innovate?",
      ctaText: "Have a project in mind or need assistance? Our team is here to help you discover the best IT solutions. Contact us today.",
      knowMore: "Know More",
    },
    he: {
      heroTitle: "מניעים את העסק שלך עם פתרונות IT מתקדמים",
      heroDesc: "ממהגרי ענן ועד אבטחת סייבר, אנו מספקים שירותי טכנולוגיה חדשניים, אמינים ומדרגיים שמקדמים צמיחה ויעילות.",
      browseMore: "גלה עוד",
      trustedBy: "נאמנים לעסקים\\nשלוקחים ברצינות את היעילות",
      exploreTitle: "גלה את Stackly",
      lifeAt: "החיים ב-Stackly",
      csr: "אחריות חברתית תאגידית",
      latestNews: "חדשות אחרונות",
      insightsTitle: "מרכז תובנות טכנולוגיות",
      insightsSubtitle: "מגמות בזמן אמת שמעצבות את עתיד שירותי ה-IT.",
      insight1Title: "93% אימוץ ענן",
      insight1Text: "עד 2025, כמעט כל העסקים יהיו מונעי ענן. אנו עוזרים לך להוביל, לא לעקוב.",
      insight2Title: "$10.5T בפשיעה קיברנטית",
      insight2Text: "הישאר צעד לפני האיומים עם אבטחת מידע בזמן אמת ומענה לאירועים.",
      insight3Title: "אוטומציה באמצעות בינה מלאכותית",
      insight3Text: "AI משנה את עולם העבודה. אנו בונים אוטומציות חכמות המותאמות עבורך.",
      insight4Title: "5G ומחשוב קצה",
      insight4Text: "קישוריות דור הבא כבר כאן. האם הרשתות שלך מוכנות לעתיד?",
      exploreServices: "חקור את השירותים שלנו",
      businessHeading: "תובנות עסקיות והשפעה תאגידית",
      sharePrice: "מחיר מניה",
      locationCap: "Stackly - פריז CAP",
      sampleDate: "16 אוג׳ 2025 12:04 CET",
      priceChange: "↑ 1.10 0.9%",
      disclaimer: "כתב ויתור",
      aboutStacklyTitle: "גלה עוד על Stackly",
      aboutStacklyBody: "Stackly היא מובילה מהימנה בטרנספורמציה דיגיטלית, ייעוץ, טכנולוגיה והנדסה. אנו מסייעים לארגונים לחדש ולצמוח באמצעות שירותים מתקדמים בענן, בפלטפורמות דיגיטליות ובמערכות טכנולוגיות מודרניות.",
      aboutUsCta: "עלינו →",
      esg: "ESG",
      esgBody: "גלה כיצד אנו משלבים עקרונות סביבתיים, חברתיים וממשליים בכל היבטי העסק כדי להוביל צמיחה בת-קיימא. הישאר מעודכן בדוחות מפורטים על יוזמותינו, אבני הדרך והמחויבויות לעתיד אחראי.",
      ctaTitle: "מוכנים לחדש?",
      ctaText: "יש לך פרויקט או צורך בעזרה? הצוות שלנו כאן כדי לעזור לך למצוא את פתרונות ה-IT המתאימים ביותר. צור קשר היום.",
      knowMore: "מידע נוסף",
    },
    ar: {
      heroTitle: "نقود عملك بحلول تقنية معلومات متقدمة",
      heroDesc: "من ترحيل السحابة إلى الأمن السيبراني، نقدم خدمات تكنولوجية موثوقة وقابلة للتوسع ومبتكرة تدفع النمو والكفاءة.",
      browseMore: "تصفّح المزيد",
      trustedBy: "موثوق به من الشركات\\nالتي تأخذ الكفاءة على محمل الجد",
      exploreTitle: "استكشف Stackly",
      lifeAt: "الحياة في Stackly",
      csr: "المسؤولية الاجتماعية للشركات",
      latestNews: "آخر الأخبار",
      insightsTitle: "مركز الرؤى التقنية",
      insightsSubtitle: "اتجاهات فورية تشكّل مستقبل خدمات تقنية المعلومات.",
      insight1Title: "اعتماد السحابة 93%",
      insight1Text: "بحلول 2025، ستكون معظم الشركات قائمة على السحابة. نساعدك على القيادة لا المتابعة.",
      insight2Title: "$10.5T في الجرائم الإلكترونية",
      insight2Text: "ابقَ متقدمًا على التهديدات بأمن سيبراني واستجابة للحوادث في الوقت الفعلي.",
      insight3Title: "أتمتة المهام بالذكاء الاصطناعي",
      insight3Text: "الذكاء الاصطناعي يعيد تشكيل العمل. نبني أتمتة ذكية مخصصة لك.",
      insight4Title: "5G + الحوسبة الطرفية",
      insight4Text: "الاتصال الجيل القادم هنا. هل شبكاتك جاهزة للمستقبل؟",
      exploreServices: "استكشف خدماتنا",
      businessHeading: "رؤى الأعمال والأثر المؤسسي",
      sharePrice: "سعر السهم",
      locationCap: "Stackly - باريس CAP",
      sampleDate: "16 أغسطس 2025 12:04 CET",
      priceChange: "↑ 1.10 0.9%",
      disclaimer: "إخلاء المسؤولية",
      aboutStacklyTitle: "اعرف المزيد عن Stackly",
      aboutStacklyBody: "Stackly شركة رائدة موثوقة في التحول الرقمي والاستشارات والتكنولوجيا والحلول الهندسية. نمكّن المؤسسات من الابتكار والتوسع عبر تقديم خدمات متقدمة في السحابة والمنصات الرقمية والأنظمة التقنية الحديثة.",
      aboutUsCta: "من نحن →",
      esg: "البيئة والمجتمع والحوكمة",
      esgBody: "اكتشف كيف ندمج مبادئ البيئة والمجتمع والحوكمة في كل جانب من أعمالنا لدفع النمو المستدام. ابقَ مطلعًا على تقارير مفصلة حول مبادراتنا وإنجازاتنا والتزاماتنا نحو مستقبل مسؤول.",
      ctaTitle: "جاهزون للابتكار؟",
      ctaText: "هل لديك مشروع أو تحتاج مساعدة؟ فريقنا هنا لمساعدتك في العثور على أفضل حلول تقنية المعلومات. تواصل معنا اليوم.",
      knowMore: "اعرف المزيد",
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
            <section className="hero">
                {/* Background video */}
                <video
                    className="hero-video"
                    src={ho2} // Place your video in public/images or public/videos
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Overlay content */}
                <div className="hero-overlay">
                    <h1>{t("heroTitle")}</h1>
                    <p>
                        {t("heroDesc")}
                    </p>

                    {/* Buttons */}
                    <div className="hero-buttons">
                        <button className="btn btn-primary"onClick={()=>handleGetStarted("/services")}>{t("browseMore")}</button>

                    </div>
                </div>
            </section>







            <section className="trusted-section">
                <div className="trusted-text">
                    <h2>{t("trustedBy").split("\\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx === 0 ? <br /> : null}
                      </span>
                    ))}</h2>
                </div>

                <div className="trusted-logos-scroll">
                    <img src={logo1} alt="Company 1" />
                    <img src={logo2}alt="Company 2" />
                    <img src={logo3} alt="Company 3" />
                    <img src={logo4} alt="Company 4" />
                    <img src={logo5} alt="Company 5" />
                </div>
            </section>








<section class="explore-section">
  <h2 class="explore-title">{t("exploreTitle")}</h2>

  <div class="explore-grid">
    <div class="explore-card">
      <div class="image-container">
        <img src={ls} alt="Life at Stackly" />
      </div>
      <a href="" class="explore-link"onClick={()=>handleGetStarted("/about")}>{t("lifeAt")}</a>
    </div>

    <div class="explore-card">
      <div class="image-container">
        <img src={cr} alt="Corporate social responsibility" />
      </div>
      <a href="/services" class="explore-link"onClick={()=>handleGetStarted("/services")}>{t("csr")}</a>
    </div>

    <div class="explore-card">
      <div class="image-container">
        <img src={ln} alt="Latest news" />
      </div>
      <a href="" class="explore-link"onClick={()=>handleGetStarted("/contact")}>{t("latestNews")}</a>
    </div>
  </div>
</section>






<section class="insights-section">
  <h2 class="insights-title">{t("insightsTitle")}</h2>
  <p class="insights-subtitle">{t("insightsSubtitle")}</p>

  <div class="insights-cards-grid">
    <div class="insights-card">
      <div class="insights-icon">📈</div>
      <h3 class="insights-card-title">{t("insight1Title")}</h3>
      <p class="insights-card-text">{t("insight1Text")}</p>
    </div>

    <div class="insights-card">
      <div class="insights-icon">🔐</div>
      <h3 class="insights-card-title">{t("insight2Title")}</h3>
      <p class="insights-card-text">{t("insight2Text")}</p>
    </div>

    <div class="insights-card">
      <div class="insights-icon">🤖</div>
      <h3 class="insights-card-title">{t("insight3Title")}</h3>
      <p class="insights-card-text">{t("insight3Text")}</p>
    </div>

    <div class="insights-card">
      <div class="insights-icon">🌐</div>
      <h3 class="insights-card-title">{t("insight4Title")}</h3>
      <p class="insights-card-text">{t("insight4Text")}</p>
    </div>
  </div>

  <a href="/services" class="insights-cta-button">{t("exploreServices")}</a>
</section>




  <h2 class="section-heading">{t("businessHeading")}</h2>
<section class="info-section">
  <div class="info-box left" data-aos="fade-right">
    <h3>{t("sharePrice")}</h3>
    <p><strong>{t("locationCap").split(" ")[0]} - {t("locationCap").split(" ")[2]}</strong> <span>{t("locationCap").split(" ")[3]}</span></p>
    <p>{t("sampleDate")}</p>
    <h2>123.05 <span>EUR</span></h2>
    <p class="price-change">{t("priceChange")}</p>
    <p class="disclaimer">{t("disclaimer")}</p>
  </div>

  <div class="info-box center" data-aos="fade-up">
    <h3>{t("aboutStacklyTitle")}</h3>
    <p>
      {t("aboutStacklyBody")}
    </p>
    <img src={logo} alt="Logo" class="logo" />
    <a href="/about" class="link">{t("aboutUsCta")}</a>
  </div>

  <div class="info-box right" data-aos="fade-left">
    <div class="img-bg">
      <h4>{t("esg")}</h4>
      <img src={its1} alt="ESG" />
    </div>
    <p>
      {t("esgBody")}
    </p>
    
  </div>
</section>








<section className="contact-cta">
  <div className="cta-container">
    <div className="cta-image">
      <img src={its} alt="IT Support Team" />
    </div>
    <div className="cta-content">
      <h2 className="cta-title">{t("ctaTitle")}</h2>
      <p className="cta-text">
{t("ctaText")}
      </p>
      <button className="cta-btn"onClick={()=>handleGetStarted("/contact")}>{t("knowMore")}</button>
    </div>
  </div>
</section>
        </>
    );
}

export default Home2;
