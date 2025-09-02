import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import it from "../images/it1.mp4";
import process from "../images/process.jpg";
import ii from "../images/ii.jpg";
import cu from "../images/cu.jpg";

function Home() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => {
    navigate(path); // or any other route
  };
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [language, setLanguage] = useState(() => localStorage.getItem("app_language") || "en");

  // translations used in Home page
  const translations = useMemo(() => ({
    en: {
      heroTitle: "Powering Your Business with Cutting-Edge IT Solutions",
      heroDesc: "From cloud migration to cybersecurity, we deliver scalable, reliable, and innovative technology services that drive growth and efficiency.",
      getStarted: "Get Started",
      talkToExpert: "Talk to an Expert",
      aboutUs: "About Us",
      whereIdeasMeet: "Where Ideas Meet Execution",
      aboutDesc: "We are a team of tech enthusiasts, problem solvers, and innovators dedicated to transforming the way businesses use technology. Our mission is to provide tailored IT solutions that help companies operate smarter, safer, and faster in a digital-first world. With a deep understanding of emerging trends, we deliver future-ready strategies that give businesses a competitive edge. We believe in combining cutting-edge tools with human creativity to solve complex challenges. From startups to enterprises, our solutions are designed to scale with your growth. Our commitment to excellence drives us to continuously improve, innovate, and exceed expectations.",
      readMore: "Read More",
      completedProjects: "Completed Projects",
      happyClients: "Happy Clients",
      skilledWorkers: "Skilled Workers",
      awardsWon: "Awards Won",
      projectsDesc: "Delivering top-quality construction projects on time and within budget.",
      clientsDesc: "Trusted by homeowners, builders, and businesses across the region.",
      workersDesc: "Experienced professionals dedicated to precision and craftsmanship.",
      awardsDesc: "Recognized for excellence and innovation in construction services.",
      weAreHere: "WE'RE HERE TO HELP YOU",
      cloudSolutions: "Cloud Solutions",
      cloudDesc: "Scalable and secure cloud services that enhance flexibility, reduce costs, and drive innovation for your business.",
      exploreCloud: "Explore Cloud",
      cybersecurity: "Cybersecurity",
      securityDesc: "Protect your digital assets with advanced threat detection, compliance management, and 24/7 monitoring.",
      exploreSecurity: "Explore Security",
      itConsulting: "IT Consulting",
      itConsultingDesc: "Tailored IT strategies and expert guidance to streamline processes and maximize business efficiency.",
      exploreConsulting: "Explore Consulting",
      smartItSolutions: "Smart IT Solutions for Every Industry",
      industryLead: "We provide tailored IT strategies to solve industry-specific challenges, helping your business grow with technology.",
      exploreMore: "Explore More",
      financeLine: "💰 \n          Finance: Secure, compliant, and scalable IT systems for financial operations.",
      healthcareLine: "🏥 \n          Healthcare: Protect patient data and streamline care with advanced IT solutions.",
      ecommerceLine: "🛒 \n          E-Commerce: Optimize sales, logistics, and customer experience with smart tools.",
      educationLine: "🎓 \n          Education: Modernize classrooms and online learning platforms.",
      manufacturingLine: "🏭 \n          Manufacturing: Optimize production and supply chain with connected IT systems.",
      startupsLine: "🚀 \n          Startups: Fast, flexible, and scalable tech solutions for innovation.",
      testimonialsTitle: "What Our Clients Say",
      testimonialsSub: "Read how our IT solutions have helped businesses like yours succeed.",
      testimonial1: "The team's expertise and proactive support have been a game-changer for our business. They not only solved our immediate IT issues but also provided a strategic roadmap that has improved our efficiency and security.",
      testimonial2: "We've worked with many IT providers, but this company stands out. Their communication is excellent, and they truly understand our unique needs. Their managed services have given us complete peace of mind.",
      testimonial3: "From a seamless cloud migration to ongoing cybersecurity support, their service has been absolutely flawless. They have become a truly reliable partner and an invaluable extension of our team.",
      ctaTitle: "Let’s Talk Tech!",
      ctaText: "Have a project in mind or need support? Our team is ready to help you find the right IT solutions. Get in touch today.",
      ctaBtn: "Start Your Project",
    },
    he: {
      heroTitle: "מניעים את העסק שלך עם פתרונות IT מתקדמים",
      heroDesc: "ממהגרי ענן ועד אבטחת סייבר, אנו מספקים שירותי טכנולוגיה חדשניים, אמינים וברמה גבוהה שמקדמים צמיחה ויעילות.",
      getStarted: "להתחיל",
      talkToExpert: "דבר עם מומחה",
      aboutUs: "עלינו",
      whereIdeasMeet: "איפה רעיונות פוגשים ביצוע",
      aboutDesc: "אנחנו צוות של חובבי טכנולוגיה, פותרי בעיות ומחדשים, המוקדש לשינוי הדרך שבה עסקים משתמשים בטכנולוגיה. המשימה שלנו היא לספק פתרונות IT מותאמים אישית שעוזרים לחברות לפעול חכם, בטוח ומהיר יותר בעולם דיגיטלי. עם הבנה עמוקה של מגמות מתפתחות, אנו מספקים אסטרטגיות מוכנות לעתיד שנותנות יתרון תחרותי. אנו מאמינים בשילוב כלים חדשניים עם יצירתיות אנושית כדי לפתור אתגרים מורכבים. מסטארט-אפים ועד תאגידים, הפתרונות שלנו מתוכננים להתרחב יחד עם הצמיחה שלך. המחויבות שלנו למצוינות מניעה אותנו להשתפר, לחדש ולעלות על הציפיות.",
      readMore: "קרא עוד",
      completedProjects: "פרויקטים שהושלמו",
      happyClients: "לקוחות מרוצים",
      skilledWorkers: "עובדים מיומנים",
      awardsWon: "פרסים שהושגו",
      projectsDesc: "מספקים פרויקטים איכותיים בזמן ובתקציב.",
      clientsDesc: "זוכים לאמון בעלי בתים, קבלנים ועסקים ברחבי האזור.",
      workersDesc: "מקצוענים מנוסים המחויבים לדיוק ולאומנות.",
      awardsDesc: "מוכרים בזכות מצוינות וחדשנות בשירותי בנייה.",
      weAreHere: "אנחנו כאן כדי לעזור לך",
      cloudSolutions: "פתרונות ענן",
      cloudDesc: "שירותי ענן ניתנים להרחבה ובטוחים המגבירים גמישות, מצמצמים עלויות ומקדמים חדשנות עבור העסק שלך.",
      exploreCloud: "לחקור את הענן",
      cybersecurity: "אבטחת סייבר",
      securityDesc: "הגן על הנכסים הדיגיטליים שלך עם גילוי מתקדם, ניהול תאימות וניטור 24/7.",
      exploreSecurity: "לחקור אבטחה",
      itConsulting: "ייעוץ IT",
      itConsultingDesc: "אסטרטגיות IT מותאמות והדרכה מומחית לייעול תהליכים ומקסום היעילות העסקית.",
      exploreConsulting: "לחקור ייעוץ",
      smartItSolutions: "פתרונות IT חכמים לכל תעשייה",
      industryLead: "אנו מספקים אסטרטגיות IT מותאמות לפתרון אתגרים ייחודיים לכל תעשייה, ומסייעים לעסק שלך לגדול באמצעות טכנולוגיה.",
      exploreMore: "גלה עוד",
      financeLine: "💰 \n          פיננסים: מערכות IT מאובטחות, תואמות וניתנות להרחבה לפעילות פיננסית.",
      healthcareLine: "🏥 \n          בריאות: הגן על מידע מטופלים וייעל את הטיפול בעזרת פתרונות IT מתקדמים.",
      ecommerceLine: "🛒 \n          מסחר אלקטרוני: מיטוב מכירות, לוגיסטיקה וחוויית לקוח עם כלים חכמים.",
      educationLine: "🎓 \n          חינוך: חדש את הכיתות והלמידה המקוונת.",
      manufacturingLine: "🏭 \n          ייצור: מיטוב הייצור והשרשרת האספקה עם מערכות IT מקושרות.",
      startupsLine: "🚀 \n          סטארט-אפים: פתרונות טכנולוגיים מהירים, גמישים וניתנים להרחבה לחדשנות.",
      testimonialsTitle: "מה הלקוחות שלנו אומרים",
      testimonialsSub: "קרא כיצד פתרונות ה-IT שלנו עזרו לעסקים כמוך להצליח.",
      testimonial1: "הידע והתמיכה הפרואקטיבית של הצוות היו משחק משנה עבור העסק שלנו. הם לא רק פתרו את בעיות ה-IT המיידיות שלנו אלא גם סיפקו מפת דרכים אסטרטגית ששיפרה את היעילות והאבטחה שלנו.",
      testimonial2: "עבדנו עם ספקי IT רבים, אבל החברה הזו בולטת. התקשורת שלהם מצוינת והם באמת מבינים את הצרכים הייחודיים שלנו. שירותי הניהול שלהם העניקו לנו שקט נפשי מלא.",
      testimonial3: "מהגירת ענן חלקה ועד תמיכת אבטחת סייבר מתמשכת, השירות שלהם מושלם לחלוטין. הם הפכו לשותף אמין באמת ולהרחבה בעלת ערך לצוות שלנו.",
      ctaTitle: "בוא נדבר טכנולוגיה!",
      ctaText: "יש לך פרויקט בראש או זקוק לתמיכה? הצוות שלנו מוכן לעזור לך למצוא את פתרונות ה-IT המתאימים. צור קשר היום.",
      ctaBtn: "התחל את הפרויקט שלך",
    },
    ar: {
      heroTitle: "نقود عملك بحلول تقنية معلومات متقدمة",
      heroDesc: "من ترحيل السحابة إلى الأمن السيبراني، نقدم خدمات تكنولوجية قابلة للتوسع وموثوقة ومبتكرة تدفع النمو والكفاءة.",
      getStarted: "ابدأ الآن",
      talkToExpert: "تحدث إلى خبير",
      aboutUs: "من نحن",
      whereIdeasMeet: "حيث تلتقي الأفكار بالتنفيذ",
      aboutDesc: "نحن فريق من عشاق التكنولوجيا وحلّالين للمشكلات ومبتكرين مكرسين لتحويل الطريقة التي تستخدم بها الشركات التكنولوجيا. مهمتنا هي تقديم حلول تقنية معلومات مخصصة تساعد الشركات على العمل بذكاء وأمان وسرعة أكبر في عالم رقمي. مع فهم عميق للاتجاهات الناشئة، نقدم استراتيجيات جاهزة للمستقبل تمنح الشركات ميزة تنافسية. نؤمن بدمج الأدوات المتقدمة مع الإبداع البشري لحل التحديات المعقدة. من الشركات الناشئة إلى المؤسسات، تم تصميم حلولنا للتوسع مع نموك. يدفعنا التزامنا بالتميز إلى التحسين المستمر والابتكار وتجاوز التوقعات.",
      readMore: "اقرأ المزيد",
      completedProjects: "مشاريع مكتملة",
      happyClients: "عملاء سعداء",
      skilledWorkers: "عمال مهرة",
      awardsWon: "جوائز محققة",
      projectsDesc: "ننجز مشاريع عالية الجودة في الوقت المحدد وضمن الميزانية.",
      clientsDesc: "نحظى بثقة أصحاب المنازل والمقاولين والشركات في المنطقة.",
      workersDesc: "محترفون ذوو خبرة ملتزمون بالدقة والجودة.",
      awardsDesc: "معترف بنا للتميز والابتكار في خدمات البناء.",
      weAreHere: "نحن هنا لمساعدتك",
      cloudSolutions: "حلول سحابية",
      cloudDesc: "خدمات سحابية قابلة للتوسع وآمنة تعزز المرونة وتقلل التكاليف وتدفع الابتكار لعملك.",
      exploreCloud: "استكشف السحابة",
      cybersecurity: "الأمن السيبراني",
      securityDesc: "احمِ أصولك الرقمية من خلال اكتشاف متقدم للتهديدات وإدارة الامتثال والمراقبة على مدار الساعة.",
      exploreSecurity: "استكشف الأمان",
      itConsulting: "استشارات تقنية المعلومات",
      itConsultingDesc: "استراتيجيات تقنية معلومات مخصصة وإرشاد خبير لتبسيط العمليات وتعظيم كفاءة الأعمال.",
      exploreConsulting: "استكشف الاستشارات",
      smartItSolutions: "حلول تقنية معلومات ذكية لكل قطاع",
      industryLead: "نقدم استراتيجيات تقنية معلومات مخصصة لحل تحديات كل قطاع، لمساعدة عملك على النمو بالتكنولوجيا.",
      exploreMore: "اكتشف المزيد",
      financeLine: "💰 \n          التمويل: أنظمة تقنية معلومات آمنة ومتوافقة وقابلة للتوسّع للعمليات المالية.",
      healthcareLine: "🏥 \n          الرعاية الصحية: حماية بيانات المرضى وتبسيط الرعاية بحلول تقنية معلومات متقدمة.",
      ecommerceLine: "🛒 \n          التجارة الإلكترونية: تحسين المبيعات واللوجستيات وتجربة العملاء بأدوات ذكية.",
      educationLine: "🎓 \n          التعليم: تحديث الفصول الدراسية ومنصات التعلم عبر الإنترنت.",
      manufacturingLine: "🏭 \n          التصنيع: تحسين الإنتاج وسلسلة التوريد بأنظمة تقنية معلومات متصلة.",
      startupsLine: "🚀 \n          الشركات الناشئة: حلول تقنية سريعة ومرنة وقابلة للتوسع للابتكار.",
      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonialsSub: "اقرأ كيف ساعدت حلولنا شركات مثل شركتك على النجاح.",
      testimonial1: "خبرة الفريق ودعمهم الاستباقي أحدثا فرقًا كبيرًا لأعمالنا. لم يحلّوا مشاكل تقنية المعلومات الفورية فحسب، بل قدموا أيضًا خارطة طريق استراتيجية حسّنت كفاءتنا وأمننا.",
      testimonial2: "عملنا مع العديد من مزودي تقنية المعلومات، لكن هذه الشركة مميزة. تواصلهم ممتاز ويفهمون احتياجاتنا الفريدة حقًا. منحتنا خدماتهم المدارة راحة بال كاملة.",
      testimonial3: "من ترحيل سحابي سلس إلى دعم أمن سيبراني مستمر، كان خدمتهم مثالية تمامًا. لقد أصبحوا شريكًا موثوقًا بالفعل وامتدادًا لا يقدر بثمن لفريقنا.",
      ctaTitle: "لنتحدث تقنية!",
      ctaText: "هل لديك مشروع في ذهنك أو تحتاج إلى دعم؟ فريقنا جاهز لمساعدتك في إيجاد حلول تقنية المعلومات المناسبة. تواصل معنا اليوم.",
      ctaBtn: "ابدأ مشروعك",
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
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <section className="hero">
        {/* Backgrounad video */}
        <video
          className="hero-video"
          src={it}
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
            <button className="btn btn-primary" onClick={()=>handleGetStarted("/about")}>{t("getStarted")}</button>
            <button className="btn btn-secondary" onClick={()=>handleGetStarted("/contact")}>{t("talkToExpert")}</button>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={process} alt="About Us" />
          </div>
          <div className="about-content">
            <h4 className="about-subtitle">{t("aboutUs")}</h4>
            <h1 className="about-title">
              {t("whereIdeasMeet")}
            </h1>
            <p className="about-text">
              {t("aboutDesc")}
            </p>
            <button className="read-more-btn"onClick={()=>handleGetStarted("/about")}>{t("readMore")}</button>
          </div>
        </div>
      </section>



      <section className="dashboard-stats">
  <div className="dashboard-stat-card">
    <h2>655+</h2>
    <h4>{t("completedProjects")}</h4>
    <p>{t("projectsDesc")}</p>
  </div>
  <div className="dashboard-stat-card">
    <h2 className="dashboard-stat-highlight">91%</h2>
    <h4>{t("happyClients")}</h4>
    <p>{t("clientsDesc")}</p>
  </div>
  <div className="dashboard-stat-card">
    <h2>2k+</h2>
    <h4>{t("skilledWorkers")}</h4>
    <p>{t("workersDesc")}</p>
  </div>
  <div className="dashboard-stat-card">
    <h2 className="dashboard-stat-highlight">42+</h2>
    <h4>{t("awardsWon")}</h4>
    <p>{t("awardsDesc")}</p>
  </div>
</section>




      <section className="it-services">
        <h2 className="section-title">{t("weAreHere")}</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">💻</div>
            <h3>{t("cloudSolutions")}</h3>
            <p>
              {t("cloudDesc")}
            </p>
            <button className="service-btn"onClick={()=>handleGetStarted("/cloud")}>{t("exploreCloud")}</button>
          </div>
          <div className="service-card">
            <div className="icon">🔒</div>
            <h3>{t("cybersecurity")}</h3>
            <p>
              {t("securityDesc")}
            </p>
            <button className="service-btn"onClick={()=>handleGetStarted("/cybersecurity")}>{t("exploreSecurity")}</button>
          </div>
          <div className="service-card">
            <div className="icon">⚙️</div>
            <h3>{t("itConsulting")}</h3>
            <p>
              {t("itConsultingDesc")}
            </p>
            <button className="service-btn"onClick={()=>handleGetStarted("/contact")}>{t("exploreConsulting")}</button>
          </div>
        </div>
      </section>



      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-text">
            <h2>{t("smartItSolutions")}</h2>
            <p>{t("industryLead")}</p>
            <ul>
              <li>{t("financeLine")}</li>
              <li>{t("healthcareLine")}</li>
              <li>{t("ecommerceLine")}</li>
              <li>{t("educationLine")}</li>
              <li>{t("manufacturingLine")}</li>
              <li>{t("startupsLine")}</li>
            </ul>
            <a href="#contact" className="flat-btn"onClick={()=>handleGetStarted("/services")}>{t("exploreMore")}</a>
          </div>
          <div className="industries-visual">
            <img src={ii} alt="Industries Visual" />
          </div>
        </div>
      </section>




      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">{t("testimonialsTitle")}</h2>
          <p className="section-subtitle">{t("testimonialsSub")}</p>
          <div className="testimonials-grid">
            <article className="testimonial-card" data-aos="fade-right">
              <blockquote>
                <p>"{t("testimonial1")}"</p>
              </blockquote>
              <div className="client-info">
                <div className="client-photo-placeholder"></div>
                <div className="client-details">
                  <h4>Jane Doe</h4>
                  <p>CEO, TechForward Solutions</p>
                </div>
              </div>
            </article>
            <article className="testimonial-card" data-aos="fade-up">
              <blockquote>
                <p>"{t("testimonial2")}"</p>
              </blockquote>
              <div className="client-info">
                <div className="client-photo-placeholder"></div>
                <div className="client-details">
                  <h4>John Smith</h4>
                  <p>CEO, Global Innovations Inc.</p>
                </div>
              </div>
            </article>
            <article className="testimonial-card" data-aos="fade-left">
              <blockquote>
                <p>"{t("testimonial3")}"</p>
              </blockquote>
              <div className="client-info">
                <div className="client-photo-placeholder"></div>
                <div className="client-details">
                  <h4>Sarah Chen</h4>
                  <p>CTO, FutureLink Technologies</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>









<section className="contact-cta">
  <div className="cta-container">
    <div className="cta-image">
      <img src={cu} alt="IT Support Team" />
    </div>
    <div className="cta-content">
      <h2 className="cta-title">{t("ctaTitle")}</h2>
      <p className="cta-text">
                {t("ctaText")}

      </p>
      <button className="cta-btn"onClick={()=>handleGetStarted("/contact")}>{t("ctaBtn")}</button>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;