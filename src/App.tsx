import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Páginas importadas de manera lazy
const Home = lazy(() => import('./pages/Home.tsx'));
const Conocenos = lazy(() => import('./pages/Conocenos.tsx'));
const Lidermania = lazy(() => import('./pages/Lidermania.tsx'));
const Seguridad = lazy(() => import('./pages/Seguridad.tsx'));
const Servicio = lazy(() => import('./pages/Servicio.tsx'));
const Tecnologia = lazy(() => import('./pages/Tecnologia.tsx'));

// Componentes compartidos
import BarraDeOpciones from './common/Componentes/BarraDeOpciones.tsx';
import BarraDeOpciones2 from './common/Componentes/BarraDeOpciones2.tsx';
import BarraDeOpciones3 from './common/Componentes/BarraDeOpciones3.tsx';
import BarraDeOpcionesRedes from './common/Componentes/BarraDeOpcionesRedes.tsx';
import Footer from './common/Componentes/Footer.tsx';
import FormularioDeContacto2 from "./common/Componentes/FormularioDeContacto2.tsx";

// Sistemas importantes
import { LanguageProvider } from './common/Componentes/Sistemas/LanguageContext'; // Importa el LanguageProvider
import ScrollToTop from "./common/Componentes/Sistemas/ScrollToTop.tsx";
import { ContentProvider } from "./common/Componentes/Sistemas/useContent.tsx"; // Importa el Provider

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

                    {/* Lazy loading de las páginas */}
                    <Suspense fallback={<div>Cargando página...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Conocenos" element={<Conocenos />} />
                            <Route path="/Lidermania" element={<Lidermania />} />
                            <Route path="/Seguridad" element={<Seguridad />} />
                            <Route path="/Servicio" element={<Servicio />} />
                            <Route path="/Tecnologia" element={<Tecnologia />} />
                        </Routes>
                    </Suspense>

                    <FormularioDeContacto2 />
                    <Footer />
                </BrowserRouter>
            </LanguageProvider>
        </ContentProvider>
    );
}

export default App;
