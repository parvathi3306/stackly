import './Cloud.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import dataImage from "../images/data ai.jpg";
import servicesImage from "../images/das.jpg";

function Data() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => navigate(path);
  
  const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');
  
  const translations = useMemo(() => ({
    en: {
      heroTitle: 'Data & AI',
      introTitle: 'Harness Data and AI to Drive Smarter Business Decisions',
      introBody: 'Our Data & AI solutions empower you to innovate faster, extract deeper insights, and enhance security whether you’re modernizing data infrastructure, optimizing AI workflows, or building intelligent applications.',
      feat1: '🧠 Intelligent Insights – Unlock actionable data-driven decisions.',
      feat2: '🔍 Advanced Security – Protect your AI models and data assets.',
      feat3: '⚙️ Scalable AI Workflows – Automate and optimize at any scale.',
      consultation: 'Get a Data & AI Consultation',
      servicesTitle: 'Our Data & AI Services',
      servicesSubtitle: 'From data integration to AI optimization, we provide end-to-end expertise for your data-driven transformation.',
      tl1Title: 'Data Integration', tl1Desc: 'Seamless consolidation of your data sources with minimal disruption.',
      tl2Title: 'AI Security & Governance', tl2Desc: 'Enterprise-grade security to protect data and meet compliance.',
      tl3Title: 'AI Optimization', tl3Desc: 'Reduce costs and boost performance with intelligent AI model tuning.',
      tl4Title: 'AI‑Native Applications', tl4Desc: 'Build scalable, cloud‑native AI‑powered applications to drive innovation.',
      benefitsTitle: 'Why Choose Our Data & AI Services?',
      benefitsSubtitle: 'Discover the key advantages that make our data and AI solutions the perfect choice for your business transformation.',
      b1Title: 'High Performance', b1Desc: 'Fast, reliable, and scalable cloud solutions for your business needs.',
      b2Title: 'Secure & Compliant', b2Desc: 'Protect your data with enterprise‑grade security and compliance.',
      b3Title: 'Flexible & Scalable', b3Desc: 'Easily scale resources up or down as your business grows.',
      exploreTitle: 'Explore Our Data & AI Services',
      card1Title: 'Data & AI with AWS', card1Body: 'We offer AI‑powered data solutions using AWS technology that accelerate insights, automate processes, and drive intelligent decision‑making with scalable, secure infrastructure.',
      card2Title: 'Data & AI with Google', card2Body: 'Together, Stackly and Google Cloud enable organizations to harness advanced AI and data analytics to innovate faster, optimize operations, and build predictive models.',
      card3Title: 'Data & AI with Microsoft', card3Body: 'We collaborate with Microsoft to integrate AI and data platforms, empowering businesses to unlock actionable intelligence, enhance productivity and achieve.',
      contactTitle: 'Contact Us for Reliable IT Services',
      contactBody: 'We help organizations modernize their infrastructure, secure their systems, and drive digital transformation through tailored IT solutions. Let’s build your future together.',
      knowMore: 'Know more →',
    },
    he: {
      heroTitle: 'נתונים ובינה מלאכותית',
      introTitle: 'נצל את כוח הנתונים והבינה לקבלת החלטות חכמות יותר',
      introBody: 'הפתרונות שלנו לנתונים ובינה מלאכותית מאפשרים לך לחדש מהר יותר, להפיק תובנות עמוקות יותר ולחזק את האבטחה.',
      feat1: '🧠 תובנות חכמות – החלטות מבוססות נתונים.',
      feat2: '🔍 אבטחה מתקדמת – הגנה על המודלים והנכסים שלך.',
      feat3: '⚙️ זרימות עבודה מדרגיות – אוטומציה ואופטימיזציה בכל קנה מידה.',
      consultation: 'ייעוץ נתונים ובינה מלאכותית',
      servicesTitle: 'השירותים שלנו בתחום הנתונים והבינה',
      servicesSubtitle: 'מאינטגרציה ועד אופטימיזציה – מומחיות מקצה לקצה לשינוי מבוסס נתונים.',
      tl1Title: 'אינטגרציית נתונים', tl1Desc: 'שילוב חלק של מקורות הנתונים שלך ללא הפרעות.',
      tl2Title: 'אבטחת AI וניהול', tl2Desc: 'אבטחה ברמת ארגון על מנת להגן ולקיים רגולציה.',
      tl3Title: 'אופטימיזציית AI', tl3Desc: 'הפחת עלויות ושפר ביצועים בעזרת טיוב מודלים אינטיליגנטי.',
      tl4Title: 'אפליקציות מבוססות AI', tl4Desc: 'בנה יישומים פורצי דרך מבוססי ענן המופעלים על‑ידי בינה מלאכותית.',
      benefitsTitle: 'למה לבחור בשירותי הנתונים והבינה שלנו?',
      benefitsSubtitle: 'גלה את היתרונות המרכזיים שבשירותינו לשינוי עסקי מתוחכם.',
      b1Title: 'ביצועים גבוהים', b1Desc: 'פתרונות מהירים, אמינים וניתנים להרחבה.',
      b2Title: 'מאובטח ותואם', b2Desc: 'הגן על הנתונים עם אבטחה ותאימות ברמה ארגונית.',
      b3Title: 'גמיש ומדרגי', b3Desc: 'הרחב ספקים ומשאבים בהתאמה לצמיחת העסק.',
      exploreTitle: 'גלה את שירותי הנתונים והבינה שלנו',
      card1Title: 'נתונים ובינה עם AWS', card1Body: 'אצת תובנות, אוטומציה וקבלת החלטות חכמה עם AWS.',
      card2Title: 'נתונים ובינה עם Google', card2Body: 'שילוב אנליטיקה מתקדמת ודיאגנוזה חיזויית עם Google Cloud.',
      card3Title: 'נתונים ובינה עם Microsoft', card3Body: 'המון תובנות והעצמה בעזרת שיתוף פעולה עם Microsoft.',
      contactTitle: 'צור קשר לשירותי IT אמינים',
      contactBody: 'נשמח לעזור לארגון שלך לעבור שינוי דיגיטלי בטוח ומתקדם.',
      knowMore: 'למידע נוסף →',
    },
    ar: {
      heroTitle: 'البيانات والذكاء الاصطناعي',
      introTitle: 'استخدم البيانات والذكاء الاصطناعي لاتخاذ قرارات أكثر ذكاءً',
      introBody: 'تحل منتجاتنا دون الذكاء الاصطناعي تمكينك من الابتكار أسرع، واستخراج رؤى أعمق، وتعزيز الأمان، سواء كنت تقوم بترقية البنية التحتية، أو تحسين سير عمل الذكاء الاصطناعي، أو بناء تطبيقات ذكية.',
      feat1: '🧠 رؤى ذكية – قرارات مستندة إلى البيانات.',
      feat2: '🔍 أمان متقدم – حماية نماذج الذكاء الاصطناعي والبيانات.',
      feat3: '⚙️ سير عمل قابل للتوسع – أتمتة وتحسين على أي نطاق.',
      consultation: 'احصل على استشارة البيانات والذكاء الاصطناعي',
      servicesTitle: 'خدمات البيانات والذكاء الاصطناعي لدينا',
      servicesSubtitle: 'من التكامل إلى التحسين – خبرة شاملة لتحول يعتمد على البيانات.',
      tl1Title: 'تكامل البيانات', tl1Desc: 'دمج سلس لمصادر البيانات لديك بأقل اضطراب.',
      tl2Title: 'أمان وإدارة الذكاء الاصطناعي', tl2Desc: 'أمان مؤسسي لحماية البيانات وضمان الامتثال.',
      tl3Title: 'تحسين الذكاء الاصطناعي', tl3Desc: 'خفض التكاليف وتعزيز الأداء من خلال تحسين ذكي للنماذج.',
      tl4Title: 'تطبيقات قائمة على الذكاء الاصطناعي', tl4Desc: 'بناء تطبيقات ذكية قادرة على التوسع على السحابة.',
      benefitsTitle: 'لماذا تختار خدمات البيانات والذكاء الاصطناعي لدينا؟',
      benefitsSubtitle: 'اكتشف أهم المزايا التي تجعل حلولنا مثالية لعملك.',
      b1Title: 'أداء عالي', b1Desc: 'حلول سحابية سريعة، موثوقة وقابلة للتوسع.',
      b2Title: 'آمن ومتوافق', b2Desc: 'حماية على مستوى المؤسسات وامتثال كامل.',
      b3Title: 'مرن وقابل للتوسع', b3Desc: 'توسيع الموارد بسهولة مع نمو عملك.',
      exploreTitle: 'استكشف خدمات البيانات والذكاء الاصطناعي الخاصة بنا',
      card1Title: 'البيانات والذكاء الاصطناعي مع AWS', card1Body: 'تسريع الرؤى، أتمتة الإجراءات، ودفع القرارات مع AWS.',
      card2Title: 'البيانات والذكاء الاصطناعي مع Google', card2Body: 'تحليلات متقدمة ونماذج تنبؤية مع Google Cloud.',
      card3Title: 'البيانات والذكاء الاصطناعي مع Microsoft', card3Body: 'كشف الرؤى وتحسين الإنتاجية مع Microsoft AI.',
      contactTitle: 'اتصل بنا للحصول على خدمات تكنولوجيا معلومات موثوقة',
      contactBody: 'نساعد المؤسسات على تحديث البنية التحتية وتأمين الأنظمة وتحقيق التحول الرقمي.',
      knowMore: 'اعرف المزيد →',
    }
  }), []);
  
  const t = (key) => (translations[language] || translations.en)[key] || key;
  
  useEffect(() => {
    const handler = (e) => {
      const nextLang = e?.detail?.language || localStorage.getItem('app_language') || 'en';
      setLanguage(nextLang);
    };
    window.addEventListener('languageChanged', handler);
    return () => window.removeEventListener('languageChanged', handler);
  }, []);
  
  const isRtl = language === 'he' || language === 'ar';

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* HERO SECTION */}
      <section className="hero">
        <img className="hero-video" src={dataImage} alt={t('heroTitle')} />
        <div className="hero-overlay">
          <h1>{t('heroTitle')}</h1>
        </div>
      </section>

      {/* CLOUD SECTION */}
      <section className="cloud-section">
        <div className="cloud-container">
          <div className="cloud-content">
            <h2>{t('introTitle')}</h2>
            <p>{t('introBody')}</p>
            <ul className="cloud-features">
              <li><span>{t('feat1')}</span></li>
              <li><span>{t('feat2')}</span></li>
              <li><span>{t('feat3')}</span></li>
            </ul>
            <button className="cloud-btn" onClick={() => handleGetStarted("/contact")}>
              {t('consultation')}
            </button>
          </div>
          <div className="cloud-image">
            <img src="https://i.pinimg.com/736x/4d/f5/bf/4df5bf2f639f530346fd922a90a416ab.jpg" alt="Cloud Solutions" />
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="cloud-services-timeline">
        <h2>{t('servicesTitle')}</h2>
        <p className="cloud-subtitle">{t('servicesSubtitle')}</p>
        <div className="cloud-timeline-container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">🔗</div>
              <div className="timeline-content">
                <h3>{t('tl1Title')}</h3>
                <p>{t('tl1Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">🛡️</div>
              <div className="timeline-content">
                <h3>{t('tl2Title')}</h3>
                <p>{t('tl2Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">🤖</div>
              <div className="timeline-content">
                <h3>{t('tl3Title')}</h3>
                <p>{t('tl3Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">🚀</div>
              <div className="timeline-content">
                <h3>{t('tl4Title')}</h3>
                <p>{t('tl4Desc')}</p>
              </div>
            </div>
          </div>
          <div className="timeline-image">
            <img src={servicesImage} alt="Services" />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="cloud-benefits">
        <div className="cloud-benefits-container">
          <h2>{t('benefitsTitle')}</h2>
          <p className="benefits-subtitle">{t('benefitsSubtitle')}</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>{t('b1Title')}</h3>
              <p>{t('b1Desc')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>{t('b2Title')}</h3>
              <p>{t('b2Desc')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>{t('b3Title')}</h3>
              <p>{t('b3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS SECTION */}
      <section id="cloud-services">
        <h1>{t('exploreTitle')}</h1>
        <div className="cards">
          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/736x/be/86/14/be86142e5323788a4e0b495872d8c7ef.jpg" alt="AWS" />
            </div>
            <div className="card-content">
              <h2>{t('card1Title')}</h2>
              <p>{t('card1Body')}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/1200x/5b/59/1a/5b591ac56f20337445b413a24f4e9616.jpg" alt="Google" />
            </div>
            <div className="card-content">
              <h2>{t('card2Title')}</h2>
              <p>{t('card2Body')}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/736x/ee/d4/ba/eed4babda7074cf18caad6ca2dde972e.jpg" alt="Microsoft" />
            </div>
            <div className="card-content">
              <h2>{t('card3Title')}</h2>
              <p>{t('card3Body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="contact-section">
        <img src="https://i.pinimg.com/1200x/c1/fe/0d/c1fe0d4c306e76f59dbed880b0935f2a.jpg" alt="Background" className="background-img" />
        <div className="contact-content">
          <h2>{t('contactTitle')}</h2>
          <p>{t('contactBody')}</p>
          <a href="#contact" className="cta-button" onClick={() => handleGetStarted("/contact")}>
            {t('knowMore')}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Data;
