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

// Sistemas importantes
import { LanguageProvider } from './common/Componentes/Sistemas/LanguageContext';
import ScrollToTop from "./common/Componentes/Sistemas/ScrollToTop.tsx";
import { ContentProvider } from "./common/Componentes/Sistemas/useContent.tsx";

// Lazy loading diferido para Footer y Formulario
const LazyFormulario = lazy(() => import('./common/Componentes/FormularioDeContacto2.tsx'));
const LazyFooter = lazy(() => import('./common/Componentes/Footer.tsx'));

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [mostrarExtras, setMostrarExtras] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 810);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Diferir la carga de Footer y Formulario por 3 segundos
        const timeout = setTimeout(() => {
            setMostrarExtras(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <ContentProvider>
            <LanguageProvider>
                <BrowserRouter>
                    <ScrollToTop />

                    {!isMobile && (
                        <>
                            <BarraDeOpciones />
                            <BarraDeOpciones2 />
                        </>
                    )}

                    {isMobile && <BarraDeOpciones3 />}
                    <BarraDeOpcionesRedes />

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

                    {mostrarExtras && (
                        <Suspense fallback={null}>
                            <LazyFormulario />
                            <LazyFooter />
                        </Suspense>
                    )}
                </BrowserRouter>
            </LanguageProvider>
        </ContentProvider>
    );
}

export default App;
