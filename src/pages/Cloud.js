import './Cloud.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react';
import cloud from "../images/cloud1.jpg";
import cloudsolutions from "../images/cloud solutions.jpg"
import cloudservices from "../images/cloud-services.jpg"


function Cloud() {
    const navigate = useNavigate();
        const handleGetStarted = (path) => {
          navigate(path); 
        }
    const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');

    const translations = useMemo(() => ({
      en: {
        heroTitle: 'Cloud',
        empowerTitle: 'Empower Your Business with Scalable Cloud Solutions',
        empowerBody: 'Our cloud services help you innovate faster, reduce costs, and stay secure — whether you’re migrating, optimizing, or building cloud-native applications.',
        feat1: '☁️ Seamless Migration – Move workloads with minimal disruption.',
        feat2: '🔒 Enterprise-Grade Security – Built-in compliance & monitoring.',
        feat3: '⚡ Scalable Performance – Auto-adjust resources to demand.',
        consultation: 'Get a Cloud Consultation',
        servicesTitle: 'Our Cloud Services',
        servicesSubtitle: 'From migration to optimization, we provide end-to-end cloud expertise.',
        tl1Title: 'Cloud Migration', tl1Desc: 'Seamless transfer of your workloads with minimal downtime.',
        tl2Title: 'Cloud Security', tl2Desc: 'Enterprise-grade security to protect data and meet compliance.',
        tl3Title: 'Optimization', tl3Desc: 'Reduce costs and improve performance with smart cloud strategies.',
        tl4Title: 'Cloud-Native Apps', tl4Desc: 'Build, deploy, and scale apps designed for the cloud.',
        benefitsTitle: 'Why Choose Our Cloud Services?',
        benefitsSubtitle: 'Discover the key advantages that make our cloud solutions the perfect choice.',
        b1Title: 'High Performance', b1Desc: 'Fast, reliable, and scalable cloud solutions for your business needs.',
        b2Title: 'Secure & Compliant', b2Desc: 'Protect your data with enterprise-grade security and compliance.',
        b3Title: 'Flexible & Scalable', b3Desc: 'Easily scale resources up or down as your business grows.',
        exploreTitle: 'Explore Our Cloud Services',
        awsTitle: 'Cloud with AWS',
        awsDesc: 'We have developed a range of market ready solutions featuring AWS technology that focuses on a cloud-first strategy that enables growth, innovation, cost-efficiency, and business model disruption.',
        gcpTitle: 'Cloud with Google',
        gcpDesc: 'Together, Stackly and AWS empower organizations to adapt to a rapidly evolving world, drive innovation for future growth, navigate economic challenges, and reinvent their business models.',
        azureTitle: 'Cloud with Microsoft',
        azureDesc: 'We work in partnership with Microsoft to help companies harness cloud technologies, turbo-charge them, and point them at individual business goals. So that organizations can go further and get there faster.',
        contactTitle: 'Contact Us for Reliable IT Services',
        contactBody: 'We help organizations modernize their infrastructure, secure their systems, and drive digital transformation through tailored IT solutions. Let’s build your future together.',
        knowMore: 'Know more →',
      },
      he: {
        heroTitle: 'ענן',
        empowerTitle: 'העצם את העסק שלך עם פתרונות ענן מדרגיים',
        empowerBody: 'שירותי הענן שלנו מסייעים לחדש מהר יותר, להפחית עלויות ולהישאר מאובטחים — בין אם בהגירה, באופטימיזציה או בבניית יישומי מקור-ענן.',
        feat1: '☁️ הגירה חלקה – העברת עומסים עם מינימום הפרעה.',
        feat2: '🔒 אבטחה ארגונית – תאימות וניטור מובנים.',
        feat3: '⚡ ביצועים מדרגיים – התאמת משאבים אוטומטית לביקוש.',
        consultation: 'קבע ייעוץ ענן',
        servicesTitle: 'שירותי הענן שלנו',
        servicesSubtitle: 'מהגירה ועד אופטימיזציה, אנו מספקים מומחיות ענן מקצה לקצה.',
        tl1Title: 'הגירת ענן', tl1Desc: 'העברה חלקה של עומסים עם זמן השבתה מינימלי.',
        tl2Title: 'אבטחת ענן', tl2Desc: 'אבטחה ארגונית להגנת נתונים ועמידה ברגולציה.',
        tl3Title: 'אופטימיזציה', tl3Desc: 'הפחתת עלויות ושיפור ביצועים עם אסטרטגיות ענן חכמות.',
        tl4Title: 'יישומי מקור-ענן', tl4Desc: 'בניית, פריסה והרחבת יישומים המיועדים לענן.',
        benefitsTitle: 'למה לבחור בשירותי הענן שלנו?',
        benefitsSubtitle: 'גלה את היתרונות המרכזיים שהופכים את פתרונות הענן שלנו לבחירה המושלמת.',
        b1Title: 'ביצועים גבוהים', b1Desc: 'פתרונות ענן מהירים, אמינים ומדרגיים לצרכי העסק שלך.',
        b2Title: 'מאובטח ותואם', b2Desc: 'הגן על הנתונים עם אבטחה ארגונית ותאימות.',
        b3Title: 'גמיש ומדרגי', b3Desc: 'הרחב או צמצם משאבים בקלות ככל שהעסק גדל.',
        exploreTitle: 'גלה את שירותי הענן שלנו',
        awsTitle: 'ענן עם AWS',
        awsDesc: 'פיתחנו מגוון פתרונות מוכנים לשוק עם טכנולוגיית AWS המתמקדים באסטרטגיית ענן-קודם לצמיחה, חדשנות ויעילות.',
        gcpTitle: 'ענן עם Google',
        gcpDesc: 'ביחד, Stackly ו-AWS מאפשרות לארגונים להסתגל, לחדש ולהתמודד עם אתגרים כלכליים.',
        azureTitle: 'ענן עם Microsoft',
        azureDesc: 'אנו עובדים עם Microsoft כדי לרתום טכנולוגיות ענן ולהתאימן ליעדי העסק להאיץ תוצאות.',
        contactTitle: 'צור קשר עבור שירותי IT אמינים',
        contactBody: 'אנו מסייעים לארגונים להמודרנ את התשתיות, לאבטח מערכות ולהוביל טרנספורמציה דיגיטלית עם פתרונות מותאמים. בואו נבנה את העתיד יחד.',
        knowMore: 'גלה עוד →',
      },
      ar: {
        heroTitle: 'السحابة',
        empowerTitle: 'عزّز عملك بحلول سحابية قابلة للتوسع',
        empowerBody: 'تساعدك خدماتنا السحابية على الابتكار بشكل أسرع وتقليل التكاليف والبقاء آمنًا—سواء في الترحيل أو التحسين أو بناء تطبيقات سحابية أصلية.',
        feat1: '☁️ ترحيل سلس — نقل الأحمال بأقل قدر من التعطيل.',
        feat2: '🔒 أمان على مستوى المؤسسات — امتثال ومراقبة مدمجان.',
        feat3: '⚡ أداء قابل للتوسع — ضبط الموارد تلقائيًا حسب الطلب.',
        consultation: 'احجز استشارة سحابية',
        servicesTitle: 'خدمات السحابة لدينا',
        servicesSubtitle: 'من الترحيل إلى التحسين، نقدّم خبرة سحابية شاملة.',
        tl1Title: 'ترحيل السحابة', tl1Desc: 'نقل سلس لأحمالك مع وقت تعطل منخفض.',
        tl2Title: 'أمان السحابة', tl2Desc: 'أمان مؤسسي لحماية البيانات والامتثال.',
        tl3Title: 'التحسين', tl3Desc: 'تقليل التكاليف وتحسين الأداء باستراتيجيات سحابية ذكية.',
        tl4Title: 'تطبيقات سحابية أصلية', tl4Desc: 'بناء ونشر وتوسيع تطبيقات مصممة للسحابة.',
        benefitsTitle: 'لماذا تختار خدمات السحابة لدينا؟',
        benefitsSubtitle: 'اكتشف المزايا الأساسية التي تجعل حلولنا السحابية الخيار الأمثل.',
        b1Title: 'أداء عالٍ', b1Desc: 'حلول سحابية سريعة وموثوقة وقابلة للتوسع لاحتياجات عملك.',
        b2Title: 'آمن ومتوافق', b2Desc: 'حماية بياناتك بأمن مؤسسي وامتثال.',
        b3Title: 'مرن وقابل للتوسع', b3Desc: 'قم بتوسيع الموارد أو تقليلها بسهولة مع نمو عملك.',
        exploreTitle: 'استكشف خدمات السحابة لدينا',
        awsTitle: 'السحابة مع AWS',
        awsDesc: 'طورنا حلولًا جاهزة للسوق تعتمد على AWS تركز على استراتيجية سحابية أولًا للنمو والابتكار والكفاءة.',
        gcpTitle: 'السحابة مع Google',
        gcpDesc: 'معًا، تمكّن Stackly وAWS المؤسسات من التكيّف والابتكار وإعادة ابتكار نماذج الأعمال.',
        azureTitle: 'السحابة مع Microsoft',
        azureDesc: 'نعمل مع Microsoft لمساعدة الشركات على تسخير تقنيات السحابة وتسريع تحقيق الأهداف.',
        contactTitle: 'اتصل بنا للحصول على خدمات تقنية معلومات موثوقة',
        contactBody: 'نساعد المؤسسات على تحديث بنيتها التحتية وتأمين أنظمتها ودفع التحول الرقمي عبر حلول مخصصة. فلنبنِ مستقبلك معًا.',
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
          src={cloud}
        
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
      <h2>{t('empowerTitle')}</h2>
      <p>
        {t('empowerBody')}
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
      <img src={cloudsolutions} alt="Cloud Solutions" />
    </div>
  </div>
</section>















<section className="cloud-services-timeline">
    <h2>{t('servicesTitle')}</h2>
      <p className="cloud-subtitle">
        {t('servicesSubtitle')}
      </p>

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
      <img src={cloudservices} alt="Cloud Services" />
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
          <img src="https://i.pinimg.com/736x/23/11/2e/23112ee11a68a60344adad9250589d5b.jpg" alt="Cloud with AWS" />
        </div>
        <div className="card-content">
          <h2>{t('awsTitle')}</h2>
          <p>{t('awsDesc')}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
        <img src="https://i.pinimg.com/1200x/49/16/c0/4916c031725e347a74d9c7c307cc2756.jpg" alt="Cloud with AWS" />

        </div>
        <div className="card-content">
          <h2>{t('gcpTitle')}</h2>
          <p>{t('gcpDesc')}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/60/7e/dd/607edd18f483e204cc8693ce36e26975.jpg" alt="Cloud with Microsoft" />
        </div>
        <div className="card-content">
          <h2>{t('azureTitle')}</h2>
          <p>{t('azureDesc')}</p>
        </div>
      </div>

    </div>
  
</section>









<section className="contact-section">
  <img src="https://i.pinimg.com/1200x/85/1b/74/851b74e4e5e8f285409f567c86a377dc.jpg" alt="Background" className="background-img" />
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

export default Cloud;
