import React from "react";
import "../../hojas-de-estilo/hojas-de-estilo-crearTickets/Enlace.css"
import { AiFillSchedule } from "react-icons/ai";

function Enlace () {
    return(
    <aside className="enlace">
        <a className="link" href="https://www.google.com.mx" target="_blank" rel="noreferrer">
            Tíckets
            <AiFillSchedule className="link-icon"/>
            </a>
    </aside>
    );
}

export default Enlace;