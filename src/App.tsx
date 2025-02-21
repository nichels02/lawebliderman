import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

import BarraDeOpciones from './common/Componentes/BarraDeOpciones.tsx';
import BarraDeOpciones2 from './common/Componentes/BarraDeOpciones2.tsx';

function App() {
    return(
        <>
            <BrowserRouter>
                <BarraDeOpciones />
                <BarraDeOpciones2 />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App
