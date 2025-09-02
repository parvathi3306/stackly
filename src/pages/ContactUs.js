import React, { useEffect, useMemo, useState } from 'react';
import './ContactUs.css';
import { useNavigate } from "react-router-dom";
import contactvid from "../images/contactvid.mp4";
import contactus from "../images/contactus.jpg";
import { useDarkMode } from "../context/Darkmodecontext";
import sh from "../images/sh.jpg";
function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('app_language') || 'en');

  const translations = useMemo(() => ({
    en: {
      heroTitle: 'Contact Us',
      heroSubtitle: 'Contact us Today to Schedule a Consultation or to Learn More about our Services.',
      makeCall: 'Make a Call',
      sendEmail: 'Send Email',
      visitOffice: 'Visit Our Office',
      liveChat: 'Live Chat',
      sales: 'Sales',
      service: 'Service',
      support: 'Support',
      instantSupport: 'Instant support via chat',
      available247: 'Available 24/7',
      formTitle: 'Contact Us',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourMessage: 'Your Message',
      sendMessage: 'Send Message',
      submittedTitle: '✅ Submitted Successfully!',
      submittedText: 'Thank you for reaching out. We’ll get back to you shortly.',
      bannerTitle: 'Let’s Connect With Our Experts',
      bannerText: 'We provide reliable IT solutions to drive your business forward. Reach out today!',
    },
    he: {
      heroTitle: 'צור קשר',
      heroSubtitle: 'צור קשר היום לתיאום ייעוץ או לקבלת מידע נוסף על השירותים שלנו.',
      makeCall: 'התקשר אלינו',
      sendEmail: 'שלח אימייל',
      visitOffice: 'בקר במשרדנו',
      liveChat: 'צ׳אט חי',
      sales: 'מכירות',
      service: 'שירות',
      support: 'תמיכה',
      instantSupport: 'תמיכה מיידית דרך צ׳אט',
      available247: 'זמין 24/7',
      formTitle: 'צור קשר',
      yourName: 'השם שלך',
      yourEmail: 'האימייל שלך',
      yourMessage: 'ההודעה שלך',
      sendMessage: 'שלח הודעה',
      submittedTitle: '✅ נשלח בהצלחה!',
      submittedText: 'תודה שפנית אלינו. נחזור אליך בהקדם.',
      bannerTitle: 'בוא נתחבר עם המומחים שלנו',
      bannerText: 'אנו מספקים פתרונות IT אמינים לקידום העסק שלך. פנה אלינו היום!',
    },
    ar: {
      heroTitle: 'اتصل بنا',
      heroSubtitle: 'تواصل معنا اليوم لحجز استشارة أو لمعرفة المزيد عن خدماتنا.',
      makeCall: 'اتصل بنا',
      sendEmail: 'أرسل بريدًا إلكترونيًا',
      visitOffice: 'زر مكتبنا',
      liveChat: 'دردشة مباشرة',
      sales: 'المبيعات',
      service: 'الخدمة',
      support: 'الدعم',
      instantSupport: 'دعم فوري عبر الدردشة',
      available247: 'متاح 24/7',
      formTitle: 'اتصل بنا',
      yourName: 'اسمك',
      yourEmail: 'بريدك الإلكتروني',
      yourMessage: 'رسالتك',
      sendMessage: 'أرسل الرسالة',
      submittedTitle: '✅ تم الإرسال بنجاح!',
      submittedText: 'شكرًا لتواصلك معنا. سنعود إليك قريبًا.',
      bannerTitle: 'لنواصل التواصل مع خبرائنا',
      bannerText: 'نقدم حلول تقنية معلومات موثوقة لدفع عملك قدمًا. تواصل اليوم!',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      <section className="hero">
        {/* Background video */}
        <video
          className="hero-video"
          src={contactvid}
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

      <section className="contact-section">
  <div className="contact-container">
    <div className="contact-card">
      <div className="icon-circle">
        <span role="img" aria-label="phone">📞</span>
      </div>
      <h3>{t('makeCall')}</h3>
      <p>
        {t('sales')}: +233 456 789 788<br />
        {t('service')}: +555-7890-123
      </p>
    </div>
    <div className="contact-card">
      <div className="icon-circle">
        <span role="img" aria-label="email">✉️</span>
      </div>
      <h3>{t('sendEmail')}</h3>
      <p>
        {t('support')}: thestackly@gmail.com
      </p>
    </div>
    <div className="contact-card">
      <div className="icon-circle">
        <span role="img" aria-label="office">📍</span>
      </div>
      <h3>{t('visitOffice')}</h3>
      <p>
        455 West Orchard Street<br />
        Kings Mountain
      </p>
    </div>
    <div className="contact-card">
      <div className="icon-circle">
        <span role="img" aria-label="chat">💬</span>
      </div>
      <h3>{t('liveChat')}</h3>
      <p>
        {t('instantSupport')}<br />
        {t('available247')}
      </p>
    </div>
  </div>
</section>

      <div className="contact-full">
        <div className="contact-left">
          <img src={contactus} alt="Contact Us" />
        </div>

        {!submitted ? (
          <div className="contact-right" id="formContainer">
            <h2>{t('formTitle')}</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">{t('yourName')}</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">{t('yourEmail')}</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">{t('yourMessage')}</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit">{t('sendMessage')}</button>
            </form>
          </div>
        ) : (
          <div className="contact-right success-box" id="successMessage" style={{ display: "flex" }}>
            <h2>{t('submittedTitle')}</h2>
            <p>{t('submittedText')}</p>
          </div>
        )}
      </div>

      <section className="map-section">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.081042933356!2d-122.41941538468158!3d37.774929779759424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f0f5f9b%3A0x5f3c4e20e6b82a43!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1702462820472!5m2!1sen!2sus" 
    allowfullscreen="" 
    loading="lazy">
  </iframe>
</section>

      <section className="contact-banner">
  <div className="contact-banner-content">
    <h2>{t('bannerTitle')}</h2>
    <p>{t('bannerText')}</p>
  </div>
</section>

    </>
  );
}

export default ContactUs;
