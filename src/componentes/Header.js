import React from "react";
import logo from '../imagenes/logo.png';

function Header() {
    return ( 
        <header>
            <div className="aplicacion-tareaa">
                <img
                    src={logo}
                    className='logo-epn'
                    alt="logo"
                    width='100px'
                    height= '100px'
                />
                <h1>Aplicacion de Tareas</h1>
                <p>Autor: Adrian Ramos</p>
            </div>
        </header>
    );
  }

  export default Header;