import {Link} from "react-router-dom";
import '../../css/EjemplosABorrar/MainNav.css';

function MainNav(){
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark'>
            <div className='conteiner'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className="nav1-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav1-item">
                        <Link className="nav-link" to="/game">Lluvia acida</Link>
                    </li>


                    <li className="nav1-item">
                        <Link className="nav-link" to="/game2">Memoria</Link>
                    </li>

                    <li className="nav1-item">
                        <Link className="nav-link" to="/game3">Kahoot</Link>
                    </li>

                    <li className="nav1-item">
                        <Link className="nav-link" to="/game4">Dino-Run</Link>
                    </li>
                    <li className="nav1-item">
                        <Link className="nav-link" to="/game5">MooWars</Link>
                    </li>

                    <li className="nav2-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>



                </ul>

            </div>
        </nav>
    )
}
export default MainNav