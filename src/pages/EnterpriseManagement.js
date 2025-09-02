import './Cloud.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import enterpriseHero from "../images/em.jpg";
import enterpriseServices from "../images/ems.jpg";

function Enterprise() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => navigate(path);

  const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');

  const translations = useMemo(() => ({
    en: {
      heroTitle: 'Enterprise Management',
      introTitle: 'Smarter Enterprises with Data & AI',
      introBody: "Our enterprise solutions empower you to drive smarter decisions, optimize operations, and accelerate innovation whether you're integrating AI, managing data at scale, or automating core business processes.",
      feat1: '🏢 Centralized Operations – Manage all business units from a unified platform.',
      feat2: '📊 Data‑Driven Insights – Make informed decisions with real‑time analytics.',
      feat3: '🤖 Process Automation – Streamline workflows and boost efficiency using AI.',
      consultation: 'Get an Enterprise Management Consultation',
      servicesTitle: 'Our Enterprise Management Services',
      servicesSubtitle: 'Streamline Operations, Empower Decisions, Drive Enterprise Growth',
      tl1Title: 'Business Process Integration',
      tl1Desc: 'Seamlessly connect operations, departments, and data flows across your organization to drive collaboration and efficiency.',
      tl2Title: 'Data Governance & Compliance',
      tl2Desc: 'Implement enterprise‑wide policies to ensure secure data handling, regulatory compliance, and audit readiness.',
      tl3Title: 'Performance Optimization',
      tl3Desc: 'Improve enterprise productivity and reduce inefficiencies through data‑driven insights, automation, and streamlined workflows.',
      tl4Title: 'AI‑Driven Decision Support',
      tl4Desc: 'Empower leadership with real‑time analytics and intelligent recommendations powered by artificial intelligence.',
      benefitsTitle: 'Why Choose Our Enterprise Management Services?',
      benefitsSubtitle: 'Discover the key advantages that make our cloud solutions the perfect choice.',
      b1Title: 'High Performance',
      b1Desc: 'Fast, reliable, and scalable cloud solutions for your business needs.',
      b2Title: 'Secure & Compliant',
      b2Desc: 'Protect your data with enterprise‑grade security and compliance.',
      b3Title: 'Flexible & Scalable',
      b3Desc: 'Easily scale resources up or down as your business grows.',
      exploreTitle: 'Explore Our Cloud Services',
      card1Title: 'Enterprise Management with AWS',
      card1Body: 'Leverage AWS to build agile, scalable enterprise systems. Our solutions enhance operational efficiency, centralize data governance, and automate workflows—empowering enterprises to lead with speed.',
      card2Title: 'Enterprise Management with Google',
      card2Body: 'Partnering with Google Cloud, we deliver intelligent enterprise platforms that unify data, streamline decision‑making, and harness AI to drive productivity, optimize processes, and support innovation at scale.',
      card3Title: 'Enterprise Management with Microsoft',
      card3Body: 'With Microsoft technologies, we modernize legacy systems and implement robust enterprise solutions. From integrated business apps to AI‑driven insights, we help enterprises improve performance and adaptability.',
      contactTitle: 'Contact Us for Reliable IT Services',
      contactBody: "We help organizations modernize their infrastructure, secure their systems, and drive digital transformation through tailored IT solutions. Let's build your future together.",
      knowMore: 'Know more →',
    },
    he: {
      heroTitle: 'ניהול ארגוני',
      introTitle: 'ארגונים חכמים יותר עם נתונים ובינה מלאכותית',
      introBody: 'הפתרונות הארגוניים שלנו מאפשרים קבלת החלטות חכמה יותר, אופטימיזציה של תהליכים והאצת חדשנות — בין אם באמצעות אינטגרציית AI, ניהול נתונים בקנה מידה או אוטומציה של תהליכי ליבה עסקיים.',
      feat1: '🏢 ניהול מרוכז – נהל את כל יחידות העסק מפלטפורמה אחת.',
      feat2: '📊 תובנות מבוססות נתונים – קבלת החלטות בזמן אמת.',
      feat3: '🤖 אוטומציה של תהליכים – מיתוג תהליכים והגברת יעילות באמצעות AI.',
      consultation: 'ייעוץ לניהול ארגוני',
      servicesTitle: 'שירותי ניהול ארגוני שלנו',
      servicesSubtitle: 'ייעול תהליכים, העצמת קבלת החלטות, וצמיחה ארגונית',
      tl1Title: 'אינטגרציית תהליכים עסקיים',
      tl1Desc: 'חיבור חלק בין תהליכים, מחלקות וזרימות מידע בארגון לשיפור שיתוף פעולה ויעילות.',
      tl2Title: 'ניהול נתונים ועמידה רגולטורית',
      tl2Desc: 'יישום מדיניות ארגונית לאבטחה, תאימות ויכולת ביקורת.',
      tl3Title: 'אופטימיזציית ביצועים',
      tl3Desc: 'שיפור פריון הארגון והפחתת חוסר יעילות בעזרת תובנות, אוטומציה וזרימות עבודה ממוטבות.',
      tl4Title: 'תמיכה בקבלת החלטות מבוססת AI',
      tl4Desc: 'העצמת הנהגה עם ניתוח בזמן אמת והמלצות חכמות מ‑AI.',
      benefitsTitle: 'למה לבחור בשירותי ניהול ארגוני שלנו?',
      benefitsSubtitle: 'גלה את היתרונות המרכזיים שהופכים את פתרונות הענן שלנו לבחירה מושלמת.',
      b1Title: 'ביצועים גבוהים',
      b1Desc: 'פתרונות ענן מהירים, אמינים וניתנים להרחבה.',
      b2Title: 'מאובטח ותואם',
      b2Desc: 'הגן על הנתונים עם אבטחה ועמידה ברמה ארגונית.',
      b3Title: 'גמיש ומדרגי',
      b3Desc: 'התאם משאבים בקלות בהתאם לצמיחת העסק.',
      exploreTitle: 'גלה את שירותי הענן שלנו',
      card1Title: 'ניהול ארגוני עם AWS',
      card1Body: 'מיתוג תהליכים, שלטון נתונים וניהול זרימות עבודה עם AWS — ארגונים מובילים בצורה חכמה ומהירה.',
      card2Title: 'ניהול ארגוני עם Google',
      card2Body: 'בשיתוף Google Cloud אנו מספקים פלטפורמות חכמות המגבירות יעילות וקבלת החלטות, עם AI נרחב.',
      card3Title: 'ניהול ארגוני עם Microsoft',
      card3Body: 'באמצעות Microsoft אנו מחדשים מערכות, מספקים תובנות חכמות ומשפרים ביצועים ויכולת הסתגלות.',
      contactTitle: 'צור קשר לשירותי IT אמינים',
      contactBody: 'אנו מסייעים לארגונים לחדש תשתיות, לאבטח מערכות ולהוביל טרנספורמציה דיגיטלית.',
      knowMore: 'למידע נוסף →',
    },
    ar: {
      heroTitle: 'إدارة المؤسسات',
      introTitle: 'مؤسسات أكثر ذكاءً باستخدام البيانات والذكاء الاصطناعي',
      introBody: 'تمكِّن حلولنا المؤسسات من اتخاذ قرارات أذكى، وتحسين العمليات، وتسريع الابتكار سواء كنت تدمج الذكاء الاصطناعي، تدير البيانات على نطاق واسع، أو تؤتمت العمليات الأساسية.',
      feat1: '🏢 عمليات مركزية – إدارة جميع وحدات الأعمال من منصة موحّدة.',
      feat2: '📊 رؤى مدعومة بالبيانات – اتخاذ قرارات مستنيرة من خلال تحليلات فورية.',
      feat3: '🤖 أتمتة العمليات – تبسيط سير العمل وزيادة الكفاءة باستخدام الذكاء الاصطناعي.',
      consultation: 'احصل على استشارة في إدارة المؤسسات',
      servicesTitle: 'خدمات إدارة المؤسسات لدينا',
      servicesSubtitle: 'تبسيط العمليات، تمكين القرارات، دفع النمو المؤسسي',
      tl1Title: 'تكامل العمليات التجارية',
      tl1Desc: 'ربط العمليات، الأقسام وتدفقات البيانات بسلاسة لتعزيز التعاون والكفاءة.',
      tl2Title: 'حوكمة البيانات والامتثال',
      tl2Desc: 'تنفيذ سياسات مؤسسية لضمان أمان البيانات، الالتزام التنظيمي وجاهزية التدقيق.',
      tl3Title: 'تحسين الأداء',
      tl3Desc: 'رفع إنتاجية المؤسسة وتقليل الهدر من خلال رؤى، أتمتة وسير عمل متكامل.',
      tl4Title: 'دعم القرار بالذكاء الاصطناعي',
      tl4Desc: 'تمكين القيادة من تحليلات فورية وتوصيات ذكية مدعومة بالذكاء الاصطناعي.',
      benefitsTitle: 'لماذا تختار خدمات إدارة المؤسسات لدينا؟',
      benefitsSubtitle: 'اكتشف المزايا الرئيسية التي تجعل حلولنا السحابية خياراً مثالياً.',
      b1Title: 'أداء عالي',
      b1Desc: 'حلول سحابية سريعة ويمكن الوثوق بها وقابلة للتوسع.',
      b2Title: 'آمن ومتوافق',
      b2Desc: 'حماية البيانات بأمان مؤسسي والتوافق الكامل.',
      b3Title: 'مرن وقابل للتوسع',
      b3Desc: 'توسيع الموارد بسهولة مع نمو الأعمال.',
      exploreTitle: 'استكشف خدماتنا السحابية',
      card1Title: 'إدارة المؤسسات باستخدام AWS',
      card1Body: 'بناء أنظمة مؤسساتية مرنة وقابلة للتوسع باستخدام AWS. حلولنا تعزز الكفاءة، حوكمة البيانات، وتُؤتمت سير العمل—مُعززة المؤسسات بسرعة.',
      card2Title: 'إدارة المؤسسات باستخدام Google',
      card2Body: 'بالشراكة مع Google Cloud، نوفر منصات ذكية توحّد البيانات، تبسط اتخاذ القرار، وتوظف الذكاء الاصطناعي لدفع ودعم الابتكار على مستوى واسع.',
      card3Title: 'إدارة المؤسسات باستخدام Microsoft',
      card3Body: 'باستخدام تقنيات Microsoft نقوم بتحديث الأنظمة القديمة وتطبيق حلول مؤسسية قوية. من تطبيقات أعمال متكاملة إلى رؤى مدعومة بالذكاء الاصطناعي، نساعد المؤسسات على تحسين الأداء والقدرة على التكيف.',
      contactTitle: 'اتصل بنا للحصول على خدمات تكنولوجيا معلومات موثوقة',
      contactBody: 'نساعد المؤسسات على تحديث البنية التحتية، تأمين الأنظمة، وتحقيق التحول الرقمي.',
      knowMore: 'اعرف المزيد →',
    }
  }), []);

  const t = (key) => (translations[language] || translations.en)[key] || key;

  useEffect(() => {
    const handler = (e) => {
      const next = e?.detail?.language || localStorage.getItem('app_language') || 'en';
      setLanguage(next);
    };
    window.addEventListener('languageChanged', handler);
    return () => window.removeEventListener('languageChanged', handler);
  }, []);

  const isRtl = language === 'he' || language === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      {/* HERO SECTION */}
      <section className="hero">
        <img className="hero-video" src={enterpriseHero} alt={t('heroTitle')} />
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
            <img src="https://i.pinimg.com/1200x/e2/b5/ce/e2b5ce44c0295e9dbf4c219f519b9e3b.jpg" alt="Cloud Solutions" />
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
              <div className="timeline-icon">🏢</div>
              <div className="timeline-content">
                <h3>{t('tl1Title')}</h3>
                <p>{t('tl1Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">🔐</div>
              <div className="timeline-content">
                <h3>{t('tl2Title')}</h3>
                <p>{t('tl2Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">📊</div>
              <div className="timeline-content">
                <h3>{t('tl3Title')}</h3>
                <p>{t('tl3Desc')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">🤖</div>
              <div className="timeline-content">
                <h3>{t('tl4Title')}</h3>
                <p>{t('tl4Desc')}</p>
              </div>
            </div>
          </div>
          <div className="timeline-image">
            <img src={enterpriseServices} alt="Services" />
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
              <div className="benefit-icon">📊</div>
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
              <img src="https://i.pinimg.com/1200x/da/16/b3/da16b3e5f39e094ba72608c899c894df.jpg" alt="AWS" />
            </div>
            <div className="card-content">
              <h2>{t('card1Title')}</h2>
              <p>{t('card1Body')}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/1200x/fb/cc/84/fbcc84aad82ace6afd42bb16ab68705a.jpg" alt="Google" />
            </div>
            <div className="card-content">
              <h2>{t('card2Title')}</h2>
              <p>{t('card2Body')}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="https://i.pinimg.com/736x/01/53/f2/0153f26a7879185be32573c89f1ee2ae.jpg" alt="Microsoft" />
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
        <img src="https://i.pinimg.com/1200x/1a/5f/f8/1a5ff812d3896824a20ab807aec09435.jpg" alt="Background" className="background-img" />
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

export default Enterprise;
