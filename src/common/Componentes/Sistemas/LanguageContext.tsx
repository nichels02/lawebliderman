import React, { createContext, useContext, useEffect, useState } from 'react';
import { languageManager } from './SingletonIdiomas';

type LanguageContextType = {
    language: 'es' | 'en';
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState(languageManager.getCurrentLanguage());

    useEffect(() => {
        const updateLanguage = (newLanguage: 'es' | 'en') => {
            setLanguage(newLanguage);
        };

        languageManager.subscribe(updateLanguage); // Suscripción al singleton

        return () => {
            languageManager.unsubscribe(updateLanguage); // Desuscripción al desmontar
        };
    }, []);

    const toggleLanguage = () => {
        languageManager.toggleLanguage(); // Cambia el idioma en el singleton
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
    }
    return context;
};