import './Cloud.css';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react';
import intelligentHero from "../images/iis.jpg";

function Intelligent() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => navigate(path);

  const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');

  const translations = useMemo(() => ({
    en: {
      heroTitle: 'Intelligent Industry',
      introTitle: 'Drive Growth with Intelligent Industry Solutions',
      introBody: "Leverage advanced technologies to drive smart manufacturing, optimize operations, and accelerate innovation—whether you're modernizing production, enhancing supply chains, or enabling predictive maintenance.",
      feat1: '🏭 Smart Operations – Increase efficiency with real-time monitoring and automation.',
      feat2: '📦 Connected Supply Chains – Improve agility and visibility from sourcing to delivery.',
      feat3: '🔧 Predictive Maintenance – Minimize downtime with AI-driven equipment insights.',
      consultation: 'Get an Intelligent Industry Consultation',
      servicesTitle: 'Our Intelligent Industry Services',
      servicesSubtitle: 'End-to-end intelligent industry solutions from integration to optimization.',
      tl1Title: 'Intelligent Industry Integration',
      tl1Desc: 'Seamless integration of smart systems with minimal disruption.',
      tl2Title: 'Data Security',
      tl2Desc: 'Robust, enterprise‑grade security to protect industrial data and ensure compliance.',
      tl3Title: 'Process Optimization',
      tl3Desc: 'Enhance efficiency and reduce costs with intelligent automation strategies.',
      tl4Title: 'Smart Applications',
      tl4Desc: 'Develop, deploy, and scale industry-specific smart applications.',
      benefitsTitle: 'Why Choose Our Intelligent Industry Services?',
      benefitsSubtitle: 'Discover the key benefits that make our intelligent industry solutions the smart choice.',
      b1Title: 'High Performance',
      b1Desc: 'Fast, reliable, and scalable cloud solutions for your business needs.',
      b2Title: 'Secure & Compliant',
      b2Desc: 'Protect your data with enterprise-grade security and compliance.',
      b3Title: 'Flexible & Scalable',
      b3Desc: 'Easily scale resources up or down as your business grows.',
      exploreTitle: 'Explore Our Intelligent Industry Services',
      card1Title: 'Intelligent Industry with AWS',
      card1Body: 'We provide cutting-edge solutions using AWS to drive smart automation, predictive maintenance, and real-time data analytics that optimize industrial operations.',
      card2Title: 'Intelligent Industry with Google',
      card2Body: 'Together, Stackly and Google Cloud enable industries to harness AI and machine learning for enhanced decision-making, process automation, and innovation.',
      card3Title: 'Intelligent Industry with Microsoft',
      card3Body: 'In partnership with Microsoft, we help industries implement IoT, AI, and cloud technologies to build connected factories and accelerate digital transformation.',
      contactTitle: 'Contact Us for Reliable IT Services',
      contactBody: "We help organizations modernize their infrastructure, secure their systems, and drive digital transformation through tailored IT solutions. Let’s build your future together.",
      knowMore: 'Know more →',
    },
    he: {
      heroTitle: 'תעשייה חכמה',
      introTitle: 'צמיחה באמצעות פתרונות לתעשייה חכמה',
      introBody: 'נצל טכנולוגיות מתקדמות לייצור חכם, אופטימיזציית תהליכים והאצת חדשנות — בין אם זה מודרניזציה של הייצור, שיפור שרשראות אספקה או תחזוקה חזויה.',
      feat1: '🏭 פעילות חכמה – הגדל יעילות עם ניטור בזמן אמת ואוטומציה.',
      feat2: '📦 שרשראות אספקה מקושרות – שפר זריזות ושקיפות ממקור עד מסירה.',
      feat3: '🔧 תחזוקה חזויה – צמצם השבתות עם תובנות AI על ציוד.',
      consultation: 'ייעוץ לתעשייה חכמה',
      servicesTitle: 'שירותי התעשייה החכמה שלנו',
      servicesSubtitle: 'פתרונות מקצה לקצה משילוב ועד אופטימיזציה.',
      tl1Title: 'שילוב תעשייה חכמה',
      tl1Desc: 'שילוב חלק של מערכות חכמות עם הפרעה מינימלית.',
      tl2Title: 'אבטחת נתונים',
      tl2Desc: 'אבטחה איתנה ברמה ארגונית להגנה על נתונים תעשייתיים ועמידה בהתאמה.',
      tl3Title: 'אופטימיזציה של תהליכים',
      tl3Desc: 'שפר יעילות והפחת עלויות באמצעות אסטרטגיות אוטומציה חכמות.',
      tl4Title: 'יישומים חכמים',
      tl4Desc: 'פיתוח, פריסה והרחבת יישומים תעשייתיים מיוחדים.',
      benefitsTitle: 'למה לבחור בשירותי התעשייה החכמה שלנו?',
      benefitsSubtitle: 'גלה את היתרונות המרכזיים שהופכים את פתרונות התעשייה שלנו לחכמים כמו שאתה.',
      b1Title: 'ביצועים גבוהים',
      b1Desc: 'פתרונות ענן מהירים, אמינים וניתנים להרחבה.',
      b2Title: 'מאובטח ותואם',
      b2Desc: 'הגן על הנתונים עם אבטחה וציות ארגוניים.',
      b3Title: 'גמיש ומדרגי',
      b3Desc: 'הרחב משאבים בקלות ככל שהעסק צומח.',
      exploreTitle: 'גלה את שירותי התעשייה החכמה שלנו',
      card1Title: 'תעשייה חכמה עם AWS',
      card1Body: 'פתרונות מתקדמים בענן AWS שמביאים אוטומציה, תחזוקה חזויה ואנליטיקה בזמן אמת שמייעלת תהליכים תעשייתיים.',
      card2Title: 'תעשייה חכמה עם Google',
      card2Body: 'ביחד עם Google Cloud, מאפשרים שימוש ב‑AI ולמידת מכונה לקבלת החלטות, אוטומציה וחדשנות.',
      card3Title: 'תעשייה חכמה עם Microsoft',
      card3Body: 'בשיתוף Microsoft אנו מסייעים למפעלים ליישם IoT, AI וטכנולוגיות ענן לבניית מפעלים מחוברים ולהאצת טרנספורמציה דיגיטלית.',
      contactTitle: 'צור קשר לשירותי IT אמינים',
      contactBody: 'אנו מסייעים לארגונים לעדכן תשתיות, לאבטח מערכות ולהוביל טרנספורמציה דיגיטלית.',
      knowMore: 'למידע נוסף →',
    },
    ar: {
      heroTitle: 'الصناعة الذكية',
      introTitle: 'نمّي أعمالك بحلول الصناعة الذكية',
      introBody: 'استفد من التكنولوجيا المتقدمة لتحقيق الصناعة الذكية، تحسين العمليات، وتسريع الابتكار—سواء كنت تُحدث الإنتاج، تعزّز سلاسل الإمداد، أو تستخدم الصيانة التنبؤية.',
      feat1: '🏭 عمليات ذكية – زيادة الكفاءة من خلال المراقبة الفورية والأتمتة.',
      feat2: '📦 سلاسل إمداد متصلة – تحسين الرشاقة والرؤية من المصدر إلى التسليم.',
      feat3: '🔧 صيانة تنبؤية – تقليل التوقف من خلال رؤى مدعومة بالذكاء الاصطناعي لمعداتك.',
      consultation: 'احصل على استشارة الصناعة الذكية',
      servicesTitle: 'خدمات الصناعة الذكية لدينا',
      servicesSubtitle: 'حلول متكاملة من الدمج إلى التحسين.',
      tl1Title: 'دمج الصناعة الذكية',
      tl1Desc: 'دمج سلس للأنظمة الذكية دون تعطيل العمليات.',
      tl2Title: 'أمان البيانات',
      tl2Desc: 'أمان قوي على مستوى المؤسسة لحماية البيانات الصناعية وضمان الامتثال.',
      tl3Title: 'تحسين العمليات',
      tl3Desc: 'رفع الكفاءة وتقليل التكاليف من خلال استراتيجيات أتمتة ذكية.',
      tl4Title: 'تطبيقات ذكية',
      tl4Desc: 'تطوير، نشر، وتوسيع نطاق التطبيقات الصناعية المتخصصة.',
      benefitsTitle: 'لماذا تختار خدمات الصناعة الذكية لدينا؟',
      benefitsSubtitle: 'اكتشف الفوائد الأساسية التي تجعل حلولنا الصناعية خيارك الذكي.',
      b1Title: 'أداء عالي',
      b1Desc: 'حلول سحابية سريعة ويمكن الاعتماد عليها وقابلة للتوسع.',
      b2Title: 'آمن ومتوافق',
      b2Desc: 'حماية البيانات بأمان مؤسسي وامتثال كامل.',
      b3Title: 'مرن وقابل للتوسع',
      b3Desc: 'توسيع الموارد بسهولة مع نمو الأعمال.',
      exploreTitle: 'استكشف خدمات الصناعة الذكية لدينا',
      card1Title: 'الصناعة الذكية باستخدام AWS',
      card1Body: 'نقدم حلولاً متقدمة باستخدام AWS لتحقيق الأتمتة الذكية، الصيانة التنبؤية، وتحليلات في الوقت الحقيقي لتحسين العمليات الصناعية.',
      card2Title: 'الصناعة الذكية باستخدام Google',
      card2Body: 'معاً، تمكن Stackly وGoogle Cloud الصناعات من استخدام الذكاء الاصطناعي والتعلم الآلي لاتخاذ قرارات أفضل، أتمتة العمليات، والابتكار.',
      card3Title: 'الصناعة الذكية باستخدام Microsoft',
      card3Body: 'بالتعاون مع Microsoft، نساعد الصناعات على تنفيذ تقنيات IoT وAI والسحابة لبناء مصانع متصلة وتسريع التحول الرقمي.',
      contactTitle: 'اتصل بنا للحصول على خدمات تكنولوجيا معلومات موثوقة',
      contactBody: 'نساعد المؤسسات على تحديث البنية التحتية، تأمين الأنظمة، وتحقيق التحول الرقمي.',
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
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      {/* HERO SECTION */}
      <section className="hero">
        <img className="hero-video" src={intelligentHero} alt={t('heroTitle')} />
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
            <img src="https://i.pinimg.com/736x/87/b6/18/87b618dc3b6387f81b0f9c800495e197.jpg" alt="Cloud Solutions"/>
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
              <div className="timeline-icon">⚙️</div>
              <div className="timeline-content">
                <h3>{t('tl1Title')}</h3>
                <p>{t('tl1Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">🔒</div>
              <div className="timeline-content">
                <h3>{t('tl2Title')}</h3>
                <p>{t('tl2Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">⚡</div>
              <div className="timeline-content">
                <h3>{t('tl3Title')}</h3>
                <p>{t('tl3Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">📱</div>
              <div className="timeline-content">
                <h3>{t('tl4Title')}</h3>
                <p>{t('tl4Desc')}</p>
              </div>
            </div>
          </div>
          <div className="timeline-image">
            <img src="https://i.pinimg.com/1200x/c6/0a/ef/c60aeff242d5fbb2508ebb6c2f3eb5d5.jpg" alt="Smart Applications"/>
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
              <div className="benefit-icon">☁️</div>
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
              <img src="https://i.pinimg.com/1200x/73/e7/48/73e74835d46358a5d7933f903949c0b0.jpg" alt="AWS"/>
            </div>
            <div className="card-content">
              <h2>{t('card1Title')}</h2>
              <p>{t('card1Body')}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/1200x/fc/2c/93/fc2c93d19dffca501041254a85368583.jpg" alt="Google"/>
            </div>
            <div className="card-content">
              <h2>{t('card2Title')}</h2>
              <p>{t('card2Body')}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/736x/b2/1f/91/b21f91e3a251f9cee8d4445463891384.jpg" alt="Microsoft"/>
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
        <img src="https://i.pinimg.com/736x/79/e8/87/79e887acf66a1b3ed1f3a3ac657812cc.jpg" alt="Background" className="background-img"/>
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

export default Intelligent;
