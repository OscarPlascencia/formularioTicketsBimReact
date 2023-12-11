import React from "react";
import "../../hojas-de-estilo/hojas-de-estilo-crearTickets/Prioridad.css"

function Prioridad () {
    return(
        <div className="inputbox">
            <label>Prioridad</label>
                <select name="prioridad" className="prioridad" required>
                    <option value=""></option>
                    <option className="alta" value="alta">Alta</option>
                    <option className="media" value="media">Media</option>
                    <option className="baja" value="baja">Baja</option>
                </select>
        </div>
    );
}

export default Prioridad;