import { createContext, useContext, useEffect, useState } from "react";

// Tipo para definir los valores del contexto
interface DarkModeContextType {
    isDarkMode: boolean;
    toggleMode: () => void;
}

// Crear el contexto con un valor por defecto
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        return localStorage.getItem("dark-mode") === "enabled";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleMode }}>
    {children}
    </DarkModeContext.Provider>
);
};

// Hook para usar el contexto
export const useDarkMode = (): DarkModeContextType => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode debe usarse dentro de un DarkModeProvider");
    }
    return context;
};
