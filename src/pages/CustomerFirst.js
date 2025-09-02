import './Cloud.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import cf from "../images/cf.jpg";
import css from "../images/serv.jpg";



function CustomerFirst() {
    const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path); 
    }
  const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');

  const translations = useMemo(() => ({
    en: {
      heroTitle: 'Customer First',
      introTitle: 'IT Services Tailored to Your Unique Needs',
      introBody: 'We help you innovate faster, cut costs, and stay secure — whether you’re migrating to the cloud, optimizing your current setup, or building cloud-native applications tailored to your needs.',
      feat1: '☁️ Seamless Migration – Move workloads with minimal disruption.',
      feat2: '🔒 Enterprise-Grade Security – Built-in compliance & monitoring.',
      feat3: '⚡ Scalable Performance – Auto-adjust resources to demand.',
      consultation: 'Get a Consultation',
      servicesTitle: 'Our Customer Services',
      servicesSubtitle: 'Get responsive, reliable support from experts who are committed to your success.',
      tl1Title: 'Reassuring & Practical', tl1Desc: 'Customer Support That’s Always There for You.',
      tl2Title: 'Friendly & Empowering', tl2Desc: 'Real People. Real Help. Right When You Need It.',
      tl3Title: 'Outcome-Focused', tl3Desc: 'Your Success Is Our Priority',
      tl4Title: 'Trust-Built & Proactive', tl4Desc: 'Support You Can Rely On, Before You Even Ask.',
      benefitsTitle: 'Why Our Customer Service Works for You?',
      benefitsSubtitle: 'Get real help from real experts—fast, friendly, and focused on your success',
      b1Title: 'High Performance', b1Desc: 'Fast, reliable, and scalable cloud solutions for your business needs.',
      b2Title: 'Secure & Compliant', b2Desc: 'Protect your data with enterprise-grade security and compliance.',
      b3Title: 'Flexible & Scalable', b3Desc: 'Easily scale resources up or down as your business grows.',
      exploreTitle: 'Explore Our Client Services',
      card1Title: 'Support with Speed',
      card1Body: 'We deliver responsive, 24/7 support that gets you the help you need fast. From the moment you reach out, our experts are working to resolve your issue with urgency and care.',
      card2Title: 'Trusted Support',
      card2Body: 'We listen first so we can offer support that fits your exact situation. Whether it’s a quick fix or complex issue, our team is here with clear answers and patient guidance.',
      card3Title: 'Consistent Success',
      card3Body: 'Our goal isn’t just to close tickets—it’s to move your business forward. We focus on long-term success with proactive solutions and a human-first approach.',
      contactTitle: 'Contact Us for Reliable IT Services',
      contactBody: 'We help organizations modernize their infrastructure, secure their systems, and drive digital transformation through tailored IT solutions. Let’s build your future together.',
      knowMore: 'Know more →',
    },
    he: {
      heroTitle: 'לקוח תחילה',
      introTitle: 'שירותי IT מותאמים לצרכים הייחודיים שלך',
      introBody: 'אנחנו עוזרים לחדש מהר יותר, להפחית עלויות ולהישאר מאובטחים—בין אם בהגירה לענן, אופטימיזציה או בניית יישומי מקור-ענן המותאמים לצרכיך.',
      feat1: '☁️ הגירה חלקה – העברת עומסים עם מינימום הפרעה.',
      feat2: '🔒 אבטחה ארגונית – תאימות וניטור מובנים.',
      feat3: '⚡ ביצועים מדרגיים – התאמת משאבים אוטומטית לביקוש.',
      consultation: 'קבע ייעוץ',
      servicesTitle: 'שירותי הלקוחות שלנו',
      servicesSubtitle: 'קבל תמיכה מהירה ומהימנה ממומחים המחויבים להצלחתך.',
      tl1Title: 'מרגיע ומעשי', tl1Desc: 'תמיכת לקוחות שנמצאת שם תמיד בשבילך.',
      tl2Title: 'ידידותי ומעצים', tl2Desc: 'אנשים אמיתיים. עזרה אמיתית. בדיוק כשצריך.',
      tl3Title: 'ממוקד תוצאות', tl3Desc: 'ההצלחה שלך היא בראש סדר העדיפויות שלנו',
      tl4Title: 'מבוסס אמון ופרואקטיבי', tl4Desc: 'תמיכה שאפשר לסמוך עליה, עוד לפני שתבקש.',
      benefitsTitle: 'למה שירות הלקוחות שלנו עובד בשבילך?',
      benefitsSubtitle: 'עזרה אמיתית ממומחים אמיתיים—מהיר, ידידותי וממוקד הצלחה',
      b1Title: 'ביצועים גבוהים', b1Desc: 'פתרונות ענן מהירים, אמינים ומדרגיים לצרכי העסק שלך.',
      b2Title: 'מאובטח ותואם', b2Desc: 'הגן על הנתונים עם אבטחה ארגונית ותאימות.',
      b3Title: 'גמיש ומדרגי', b3Desc: 'הרחב או צמצם משאבים בקלות ככל שהעסק גדל.',
      exploreTitle: 'גלה את שירותי הלקוחות שלנו',
      card1Title: 'תמיכה במהירות',
      card1Body: 'אנו מספקים תמיכה זמינה 24/7 שמעניקה עזרה במהירות, עם דחיפות ואכפתיות.',
      card2Title: 'תמיכה מהימנה',
      card2Body: 'אנחנו מקשיבים קודם כדי להציע תמיכה שמתאימה בדיוק למצבך—מתיקון מהיר ועד בעיה מורכבת.',
      card3Title: 'הצלחה עקבית',
      card3Body: 'המטרה שלנו אינה רק לסגור פניות אלא לקדם את העסק קדימה עם פתרונות פרואקטיביים וגישה אנושית.',
      contactTitle: 'צור קשר עבור שירותי IT אמינים',
      contactBody: 'אנו מסייעים לארגונים להמודרנ את התשתיות, לאבטח מערכות ולהוביל טרנספורמציה דיגיטלית עם פתרונות מותאמים. בואו נבנה את העתיד יחד.',
      knowMore: 'גלה עוד →',
    },
    ar: {
      heroTitle: 'العميل أولاً',
      introTitle: 'خدمات تقنية معلومات مخصصة لاحتياجاتك',
      introBody: 'نساعدك على الابتكار بسرعة وخفض التكاليف والبقاء آمنًا—سواء في الترحيل إلى السحابة أو تحسين الإعداد الحالي أو بناء تطبيقات سحابية أصلية مخصصة.',
      feat1: '☁️ ترحيل سلس — نقل الأحمال بأقل قدر من التعطيل.',
      feat2: '🔒 أمان على مستوى المؤسسات — امتثال ومراقبة مدمجان.',
      feat3: '⚡ أداء قابل للتوسع — ضبط الموارد تلقائيًا حسب الطلب.',
      consultation: 'احجز استشارة',
      servicesTitle: 'خدمات العملاء لدينا',
      servicesSubtitle: 'احصل على دعم سريع وموثوق من خبراء ملتزمين بنجاحك.',
      tl1Title: 'مطمئن وعملي', tl1Desc: 'دعم عملاء دائمًا إلى جانبك.',
      tl2Title: 'ودود ومُمكِّن', tl2Desc: 'أشخاص حقيقيون. مساعدة حقيقية. في الوقت المناسب.',
      tl3Title: 'مُركَّز على النتائج', tl3Desc: 'نجاحك هو أولويتنا.',
      tl4Title: 'ثقة واستباقية', tl4Desc: 'دعم يمكنك الاعتماد عليه قبل أن تطلب.',
      benefitsTitle: 'لماذا ينجح دعم العملاء لدينا؟',
      benefitsSubtitle: 'مساعدة حقيقية من خبراء حقيقيين—سريعة وودودة ومركّزة على النجاح',
      b1Title: 'أداء عالٍ', b1Desc: 'حلول سحابية سريعة وموثوقة وقابلة للتوسع لاحتياجات عملك.',
      b2Title: 'آمن ومتوافق', b2Desc: 'حماية بياناتك بأمن مؤسسي وامتثال.',
      b3Title: 'مرن وقابل للتوسع', b3Desc: 'وسّع الموارد أو قلّصها بسهولة مع نمو عملك.',
      exploreTitle: 'استكشف خدمات العملاء لدينا',
      card1Title: 'دعم سريع',
      card1Body: 'نقدّم دعمًا متاحًا على مدار الساعة يقدّم لك المساعدة بسرعة، مع اهتمام وجدية.',
      card2Title: 'دعم موثوق',
      card2Body: 'نستمع أولًا لنقدّم دعمًا يناسب حالتك تمامًا—من إصلاح سريع إلى مشكلة معقدة.',
      card3Title: 'نجاح مستمر',
      card3Body: 'هدفنا ليس إغلاق التذاكر فقط بل دفع عملك قدمًا بحلول استباقية ونهج إنساني.',
      contactTitle: 'اتصل بنا للحصول على خدمات تقنية معلومات موثوقة',
      contactBody: 'نساعد المؤسسات على تحديث البنية التحتية وتأمين الأنظمة ودفع التحول الرقمي عبر حلول مخصصة. فلنبنِ مستقبلك معًا.',
      knowMore: 'اعرف المزيد →',
    },
  }), []);

  const t = (key) => {
    const lang = translations[language] || translations.en;
    return lang[key] || key;
  };

  useEffect(() => {
    const handler = (e) => {
      const next = e?.detail?.language || localStorage.getItem('app_language') || 'en';
      setLanguage(next);
    };
    window.addEventListener('languageChanged', handler);
    return () => window.removeEventListener('languageChanged', handler);
  }, []);
  return (
    <>
      <section className="hero">
        {/* Background video */}
        <img
          className="hero-video"
          src={cf}
        
        ></img>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>{t('heroTitle')}</h1>
        
        </div>
      </section>











<section className="cloud-section">
  <div className="cloud-container">
    {/* Left Content */}
    <div className="cloud-content">
      <h2>{t('introTitle')}</h2>
      <p>
        {t('introBody')}
      </p>

      <ul className="cloud-features">
        <li><span>{t('feat1')}</span></li>
        <li><span>{t('feat2')}</span></li>
        <li><span>{t('feat3')}</span></li>
      </ul>

      <button className="cloud-btn"onClick={()=>handleGetStarted("/contact")}>{t('consultation')}</button>
    </div>

    {/* Right Side Image */}
    <div className="cloud-image">
      <img src="https://i.pinimg.com/1200x/54/a5/13/54a513e042059fed8d20f090f3ef10c1.jpg" alt="Cloud Solutions" />
    </div>
  </div>
</section>















<section className="cloud-services-timeline">
    <h2>{t('servicesTitle')}</h2>
      <p className="cloud-subtitle">
{t('servicesSubtitle')}      </p>

  <div className="cloud-timeline-container">
    {/* Timeline and Image */}
    <div className="timeline">
      
      <div className="timeline-item">
        <div className="timeline-icon">🚀</div>
        <div className="timeline-content">
          <h3>{t('tl1Title')}</h3>
          <p>{t('tl1Desc')}</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">🔒</div>
        <div className="timeline-content">
          <h3>{t('tl2Title')}</h3>
          <p>{t('tl2Desc')}
</p>
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
        <div className="timeline-icon">☁️</div>
        <div className="timeline-content">
          <h3>{t('tl4Title')}</h3>
          <p>{t('tl4Desc')}</p>
        </div>
      </div>
    </div>

    <div className="timeline-image">
      <img src={css} alt="Cloud Services" />
    </div>
  </div>
</section>










<section className="cloud-benefits">
  <div className="cloud-benefits-container">
    <h2>{t('benefitsTitle')}</h2>
    <p className="benefits-subtitle">
{t('benefitsSubtitle')}    </p>

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












<section id="cloud-services">
  <h1>{t('exploreTitle')}</h1>
    <div className="cards">

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/09/a6/18/09a6182483da40be6d05ab61b20b5899.jpg" alt="Cloud with AWS" />
        </div>
        <div className="card-content">
          <h2>{t('card1Title')}</h2>
          <p>{t('card1Body')}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
        <img src="https://i.pinimg.com/736x/87/10/14/871014e67bd034d06a296ef2f35634f6.jpg" alt="Cloud with AWS" />

        </div>
        <div className="card-content">
          <h2>{t('card2Title')}</h2>
          <p>{t('card2Body')}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/21/37/0c/21370c28e2ae8c449054afcda84ffe13.jpg" alt="Cloud with Microsoft" />
        </div>
        <div className="card-content">
          <h2>{t('card3Title')}</h2>
          <p>{t('card3Body')}</p>
        </div>
      </div>

    </div>
  
</section>









<section className="contact-section">
  <img src="https://i.pinimg.com/1200x/e6/cd/f6/e6cdf68ad3b4789a6e0ff556d63b9bbe.jpg" alt="Background" className="background-img" />
  <div className="contact-content">
    <h2>{t('contactTitle')}</h2>
    <p>
      {t('contactBody')}
    </p>
    <a href="#contact" className="cta-button"onClick={()=>handleGetStarted("/contact")}>{t('knowMore')}</a>
  </div>
</section>









    </>
  );
}

export default CustomerFirst;
