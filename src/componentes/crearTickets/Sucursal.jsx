import React from "react";

function Sucursal () {
    return(
        <div className="inputbox">  
            <label>Sucursal</label>
                <select name="sucursal" id="sucursal" required>
                    <option value=""></option>
                    <option value="occidental">Occidental</option>
                    <option value="federalismo">Federalismo</option>
                    <option value="manuelacuna">Manuel Acuña</option>
                </select>
        </div>
    );
}

export default Sucursal;