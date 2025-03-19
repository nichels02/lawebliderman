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
import Footer from './common/Componentes/Footer.tsx';
import { LanguageProvider } from './common/Componentes/Sistemas/LanguageContext'; // Importa el LanguageProvider

function App() {
    return (
        <ContentProvider> {/* ✅ Envuelve la app con el Provider */}
            <LanguageProvider> {/* Envuelve la aplicación con LanguageProvider */}
                <BrowserRouter>
                    <BarraDeOpciones />
                    <BarraDeOpciones2 />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Conocenos" element={<Conocenos />} />
                        <Route path="/Lidermania" element={<Lidermania />} />
                        <Route path="/Seguridad" element={<Seguridad />} />
                        <Route path="/Servicio" element={<Servicio />} />
                        <Route path="/Tecnologia" element={<Tecnologia />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </LanguageProvider>
        </ContentProvider>
    );
}

export default App;