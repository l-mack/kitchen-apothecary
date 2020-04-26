import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';



function Home (props){
    return(
        
            <div className="hero">
                <div className="wrapper">
                    
                    <Header />

                        <main className="wrapper">

                            <div className="homeTextBox">
                                <p className="homeText">
                                    Apothecary Kitchen allows you to search various medicinal plant based on their beneficial qualities.  Learn about which plants can help you with feel better and improve your health.
                                </p>

                            <Link
                                className="displayBttn"
                                to="/kitchen-apothecary/search">
                                    search plants
                            </Link>

                            <Link to="/kitchen-apothecary/displayall">
                                    display all
                            </Link>
                            </div>
                            
                        </main>

                </div>
            </div>
    )
}


export default Home;