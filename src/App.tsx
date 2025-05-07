import { lazy, Suspense, useState, useEffect, useRef } from "react";
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

function PageWrapper({ children }: { children: React.ReactNode }) {
    const [pageLoaded, setPageLoaded] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Estrategia 1: Esperar a que todos los recursos estén cargados
        const handleLoad = () => setPageLoaded(true);

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Estrategia 2: Observer como fallback
        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPageLoaded(true);
                observerRef.current?.disconnect();
            }
        }, { threshold: 0.1 });

        const lastElement = document.querySelector('#page-bottom-marker');
        if (lastElement) {
            observerRef.current.observe(lastElement);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
            observerRef.current?.disconnect();
        };
    }, []);

    return (
        <>
            {children}
            <div id="page-bottom-marker" style={{ height: '1px' }} />
            {pageLoaded && (
                <Suspense fallback={null}>
                    <LazyFormulario />
                    <LazyFooter />
                </Suspense>
            )}
        </>
    );
}

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 810);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
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
                            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                            <Route path="/Conocenos" element={<PageWrapper><Conocenos /></PageWrapper>} />
                            <Route path="/Lidermania" element={<PageWrapper><Lidermania /></PageWrapper>} />
                            <Route path="/Seguridad" element={<PageWrapper><Seguridad /></PageWrapper>} />
                            <Route path="/Servicio" element={<PageWrapper><Servicio /></PageWrapper>} />
                            <Route path="/Tecnologia" element={<PageWrapper><Tecnologia /></PageWrapper>} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </LanguageProvider>
        </ContentProvider>
    );
}

export default App;