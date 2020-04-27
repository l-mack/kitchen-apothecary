import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

function DisplayAll(props){
    return(
        

        <ul className="displayAllGrid">

            {props.displayAllPlants.map( (plants)=>{
            
                const imgPath = `https://firebasestorage.googleapis.com/v0/b/project5-e9638.appspot.com/o/${plants.imgName}?alt=media&token=${plants.imgToken}`;
                
                return(

                    <li className="displayAllItem">
                        <div className="imgCont">
                            <img src={imgPath} alt={plants.name} />
                            <div className="displayMask">
                                <ul className="plantGridTextbox">
                                    <li key={plants.tId}>
                                        <p className="fieldName">type: </p>
                                        <p>{plants.type}</p>
                                    </li>

                                    <li key={plants.bId}>
                                        <p className="fieldName">benefit: </p>
                                        <p>{plants.benefit}</p>
                                    </li>

                                    <li key={plants.cId}>
                                        <p className="fieldName">caution: </p>
                                        <p>{plants.caution}</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <h3>{plants.name}</h3>
                    </li>

                    )
                }) 
            }

            <Link className="homeBttnDisplay" to="/kitchen-apothecary/">home</Link>

        </ul>
    )
}

export default DisplayAll;