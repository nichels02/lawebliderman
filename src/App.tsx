import { useState, useEffect } from "react";
import { ContentProvider } from "./common/Componentes/Sistemas/useContent.tsx"; // Importa el Provider
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.tsx';
import Conocenos from './pages/Conocenos.tsx';
import Lidermania from './pages/Lidermania.tsx';
import Seguridad from './pages/Seguridad.tsx';
import Servicio from './pages/Servicio.tsx';
import Tecnologia from './pages/Tecnologia.tsx';
import BarraDeOpciones from './common/Componentes/BarraDeOpciones.tsx';
import BarraDeOpciones2 from './common/Componentes/BarraDeOpciones2.tsx';
import BarraDeOpciones3 from './common/Componentes/BarraDeOpciones3.tsx';
import BarraDeOpcionesRedes from './common/Componentes/BarraDeOpcionesRedes.tsx';
import Footer from './common/Componentes/Footer.tsx';
import { LanguageProvider } from './common/Componentes/Sistemas/LanguageContext'; // Importa el LanguageProvider
import ScrollToTop from "./common/Componentes/Sistemas/ScrollToTop.tsx";
import FormularioDeContacto2 from "./common/Componentes/FormularioDeContacto2.tsx";

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // ✅ Define si es móvil

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 810); // ✅ Actualiza si cambia el tamaño de pantalla
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ContentProvider> {/* ✅ Envuelve la app con el Provider */}
            <LanguageProvider> {/* Envuelve la aplicación con LanguageProvider */}
                <BrowserRouter>
                    <ScrollToTop />

                    {/* ✅ Muestra BarraDeOpciones y BarraDeOpciones2 SOLO en pantallas grandes */}
                    {!isMobile && (
                        <>
                            <BarraDeOpciones />
                            <BarraDeOpciones2 />
                        </>
                    )}

                    {/* ✅ Muestra BarraDeOpciones3 SOLO en celulares/tablets */}
                    {isMobile && <BarraDeOpciones3 />}

                    <BarraDeOpcionesRedes />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Conocenos" element={<Conocenos />} />
                        <Route path="/Lidermania" element={<Lidermania />} />
                        <Route path="/Seguridad" element={<Seguridad />} />
                        <Route path="/Servicio" element={<Servicio />} />
                        <Route path="/Tecnologia" element={<Tecnologia />} />
                    </Routes>

                    <FormularioDeContacto2 />
                    <FormularioDeContacto2 />
                    <Footer />
                </BrowserRouter>
            </LanguageProvider>
        </ContentProvider>
    );
}

export default App;
