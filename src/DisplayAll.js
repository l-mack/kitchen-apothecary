import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

function DisplayAll(props){
    return(

            props.displayAllPlants.map( (plants)=>{
            
                const imgPath = `https://firebasestorage.googleapis.com/v0/b/project5-e9638.appspot.com/o/${plants.imgName}?alt=media&token=${plants.imgToken}`;
            return(

                <div className="displayAllGrid">
                    
                    <div className="displayAllTextBox">
                        <p>{plants.name}</p>
                    </div>


                </div>
            )
        })  
    )
}

export default DisplayAll;