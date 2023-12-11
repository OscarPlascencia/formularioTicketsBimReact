import './App.css';
import Fondo from "./imagenes/fondoderma.jpg";
import Logo from "./imagenes/logoMEpiel.png";
import Usuario from "./componentes/crearTickets/Usuario"
import Sucursal from "./componentes/crearTickets/Sucursal"
import Fecha from "./componentes/crearTickets/Fecha"
import Prioridad from "./componentes/crearTickets/Prioridad"
import Descripcion from "./componentes/crearTickets/Descripcion"
import BotonDeEnvio from './componentes/crearTickets/BotonDeEnvio';
import Enlace from './componentes/crearTickets/Enlace';

function App() {
    return (
        <div className="App" style={{ backgroundImage: `url(${Fondo})` }}>
            <form className='caja-formulario'>
                <img
                className='contenedor-logo'
                src={Logo}
                alt="Logo de Biomedico Mepiel" />
                <Usuario/>
                <Sucursal/>
                <Fecha/>
                <Prioridad/>
                <Descripcion/>
                <BotonDeEnvio/>
            </form>
            <Enlace/>
        </div>
    );
}

export default App;
