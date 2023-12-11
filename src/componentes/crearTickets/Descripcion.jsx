import React from "react";
import "../../hojas-de-estilo/hojas-de-estilo-crearTickets/Descripcion.css"

function Descripcion () {
    return(
        <div className="inputbox">
            <label>Descripción</label>
            <textarea name="descripcion" className="descripcion" cols="30" rows="10" required></textarea>
        </div>
    );
}

export default Descripcion;