import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

import BarraDeOpciones from './common/Componentes/BarraDeOpciones.tsx';
import BarraDeOpciones2 from './common/Componentes/BarraDeOpciones2.tsx';
import BarraDeOpcionesRedes from './common/Componentes/BarraDeOpcionesRedes.tsx';
import Footer from './common/Componentes/Footer.tsx';

function App() {
    return(
        <>
            <BrowserRouter>
                <BarraDeOpciones />
                <BarraDeOpciones2 />
                <BarraDeOpcionesRedes />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
                <Footer />

            </BrowserRouter>
        </>
    );
}

export default App
