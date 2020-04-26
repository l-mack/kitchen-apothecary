import React from 'react';
import logo from './assets/logo.png'

function Header(props){
    return(

        <header className = "wrapper">
        
            <div className = "headerFlex">
                <h1>Apothecary Kitchen</h1>
                <div className = "logo">
                    <img src={logo} />
                </div>
            </div>
            
            <h2>a medicinal plant and herb database</h2>

        </header>
    )
}

export default Header;