import React, { useEffect, useMemo, useState } from 'react';
import './AboutUs.css';
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";

import vid from "../images/vid.mp4";
import img2 from "../images/img2.jpg";
import its3 from "../images/its3.jpg";
import its4 from "../images/its4.jpg";
import men1 from "../images/men1.jpg";
import men2 from "../images/men2.jpg";
import lady from "../images/lady.jpg";


function AboutUs() {
  const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');

  const translations = useMemo(() => ({
    en: {
      heroTitle: 'About Us',
      heroSubtitle: 'Empowering Digital Futures with Scalable IT Solutions.',
      whoWeAreTitle: 'Who We Are',
      whoWeAreBody: 'We are a trusted IT services provider focused on delivering innovative and scalable digital solutions. With deep expertise in software development, AI integration, cloud transformation, and business automation, we empower organizations to achieve digital excellence. Our collaborative approach and commitment to quality drive impactful outcomes for enterprises worldwide.',
      missionLabel: 'Our Mission',
      missionTitle: 'Delivering innovative IT solutions that drive business success',
      missionBody: 'We are committed to empowering businesses through scalable and secure IT services, including software development, cloud transformation, and digital automation. Our mission is to help organizations achieve operational excellence and foster growth with cutting-edge technology.',
      visionLabel: 'Our Vision',
      visionTitle: 'Shaping the Future of Businesses Through Technology',
      visionBody: 'Our vision is to become a global leader in IT services by driving digital transformation for organizations across industries. We aim to create intelligent, agile, and sustainable solutions that enhance productivity, foster innovation, and empower businesses to thrive in a connected digital world.',
      expertTitle: 'Meet Our Expert Team',
      expertSubtitle: 'Trusted professionals committed to finding your dream home.',
      expert1Pos: 'Cloud Migration Specialist @ Stackly',
      expert1Text: "John's tech expertise and commitment made our system migration seamless and hassle-free. He ensured clear communication at every step.",
      expert2Pos: 'Technical Project Manager @ Stackly',
      expert2Text: 'Sarah took the time to truly understand our business needs and delivered a custom solution that fit our infrastructure perfectly.',
      expert3Pos: 'Solutions Architect @ Stackly',
      expert3Text: 'Michael’s tech insights and system design helped us optimize performance and cut cloud costs by 40% in a competitive SaaS market.',
      clientSuccessTitle: 'Client Success: Before & After',
      before: 'Before:',
      after: 'After:',
      t1Before: 'We were constantly fighting outages, ballooning costs, and poor backend integration.',
      t1After: 'In just 6 weeks, the team re-architected our system. Downtime is now near zero, and the cost savings speak for themselves. Truly transformative.',
      t1Client: '– Derek K., Head of Engineering, FinTechPro',
      t2Before: 'Our deployment cycles were slow, error-prone, and lacked automation, which cost us valuable time.',
      t2After: 'After implementing CI/CD pipelines and container orchestration, deployments became 80% faster and fully automated.',
      t2Client: '– Priya S., VP of Technology, CloudNova',
      expert1Name: 'John Doe',
      expert2Name: 'Sarah Smith',
      expert3Name: 'Michael Brown',
    },
    he: {
      heroTitle: 'עלינו',
      heroSubtitle: 'מקדמים עתיד דיגיטלי עם פתרונות IT ניתנים להרחבה.',
      whoWeAreTitle: 'מי אנחנו',
      whoWeAreBody: 'אנו ספקית שירותי IT אמינה המתמקדת במתן פתרונות דיגיטליים חדשניים ומדרגיים. עם מומחיות עמוקה בפיתוח תוכנה, שילוב בינה מלאכותית, טרנספורמציית ענן ואוטומציה עסקית, אנו מאפשרים לארגונים להגיע למצוינות דיגיטלית. הגישה השיתופית והמחויבות לאיכות מניעות תוצאות בעלות השפעה ברחבי העולם.',
      missionLabel: 'המשימה שלנו',
      missionTitle: 'מספקים פתרונות IT חדשניים שמקדמים הצלחה עסקית',
      missionBody: 'אנו מחויבים להעצים עסקים באמצעות שירותי IT מאובטחים ומדרגיים, כולל פיתוח תוכנה, טרנספורמציית ענן ואוטומציה דיגיטלית. מטרתנו לסייע לארגונים להשיג מצוינות תפעולית ולקדם צמיחה בטכנולוגיה מתקדמת.',
      visionLabel: 'החזון שלנו',
      visionTitle: 'מעצבים את עתיד העסקים באמצעות טכנולוגיה',
      visionBody: 'חזוננו הוא להיות מובילים עולמיים בשירותי IT באמצעות קידום טרנספורמציה דיגיטלית בארגונים מכל התעשיות. אנו שואפים ליצור פתרונות חכמים, זריזים ובני קיימא שמגבירים פרודוקטיביות ומקדמים חדשנות.',
      expertTitle: 'הכירו את צוות המומחים שלנו',
      expertSubtitle: 'מקצוענים אמינים המחויבים למציאת הבית המושלם שלך.',
      expert1Pos: 'מומחה הגירת ענן @ Stackly',
      expert1Text: 'הידע והמחויבות של ג׳ון הפכו את הגירת המערכת שלנו לחלקה וללא טרחה. הוא דאג לתקשורת ברורה בכל שלב.',
      expert2Pos: 'מנהלת פרויקטים טכנולוגית @ Stackly',
      expert2Text: 'שרה הקדישה זמן להבין את הצרכים העסקיים שלנו וה entregה פתרון מותאם שהתאים לתשתית שלנו באופן מושלם.',
      expert3Pos: 'ארכיטקט פתרונות @ Stackly',
      expert3Text: 'התובנות והעיצוב המערכתי של מייקל סייעו לנו לייעל ביצועים ולהפחית עלויות ענן ב-40% בשוק SaaS תחרותי.',
      clientSuccessTitle: 'הצלחה ללקוח: לפני ואחרי',
      before: 'לפני:',
      after: 'אחרי:',
      t1Before: 'נאבקנו בתקלות תכופות, עלויות עולות ואינטגרציית בק-אנד בעייתית.',
      t1After: 'תוך שישה שבועות המערכת עוצבה מחדש. זמן ההשבתה כמעט אפס, והחיסכון בעלויות מדבר בעד עצמו. שינוי אמיתי.',
      t1Client: '– דרק ק., ראש הנדסה, FinTechPro',
      t2Before: 'מחזורי הפריסה היו איטיים ומועדים לשגיאות וחסרי אוטומציה, מה שעלותו לנו זמן יקר.',
      t2After: 'לאחר יישום CI/CD ותזמור קונטיינרים, הפריסות הפכו למהירות ב-80% ואוטומטיות לחלוטין.',
      t2Client: '– פריה ס., סמנכ״לית טכנולוגיה, CloudNova',
      expert1Name: 'ג׳ון דו',
      expert2Name: 'שרה סמית',
      expert3Name: 'מייקל בראון',
    },
    ar: {
      heroTitle: 'من نحن',
      heroSubtitle: 'نمكّن المستقبل الرقمي بحلول تقنية معلومات قابلة للتوسع.',
      whoWeAreTitle: 'من نكون',
      whoWeAreBody: 'نحن مزود موثوق لخدمات تقنية المعلومات نركز على تقديم حلول رقمية مبتكرة وقابلة للتوسع. بخبرة عميقة في تطوير البرمجيات ودمج الذكاء الاصطناعي وتحويل السحابة وأتمتة الأعمال، نُمكّن المؤسسات من تحقيق التميز الرقمي. نهجنا التعاوني والتزامنا بالجودة يدفعان نتائج مؤثرة حول العالم.',
      missionLabel: 'مهمتنا',
      missionTitle: 'تقديم حلول تقنية معلومات مبتكرة تدفع النجاح التجاري',
      missionBody: 'نلتزم بتمكين الأعمال عبر خدمات تقنية معلومات آمنة وقابلة للتوسع، بما في ذلك تطوير البرمجيات وتحويل السحابة والأتمتة الرقمية. هدفنا مساعدة المؤسسات على تحقيق التميز التشغيلي والنمو باستخدام التكنولوجيا المتقدمة.',
      visionLabel: 'رؤيتنا',
      visionTitle: 'صياغة مستقبل الأعمال عبر التكنولوجيا',
      visionBody: 'رؤيتنا أن نصبح قائدًا عالميًا في خدمات تقنية المعلومات من خلال قيادة التحول الرقمي للمؤسسات عبر القطاعات. نسعى لابتكار حلول ذكية ورشيقة ومستدامة تعزز الإنتاجية وتدعم الابتكار وتمكّن الأعمال من الازدهار.',
      expertTitle: 'تعرف على فريق الخبراء لدينا',
      expertSubtitle: 'محترفون موثوقون ملتزمون بتحقيق أهدافك.',
      expert1Pos: 'متخصص ترحيل إلى السحابة @ Stackly',
      expert1Text: 'خبرة جون التقنية والتزامه جعلا ترحيل نظامنا سلسًا وخاليًا من المتاعب. ضمن تواصلًا واضحًا في كل خطوة.',
      expert2Pos: 'مديرة مشاريع تقنية @ Stackly',
      expert2Text: 'خصصت سارة الوقت لفهم احتياجات أعمالنا وقدمت حلًا مخصصًا مناسبًا لبنيتنا التحتية تمامًا.',
      expert3Pos: 'مهندس حلول @ Stackly',
      expert3Text: 'ساعدتنا رؤى مايكل التقنية وتصميم النظام على تحسين الأداء وتقليل تكاليف السحابة بنسبة 40% في سوق SaaS التنافسي.',
      clientSuccessTitle: 'نجاح العملاء: قبل وبعد',
      before: 'قبل:',
      after: 'بعد:',
      t1Before: 'كنا نعاني من انقطاعات مستمرة وتكاليف متزايدة وضعف تكامل backend.',
      t1After: 'في 6 أسابيع فقط، أعاد الفريق تصميم نظامنا. أصبح التوقف شبه معدوم، والتوفير في التكاليف واضح. تغيير جذري.',
      t1Client: '– ديريك ك., رئيس الهندسة، FinTechPro',
      t2Before: 'كانت دورات النشر بطيئة ومعرضة للأخطاء وتفتقر إلى الأتمتة، مما كلفنا وقتًا ثمينًا.',
      t2After: 'بعد تنفيذ خطوط CI/CD وتنظيم الحاويات، أصبحت عمليات النشر أسرع بنسبة 80% ومؤتمتة بالكامل.',
      t2Client: '– بريا س., نائبة الرئيس للتكنولوجيا، CloudNova',
      expert1Name: 'جون دو',
      expert2Name: 'سارة سميث',
      expert3Name: 'مايكل براون',
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
          src={vid}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay content */}
        <div className="hero-overlay">
          <h1>{t('heroTitle')}</h1>
          <p>
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      




      <section className="about-section">
      <div className="about-content">
        <h2>{t('whoWeAreTitle')}</h2>
        <p>
          {t('whoWeAreBody')}
        </p>

      </div>
      <div className="about-image">
        <img src={img2} alt="Team meeting" />
      </div>
    </section>








<section className="mv-section">
  <div className="mv-container">
    {/* Mission Block */}
    <div className="mv-block mv-left animate-fade-left">
      <div className="mv-image">
        <img src={its3} alt="Mission" />
      </div>
      <div className="mv-content">
        <small className="mv-label">{t('missionLabel')}</small>
        <h2 className="mv-title">{t('missionTitle')}</h2>
        <p className="mv-description">
          {t('missionBody')}
        </p>
      </div>
    </div>

    {/* Vision Block */}
    <div className="mv-block mv-right animate-fade-right">
      <div className="mv-content">
        <small className="mv-label">{t('visionLabel')}</small>
        <h2 className="mv-title">{t('visionTitle')}</h2>
        <p className="mv-description">
          {t('visionBody')}
        </p>
      </div>
      <div className="mv-image">
        <img src={its4} alt="Vision" />
      </div>
    </div>
  </div>
</section>





<section className="expert-team-section">
  <h2 className="expert-team-title">{t('expertTitle')}</h2>
  <p className="expert-team-subtitle">{t('expertSubtitle')}</p>

  <div className="expert-testimonials">

    <div className="expert-card">
      <img src={men1} alt={t('expert1Name')} className="expert-photo" />
      <div className="expert-name">{t('expert1Name')}</div>
      <div className="expert-position">{t('expert1Pos')}</div>
      <div className="expert-text">{t('expert1Text')}</div>
    </div>

    <div className="expert-card">
      <img src={lady} alt={t('expert2Name')} className="expert-photo" />
      <div className="expert-name">{t('expert2Name')}</div>
      <div className="expert-position">{t('expert2Pos')}</div>
      <div className="expert-text">{t('expert2Text')}</div>
    </div>

    <div className="expert-card">
      <img src={men2} alt={t('expert3Name')} className="expert-photo" />
      <div className="expert-name">{t('expert3Name')}</div>
      <div className="expert-position">{t('expert3Pos')}</div>
      <div className="expert-text">{t('expert3Text')}</div>
    </div>

  </div>
</section>









<section className="testimonial-section">
  <h2 className="testimonial-title">{t('clientSuccessTitle')}</h2>

  <div className="testimonial-box-container">

    {/* Testimonial 1 */}
    <div className="testimonial-wrapper" data-aos="fade-right">
      <div className="testimonial">
        <div className="testimonial-card">
          <h3>{t('before')}</h3>
          <p>{t('t1Before')}</p>
        </div>
        <div className="testimonial-card after">
          <h3>{t('after')}</h3>
          <p>{t('t1After')}</p>
        </div>
      </div>
      <div className="client-info">{t('t1Client')}</div>
    </div>

    {/* Testimonial 2 */}
    <div className="testimonial-wrapper" data-aos="fade-left">
      <div className="testimonial">
        <div className="testimonial-card">
          <h3>{t('before')}</h3>
          <p>{t('t2Before')}</p>
        </div>
        <div className="testimonial-card after">
          <h3>{t('after')}</h3>
          <p>{t('t2After')}</p>
        </div>
      </div>
      <div className="client-info">{t('t2Client')}</div>
    </div>

  </div>
</section>








    </>
  );
}

export default AboutUs;
