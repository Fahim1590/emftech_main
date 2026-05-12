import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "services": "Services",
        "portfolio": "Portfolio",
        "industries": "Industries",
        "pricing": "Pricing",
        "about": "About",
        "contact": "Contact",
        "bookDemo": "Book a Demo"
      },
      "hero": {
        "tagline": "We Build the Digital Backbone of Saudi Business",
        "subheadline": "AI-Powered Tech Solutions for Saudi Arabia's Smartest Businesses",
        "viewWork": "View Our Work"
      },
      "common": {
        "sar": "SAR",
        "vat": "15% VAT included",
        "learnMore": "Learn More",
        "readMore": "Read More"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "services": "الخدمات",
        "portfolio": "أعمالنا",
        "industries": "القطاعات",
        "pricing": "الأسعار",
        "about": "من نحن",
        "contact": "اتصل بنا",
        "bookDemo": "احجز عرضاً"
      },
      "hero": {
        "tagline": "نبني العمود الفقري الرقمي للأعمال السعودية",
        "subheadline": "حلول تقنية مدعومة بالذكاء الاصطناعي لأذكى الشركات في المملكة العربية السعودية",
        "viewWork": "شاهد أعمالنا"
      },
      "common": {
        "sar": "ر.س",
        "vat": "شامل ضريبة القيمة المضافة 15%",
        "learnMore": "أعرف أكثر",
        "readMore": "اقرأ المزيد"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
