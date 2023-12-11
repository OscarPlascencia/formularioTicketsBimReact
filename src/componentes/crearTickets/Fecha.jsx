import React from "react";
import "../../hojas-de-estilo/hojas-de-estilo-crearTickets/Fecha.css"

function Fecha () {
    return(
        <div className="inputbox">
            <label>Fecha</label>
            <input type="date" className="date" required/>
        </div>
    );
}

export default Fecha;