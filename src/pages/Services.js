// src/pages/Services.js
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IT from "../images/IT.mp4";
import cloud from "../images/cloud1.jpg";
import cf from "../images/cf.jpg";
import cyber from "../images/cyber.jpg";
import data  from "../images/data ai.jpg";
import em from "../images/em.jpg";
import iis from "../images/iis.jpg";
import its6 from "../images/its6.jpg";
import process from "../images/its5.jpg";
import team from "../images/team.jpg";

import "./Services.css";
const Services = () => {
  const navigate = useNavigate();
      const handleGetStarted = (path) => {
        navigate(path); 
      }
  const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');

  const translations = useMemo(() => ({
    en: {
      heroTitle: 'Powerful Solutions, Proven Results.',
      heroDesc: 'Explore our wide range of digital services tailored to accelerate your business growth.',
      exploreServices: 'Explore our services',
      cloud: 'Cloud',
      customerFirst: 'Customer First',
      cybersecurity: 'Cybersecurity',
      dataAi: 'Data & AI',
      enterpriseManagement: 'Enterprise Management',
      intelligentIndustry: 'Intelligent Industry',
      whyChoose: 'Why Choose Our Services?',
      whyDesc: 'We provide tailored digital solutions with measurable results. \nOur team of experts ensures your success every step of the way.',
      feat1: 'Custom Web Development',
      feat2: 'SEO & Digital Marketing',
      feat3: 'Reliable 24/7 Support',
      feat4: 'Innovative UI/UX Design',
      processTitle: 'Our Process',
      step1: 'Strategy & Consulting',
      step2: 'Design Prototyping',
      step3: 'Development',
      step4: 'Testing & QA',
      step5: 'Deployment & Support',
      offeringsTitle: 'Our Offerings',
      off1Title: 'Enterprise Architecture',
      off1Desc: 'Align your technology strategies with your business goals. We analyze, identify gaps, and design a future-proof blueprint.',
      off2Title: 'Journey to the Cloud',
      off2Desc: 'Transition seamlessly to the cloud with scalable infrastructure, leveraging modern technologies and best practices.',
      off3Title: 'Data & Analytics',
      off3Desc: 'Unlock the power of data with collection, analysis, and visualization for smarter decision-making and growth.',
      off4Title: 'Digital Engineering',
      off4Desc: 'Combine technical expertise with innovation to design and implement digital solutions that enhance customer experiences.',
      off5Title: 'Data Governance',
      off5Desc: 'Ensure agile and effective governance with strategies, frameworks, and innovative tools that foster sustainable business growth',
      off6Title: 'Emerging & Future Tech',
      off6Desc: 'Leverage transformative innovations with tailored solutions that drive sustainable growth and future-ready business readiness.',
      timelineTitle: 'Our Proven IT Transformation Journey',
      tl1Title: 'Discovery & Consultation',
      tl1Desc: 'Understanding client goals and challenges for tailored solutions.',
      tl2Title: 'Strategy & Planning',
      tl2Desc: 'Designing scalable IT roadmaps aligned with business objectives.',
      tl3Title: 'Implementation',
      tl3Desc: 'Deploying cloud, cybersecurity, and automation solutions seamlessly.',
      tl4Title: 'Optimization',
      tl4Desc: 'Continuously enhancing performance, speed, and security.',
      tl5Title: 'Support & Growth',
      tl5Desc: '24/7 monitoring and scaling for future business expansion.',
      ctaTitle: 'Ready to Elevate Your IT?',
      ctaText: 'Whether you’re scaling your business, securing your data, or building new digital solutions—our experts are here to help you every step of the way. Let’s create technology that drives results.',
      ctaBtn: 'Start Your Project',
    },
    he: {
      heroTitle: 'פתרונות עוצמתיים, תוצאות מוכחות.',
      heroDesc: 'גלה מגוון שירותים דיגיטליים המותאמים להאיץ את צמיחת העסק שלך.',
      exploreServices: 'גלה את השירותים שלנו',
      cloud: 'ענן',
      customerFirst: 'לקוח תחילה',
      cybersecurity: 'אבטחת סייבר',
      dataAi: 'נתונים ובינה מלאכותית',
      enterpriseManagement: 'ניהול ארגוני',
      intelligentIndustry: 'תעשייה חכמה',
      whyChoose: 'למה לבחור בשירותים שלנו?',
      whyDesc: 'אנו מספקים פתרונות דיגיטליים מותאמים עם תוצאות מדידות. \nהצוות המומחה שלנו מבטיח את הצלחתך בכל שלב.',
      feat1: 'פיתוח אתרים מותאם',
      feat2: 'SEO ושיווק דיגיטלי',
      feat3: 'תמיכה אמינה 24/7',
      feat4: 'עיצוב UI/UX חדשני',
      processTitle: 'התהליך שלנו',
      step1: 'אסטרטגיה וייעוץ',
      step2: 'עיצוב ואבות-טיפוס',
      step3: 'פיתוח',
      step4: 'בדיקות ואיכות',
      step5: 'פריסה ותמיכה',
      offeringsTitle: 'ההיצע שלנו',
      off1Title: 'ארכיטקטורת ארגון',
      off1Desc: 'התאם את אסטרטגיות הטכנולוגיה ליעדי העסק. אנו מנתחים, מזהים פערים ומתכננים תוכנית עתידית.',
      off2Title: 'מסע אל הענן',
      off2Desc: 'מעבר חלק לענן עם תשתית ניתנת להרחבה תוך שימוש בטכנולוגיות ושיטות חדשות.',
      off3Title: 'נתונים וניתוח',
      off3Desc: 'נצל את כוח הנתונים לאיסוף, ניתוח והמחשה לקבלת החלטות חכמות וצמיחה.',
      off4Title: 'הנדסה דיגיטלית',
      off4Desc: 'שלב מומחיות טכנית עם חדשנות כדי לעצב וליישם פתרונות דיגיטליים המשפרים חוויות לקוח.',
      off5Title: 'ממשל נתונים',
      off5Desc: 'הבטח ממשל זריז ויעיל בעזרת אסטרטגיות, מסגרות וכלים חדשניים שמקדמים צמיחה בת-קיימא.',
      off6Title: 'טכנולוגיות מתקדמות ועתידיות',
      off6Desc: 'נצל חדשנות משבשת עם פתרונות מותאמים שמניעים צמיחה בת-קיימא ומוכנות לעתיד.',
      timelineTitle: 'מסע הטרנספורמציה ה-IT המוכח שלנו',
      tl1Title: 'איתור צרכים וייעוץ',
      tl1Desc: 'הבנת יעדי הלקוח והאתגרים לפתרונות מותאמים.',
      tl2Title: 'אסטרטגיה ותכנון',
      tl2Desc: 'תכנון מפת דרכים מדרגית המותאמת ליעדי העסק.',
      tl3Title: 'יישום',
      tl3Desc: 'פריסת פתרונות ענן, אבטחה ואוטומציה באופן חלק.',
      tl4Title: 'אופטימיזציה',
      tl4Desc: 'שיפור מתמשך של ביצועים, מהירות ואבטחה.',
      tl5Title: 'תמיכה וצמיחה',
      tl5Desc: 'ניטור 24/7 והרחבה לצמיחת העסק בעתיד.',
      ctaTitle: 'מוכנים להרים את ה-IT שלכם?',
      ctaText: 'בין אם אתם מצמיחים עסק, מאבטחים נתונים או בונים פתרונות דיגיטליים חדשים—הצוות שלנו כאן לעזור בכל שלב. בואו ניצור טכנולוגיה שמביאה תוצאות.',
      ctaBtn: 'התחל את הפרויקט שלך',
    },
    ar: {
      heroTitle: 'حلول قوية، نتائج مثبتة.',
      heroDesc: 'استكشف مجموعة خدماتنا الرقمية المصممة لتسريع نمو عملك.',
      exploreServices: 'استكشف خدماتنا',
      cloud: 'السحابة',
      customerFirst: 'العميل أولاً',
      cybersecurity: 'الأمن السيبراني',
      dataAi: 'البيانات والذكاء الاصطناعي',
      enterpriseManagement: 'إدارة المؤسسة',
      intelligentIndustry: 'الصناعة الذكية',
      whyChoose: 'لماذا تختار خدماتنا؟',
      whyDesc: 'نقدم حلولاً رقمية مخصصة بنتائج قابلة للقياس. \nيضمن فريق خبرائنا نجاحك في كل خطوة.',
      feat1: 'تطوير ويب مخصص',
      feat2: 'تحسين محركات البحث والتسويق الرقمي',
      feat3: 'دعم موثوق على مدار الساعة',
      feat4: 'تصميم واجهات وتجربة مستخدم مبتكرة',
      processTitle: 'عملية عملنا',
      step1: 'الاستراتيجية والاستشارات',
      step2: 'تصميم النماذج الأولية',
      step3: 'التطوير',
      step4: 'الاختبار وضمان الجودة',
      step5: 'النشر والدعم',
      offeringsTitle: 'عروضنا',
      off1Title: 'هندسة المؤسسة',
      off1Desc: 'مواءمة استراتيجيات التقنية مع أهداف عملك. نحلل ونحدد الفجوات ونصمم مخططًا قابلًا للمستقبل.',
      off2Title: 'الانتقال إلى السحابة',
      off2Desc: 'انتقال سلس إلى السحابة ببنية قابلة للتوسع باستخدام أحدث التقنيات والممارسات.',
      off3Title: 'البيانات والتحليلات',
      off3Desc: 'استفد من قوة البيانات في الجمع والتحليل والعرض لاتخاذ قرارات أذكى والنمو.',
      off4Title: 'الهندسة الرقمية',
      off4Desc: 'ادمج الخبرة التقنية مع الابتكار لتصميم وتنفيذ حلول رقمية تعزز تجارب العملاء.',
      off5Title: 'حوكمة البيانات',
      off5Desc: 'ضمان حوكمة مرنة وفعالة من خلال استراتيجيات وأطر وأدوات مبتكرة تعزز نمو الأعمال المستدام.',
      off6Title: 'التقنيات الناشئة والمستقبلية',
      off6Desc: 'استفد من الابتكارات التحويلية بحلول مخصصة تدفع النمو المستدام واستعداد الأعمال للمستقبل.',
      timelineTitle: 'رحلة تحويل تقنية المعلومات المثبتة لدينا',
      tl1Title: 'الاكتشاف والاستشارة',
      tl1Desc: 'فهم أهداف العميل وتحدياته لوضع حلول مخصصة.',
      tl2Title: 'الاستراتيجية والتخطيط',
      tl2Desc: 'تصميم خرائط طريق قابلة للتوسع ومتوافقة مع أهداف العمل.',
      tl3Title: 'التنفيذ',
      tl3Desc: 'نشر حلول السحابة والأمن والأتمتة بسلاسة.',
      tl4Title: 'التحسين',
      tl4Desc: 'تحسين الأداء والسرعة والأمان باستمرار.',
      tl5Title: 'الدعم والنمو',
      tl5Desc: 'مراقبة على مدار الساعة والتوسّع لنمو الأعمال مستقبلًا.',
      ctaTitle: 'جاهز لرفع مستوى تقنية المعلومات لديك؟',
      ctaText: 'سواء كنت توسّع عملك أو تحمي بياناتك أو تبني حلولًا رقمية جديدة—فريقنا هنا لمساعدتك في كل خطوة. لنبني تقنية تحقق النتائج.',
      ctaBtn: 'ابدأ مشروعك',
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
        <video
          className="hero-video"
          src={IT}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>{t('heroTitle')}</h1>
          <p>
            {t('heroDesc')}
          </p>
        </div>
      </section>










      <section className="explore-services-section">
        <h2 className="explore-services-title">{t('exploreServices')}</h2>

        <div className="explore-services-grid">

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src={cloud} alt="Cloud" />
            </div>
            <Link to="/cloud" className="explore-service-label">{t('cloud')}</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src={cf} alt="CustomerFirst" />
            </div>
            <Link to="/customerfirst" className="explore-service-label">{t('CustomerFirst')}</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src={cyber} alt="Cybersecurity" />
            </div>
            <Link to="/cybersecurity" className="explore-service-label">{t('cybersecurity')}</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src={data } alt="Data and AI" />
            </div>
            <Link to="/dataai" className="explore-service-label">{t('dataAi')}</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src={em} alt="EnterpriseManagement" />
            </div>
            <Link to="/enterprisemanagement" className="explore-service-label">{t('enterpriseManagement')}</Link>
          </div>

          <div className="explore-service-card">
            <div className="image-wrapper">
              <img src={iis} alt="Intelligent Industry" />
            </div>
            <Link to="/intelligentindustry" className="explore-service-label">{t('intelligentIndustry')}</Link>
          </div>

        </div>
      </section>
    












      <section className="features-section">
  <div className="features-content">
    <h2>{t('whyChoose')}</h2>
    <p>
      {t('whyDesc')}
    </p>
    <ul>
      <li>{t('feat1')}</li>
      <li>{t('feat2')}</li>
      <li>{t('feat3')}</li>
      <li>{t('feat4')}</li>
    </ul>
  </div>
  <div className="features-image">
    <img src={its6} alt="Features" />
  </div>
</section>











<section className="process-section">
  <div className="rotating-circle">
    <h3 className="center-text">{t('processTitle')}</h3>
    <div className="step step1">
      <strong>Step 1</strong><br />{t('step1')}
    </div>
    <div className="step step2">
      <strong>Step 2</strong><br />{t('step2')}
    </div>
    <div className="step step3">
      <strong>Step 3</strong><br />{t('step3')}
    </div>
    <div className="step step4">
      <strong>Step 4</strong><br />{t('step4')}
    </div>
    <div className="step step5">
      <strong>Step 5</strong><br />{t('step5')}
    </div>
  </div>

  <div className="process-image-wrapper">
    <img src={process} alt="Process Diagram" />
  </div>
</section>










<section className="offerings-section">
  <h2>{t('offeringsTitle')}</h2>
  <div className="offerings-grid">
    <div className="offering-item">
      <div className="offering-icon">💻</div>
      <h3 className="offering-title">{t('off1Title')}</h3>
      <p className="offering-desc">
        {t('off1Desc')}
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">☁️</div>
      <h3 className="offering-title">{t('off2Title')}</h3>
      <p className="offering-desc">
        {t('off2Desc')}
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">📊</div>
      <h3 className="offering-title">{t('off3Title')}</h3>
      <p className="offering-desc">
        {t('off3Desc')}
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">⚙️</div>
      <h3 className="offering-title">{t('off4Title')}</h3>
      <p className="offering-desc">
        {t('off4Desc')}
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">🔒</div>
      <h3 className="offering-title">{t('off5Title')}</h3>
      <p className="offering-desc">
        {t('off5Desc')}
      </p>
    </div>

    <div className="offering-item">
      <div className="offering-icon">🚀</div>
      <h3 className="offering-title">{t('off6Title')}</h3>
      <p className="offering-desc">
        {t('off6Desc')}
      </p>
    </div>
  </div>
</section>













<section className="timeline-section">
  <h2 className="timeline-title">{t('timelineTitle')}</h2>
  <div className="timeline">
    <div className="timeline-step">
      <div className="icon">💡</div>
      <div className="content">
        <h3>{t('tl1Title')}</h3>
        <p>{t('tl1Desc')}</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="icon">📝</div>
      <div className="content">
        <h3>{t('tl2Title')}</h3>
        <p>{t('tl2Desc')}</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="icon">⚙️</div>
      <div className="content">
        <h3>{t('tl3Title')}</h3>
        <p>{t('tl3Desc')}</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="icon">🚀</div>
      <div className="content">
        <h3>{t('tl4Title')}</h3>
        <p>{t('tl4Desc')}</p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="icon">🌐</div>
      <div className="content">
        <h3>{t('tl5Title')}</h3>
        <p>{t('tl5Desc')}</p>
      </div>
    </div>
  </div>
</section>














<section className="contact-cta">
  <div className="cta-container">
    <div className="cta-image">
      <img src={team} alt="IT Support Team" />
    </div>
    <div className="cta-content">
      <h2 className="cta-title">{t('ctaTitle')}</h2>
      <p className="cta-text">
        {t('ctaText')}
      </p>
      <button className="cta-btn"onClick={()=>handleGetStarted("/contact")}>{t('ctaBtn')}</button>
    </div>
  </div>
</section>

    </>
  );
};

export default Services;










