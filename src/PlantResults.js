import React from 'react';
import aloeVera from './assets/aloeVera.jpg';
import ashwagandha from './assets/ashwagandha.jpg';
import chamomile from './assets/chamomile.jpg';
import echinacea from './assets/echinacea.jpg';
import garlic from './assets/garlic.jpg';
import ginger from './assets/ginger.jpg';
import ginseng from './assets/ginseng.jpg';
import marigold from './assets/marigold.jpg';
import turmeric from './assets/turmeric.jpg';
import valerian from './assets/valerian.jpg';


function PlantResults(props){

  let imgPath = '';

    return(
       
          props.displayPlant.map( (selectedBenefit) => {
    
              if (selectedBenefit.name === 'Aloe Vera'){
                imgPath = aloeVera;
              } else if (selectedBenefit.name === 'Ashwagandha'){
                imgPath = ashwagandha;
              } else if (selectedBenefit.name === 'Chamomile'){
                imgPath = chamomile;
              } else if (selectedBenefit.name === 'Echinacea'){
                imgPath = echinacea;
              } else if (selectedBenefit.name === 'Garlic'){
                imgPath = garlic;
              } else if (selectedBenefit.name === 'Ginger'){
                imgPath = ginger;
              } else if (selectedBenefit.name === 'Ginseng'){
                imgPath = ginseng;
              } else if (selectedBenefit.name === 'Marigold'){
                imgPath = marigold;
              } else if (selectedBenefit.name === 'Turmeric'){
                imgPath = turmeric;
              } else if (selectedBenefit.name === 'Valerian'){
                imgPath = valerian;
              }

            return ( 
              
                <div className = "plantGrid"> 

                    <div className = "imgCont">
                      <img src={imgPath} alt={selectedBenefit.name}/>
                    </div>
                    <h3>{selectedBenefit.name}</h3>

                    <ul className = "plantGridTextbox">
                      <li key = {selectedBenefit.tId}><p className = "fieldName">type: </p><p>{selectedBenefit.type}</p></li>
                      <li key = {selectedBenefit.bId}><p className = "fieldName">benefit: </p><p>{selectedBenefit.benefit}</p></li>
                      <li key = {selectedBenefit.cId}><p className = "fieldName">caution: </p><p>{selectedBenefit.caution}</p></li>
                    </ul>
              
                </div>
          
            )
        })  
    )
}

export default PlantResults;