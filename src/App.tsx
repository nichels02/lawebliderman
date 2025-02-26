import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';



import Home from "./pages/Home.tsx";
import Conocenos from "./pages/Conocenos.tsx";
import Lidermania from "./pages/Lidermania.tsx";
import Seguridad from "./pages/Seguridad.tsx";
import Servicio from "./pages/Servicio.tsx";
import Tecnologia from "./pages/Tecnologia.tsx";

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
                    <Route path='/Conocenos' element={<Conocenos/>}/>
                    <Route path='/Lidermania' element={<Lidermania/>}/>
                    <Route path='/Seguridad' element={<Seguridad/>}/>
                    <Route path='/Servicio' element={<Servicio/>}/>
                    <Route path='/Tecnologia' element={<Tecnologia/>}/>
                </Routes>
                <Footer />

            </BrowserRouter>
        </>
    );
}

export default App
