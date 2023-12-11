import React from "react";

function Usuario () {
    return(
        <div className="inputbox">
            <label>Usuario</label>
                <select name="usuario" className="usuario" required>
                    <option value=""></option>
                    <option value="oscar plascencia">Oscar Plascencia</option>
                    <option value="kenia">Kenia Cazares</option>
                    <option value="mayra">Mayra Pulido</option>
                    <option value="montse">Mounserath Navarro</option>
                    <option value="diana">Diana Cano</option>
                    <option value="celene">Celene Martinez</option>
                    <option value="myriam">Myriam Quintero</option>
                    <option value="monica">Monica Iñiguez</option>
                    <option value="marcela">Marcela Castillo</option>
                </select>
        </div>
    );
}

export default Usuario;