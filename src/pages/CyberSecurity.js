import './Cloud.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import cyber from "../images/cyber.jpg";
import cc from "../images/cc.jpg";
import ccc from "../images/ccc.jpg";




function CyberSecurity() {
    const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path); 
    }
  const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');

  const translations = useMemo(() => ({
    en: {
      heroTitle: 'Cyber Security',
      introTitle: 'Protect Your Business with Robust Cybersecurity Solutions',
      introBody: 'Our cybersecurity services help you safeguard your data, prevent threats, and ensure compliance whether you’re protecting networks, monitoring systems, or responding to incidents',
      feat1: '🛡️ Threat Protection — Defend your business against evolving cyber risks.',
      feat2: '🔐 Data Encryption — Secure sensitive information with advanced encryption.',
      feat3: '⚠️ Real-Time Monitoring — Detect and respond to threats instantly.',
      consultation: 'Get a CyberSecurity Consultation',
      servicesTitle: 'Our Cyber Security Services',
      servicesSubtitle: 'Shielding Your Data with Confidence',
      tl1Title: 'Cyber Threat Protection', tl1Desc: 'Stay ahead of cyber threats with proactive monitoring and advanced defense systems to keep your data safe and secure.',
      tl2Title: 'Data Privacy & Compliance', tl2Desc: 'Ensure your business meets industry standards and regulations with robust encryption and compliance measures.',
      tl3Title: 'Incident Response & Recovery', tl3Desc: 'Rapidly detect, respond to, and recover from security incidents to minimize disruption and protect your assets.',
      tl4Title: 'Secure Cloud-Native Solutions', tl4Desc: 'Design, deploy, and maintain cloud-native applications with built-in security to safeguard your business operations.',
      benefitsTitle: 'Why Choose Our CyberSecurity Services?',
      benefitsSubtitle: 'Discover the key advantages that make our solutions the perfect choice.',
      b1Title: 'High Performance', b1Desc: 'Fast, reliable, and scalable security solutions for your business needs.',
      b2Title: 'Secure & Compliant', b2Desc: 'Protect your data with enterprise-grade security and compliance.',
      b3Title: 'Flexible & Scalable', b3Desc: 'Easily scale protections as your business grows.',
      exploreTitle: 'Explore Our Cybersecurity Services',
      card1Title: 'Cybersecurity with AWS',
      card1Body: 'We offer advanced security solutions using AWS technology, designed to protect your data, ensure compliance, and defend against evolving cyber threats.',
      card2Title: 'Cybersecurity with Google',
      card2Body: 'Together, Stackly and Google deliver robust cybersecurity services that help organizations detect, respond, and recover from cyber incidents.',
      card3Title: 'Microsoft Cybersecurity',
      card3Body: 'In partnership with Microsoft, we provide comprehensive security tools and strategies to protect your infrastructure, secure identities, and manage risks.',
      contactTitle: 'Contact Us for Reliable IT Services',
      contactBody: 'We help organizations modernize their infrastructure, secure their systems, and drive digital transformation through tailored IT solutions. Let’s build your future together.',
      knowMore: 'Know more →',
    },
    he: {
      heroTitle: 'אבטחת סייבר',
      introTitle: 'הגן על העסק שלך עם פתרונות אבטחת סייבר מתקדמים',
      introBody: 'שירותי האבטחה שלנו מסייעים להגן על הנתונים, למנוע איומים ולהבטיח עמידה ברגולציה—בהגנת רשתות, ניטור מערכות או תגובה לאירועים.',
      feat1: '🛡️ הגנת איומים — הגן על העסק מאיומים מתפתחים.',
      feat2: '🔐 הצפנת נתונים — אבטח מידע רגיש עם הצפנה מתקדמת.',
      feat3: '⚠️ ניטור בזמן אמת — זיהוי ותגובה מיידית לאיומים.',
      consultation: 'קבע ייעוץ אבטחת סייבר',
      servicesTitle: 'שירותי אבטחת הסייבר שלנו',
      servicesSubtitle: 'מגנים על הנתונים שלך בביטחון',
      tl1Title: 'הגנת איומי סייבר', tl1Desc: 'הישאר צעד קדימה עם ניטור פרואקטיבי ומערכות הגנה מתקדמות.',
      tl2Title: 'פרטיות נתונים ותאימות', tl2Desc: 'עמוד בתקנים רגולטוריים בעזרת הצפנה ומדיניות תאימות.',
      tl3Title: 'תגובה והתאוששות מאירועים', tl3Desc: 'גלה, הגב והתאושש במהירות כדי לצמצם הפרעות ולהגן על הנכסים.',
      tl4Title: 'פתרונות מקור-ענן מאובטחים', tl4Desc: 'תכנן ופרוס יישומי מקור-ענן עם אבטחה מובנית.',
      benefitsTitle: 'למה לבחור בשירותי אבטחת הסייבר שלנו?',
      benefitsSubtitle: 'גלה את היתרונות שהופכים את הפתרונות שלנו לבחירה המושלמת.',
      b1Title: 'ביצועים גבוהים', b1Desc: 'פתרונות אבטחה מהירים, אמינים ומדרגיים לצרכי העסק.',
      b2Title: 'מאובטח ותואם', b2Desc: 'הגן על הנתונים עם אבטחה ארגונית ותאימות.',
      b3Title: 'גמיש ומדרגי', b3Desc: 'הרחב הגנות בקלות ככל שהעסק גדל.',
      exploreTitle: 'גלה את שירותי אבטחת הסייבר שלנו',
      card1Title: 'אבטחת סייבר עם AWS',
      card1Body: 'אנו מציעים פתרונות אבטחה מתקדמים המבוססים על AWS להגנת נתונים ועמידה ברגולציה.',
      card2Title: 'אבטחת סייבר עם Google',
      card2Body: 'ביחד, Stackly ו-Google מספקות שירותי אבטחה חזקים לזיהוי, תגובה והתאוששות מאירועי סייבר.',
      card3Title: 'אבטחת סייבר עם Microsoft',
      card3Body: 'בשותפות עם Microsoft אנו מספקים כלים ואסטרטגיות מקיפות להגנת תשתיות וזהויות.',
      contactTitle: 'צור קשר עבור שירותי IT אמינים',
      contactBody: 'אנו מסייעים לארגונים להמודרנ את התשתיות, לאבטח מערכות ולהוביל טרנספורמציה דיגיטלית.',
      knowMore: 'גלה עוד →',
    },
    ar: {
      heroTitle: 'الأمن السيبراني',
      introTitle: 'احمِ عملك بحلول أمن سيبراني قوية',
      introBody: 'تساعدك خدماتنا على حماية البيانات ومنع التهديدات وضمان الامتثال—سواء في حماية الشبكات أو مراقبة الأنظمة أو الاستجابة للحوادث.',
      feat1: '🛡️ حماية التهديدات — حماية عملك من المخاطر المتطورة.',
      feat2: '🔐 تشفير البيانات — تأمين المعلومات الحساسة بتشفير متقدم.',
      feat3: '⚠️ مراقبة فورية — كشف التهديدات والاستجابة لها فورًا.',
      consultation: 'احجز استشارة أمن سيبراني',
      servicesTitle: 'خدمات الأمن السيبراني لدينا',
      servicesSubtitle: 'نحمي بياناتك بثقة',
      tl1Title: 'حماية تهديدات السيبرانية', tl1Desc: 'ابقَ متقدمًا عبر المراقبة الاستباقية وأنظمة الدفاع المتقدمة.',
      tl2Title: 'خصوصية البيانات والامتثال', tl2Desc: 'الامتثال للمعايير عبر التشفير والتدابير القوية.',
      tl3Title: 'الاستجابة للحوادث والتعافي', tl3Desc: 'اكتشف واستجب وتعافَ بسرعة لتقليل التعطل وحماية الأصول.',
      tl4Title: 'حلول سحابية أصلية آمنة', tl4Desc: 'صمم ونفّذ وادعم تطبيقات سحابية أصلية بأمان مدمج.',
      benefitsTitle: 'لماذا تختار خدمات الأمن السيبراني لدينا؟',
      benefitsSubtitle: 'اكتشف المزايا التي تجعل حلولنا خيارًا مثاليًا.',
      b1Title: 'أداء عالٍ', b1Desc: 'حلول أمنية سريعة وموثوقة وقابلة للتوسع.',
      b2Title: 'آمن ومتوافق', b2Desc: 'حماية بياناتك بأمن مؤسسي وامتثال.',
      b3Title: 'مرن وقابل للتوسع', b3Desc: 'وسّع الحماية بسهولة مع نمو عملك.',
      exploreTitle: 'استكشف خدمات الأمن السيبراني لدينا',
      card1Title: 'الأمن السيبراني مع AWS',
      card1Body: 'نوفّر حلول أمن متقدمة باستخدام AWS لحماية البيانات وضمان الامتثال والتصدي للتهديدات.',
      card2Title: 'الأمن السيبراني مع Google',
      card2Body: 'معًا، تقدم Stackly وGoogle خدمات أمن قوية لاكتشاف الحوادث والاستجابة لها والتعافي منها.',
      card3Title: 'الأمن السيبراني من Microsoft',
      card3Body: 'بالشراكة مع Microsoft نقدم أدوات واستراتيجيات شاملة لحماية البنية التحتية والهويات وإدارة المخاطر.',
      contactTitle: 'اتصل بنا للحصول على خدمات تقنية معلومات موثوقة',
      contactBody: 'نساعد المؤسسات على تحديث بنيتها التحتية وتأمين أنظمتها ودفع التحول الرقمي.',
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
          src={cyber}
        
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
      <img src={cc} alt="Cloud Solutions" />
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
        <div className="timeline-icon">🛡️</div>
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
      <img src={ccc} alt="Cloud Services" />
    </div>
  </div>
</section>










<section className="cloud-benefits">
  <div className="cloud-benefits-container">
    <h2>{t('benefitsTitle')}</h2>
    <p className="benefits-subtitle">
      {t('benefitsSubtitle')}
    </p>

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












<section id="cloud-services">
  <h1>{t('exploreTitle')}</h1>
    <div className="cards">

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/1200x/3b/2e/e0/3b2ee05b0c76143fc40732e1c7d739bc.jpg" alt="Cloud with AWS" />
        </div>
        <div className="card-content">
          <h2>{t('card1Title')}</h2>
          <p>{t('card1Body')}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
        <img src="https://i.pinimg.com/736x/17/9c/39/179c391a03481ff955d5dcc6e32df00b.jpg" alt="Cloud with AWS" />

        </div>
        <div className="card-content">
          <h2>{t('card2Title')}</h2>
          <p>{t('card2Body')}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/35/f1/86/35f186369b74c1bfcedb4405ad243095.jpg" alt="Cloud with Microsoft" />
        </div>
        <div className="card-content">
          <h2>{t('card3Title')}</h2>
          <p>{t('card3Body')}</p>
        </div>
      </div>

    </div>
  
</section>









<section className="contact-section">
  <img src="https://i.pinimg.com/736x/0b/8a/48/0b8a48d4343a1eb1fd9581e1048f2f45.jpg" alt="Background" className="background-img" />
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

export default CyberSecurity;
