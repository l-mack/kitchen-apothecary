import React from 'react';
import logo from './assets/logo.svg'

function Header(props){
    return(

        <header className = "wrapper">
        
            <div className = "headerFlex">

                <h1>Apothecary Kitchen</h1>
                <div className = "imgCont">
                    <img className="logo" src={logo} />
                </div>

            </div>
            
            <h2>a medicinal plant and herb database</h2>
            
        </header>
    )
}

export default Header;