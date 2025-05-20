// import React, { createContext, useState, useEffect } from 'react';
// import i18n from '../components/Shared/translation/i18n.tsx';

// const LanguageContext = createContext();
// export default LanguageContext;
// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
//   const [dir, setDir] = useState(language === 'ar' ? 'rtl' : 'ltr');

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     i18n.changeLanguage(lang);
//     setDir(lang === 'ar' ? 'rtl' : 'ltr');
//     localStorage.setItem('language', lang);
//     document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
//     document.documentElement.lang = lang;
//   };

//   useEffect(() => {
//     // Initialize language from localStorage or browser preference
//     const savedLanguage = localStorage.getItem('language');
//     if (savedLanguage) {
//       changeLanguage(savedLanguage);
//     }
//   }, []);

//   return (
//     <LanguageContext.Provider value={{ language, dir, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';
import i18n from '../components/Shared/translation/i18n.tsx';

// Create the context with default values
export const LanguageContext = createContext({
  language: 'en',
  changeLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Set the direction based on language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Initialize language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
