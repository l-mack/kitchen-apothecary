import React from 'react';
import { NavLink as Link } from 'react-router-dom';


function Home (props){
    return(
        
        <div>
        
            

            <button className="displayBttn"> <Link to= "/kitchen-apothecary/search">What would you like help with?</Link></button>
        
        </div>
    )
}


export default Home;