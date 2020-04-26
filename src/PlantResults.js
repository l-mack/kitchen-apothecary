import React from 'react';


function PlantResults(props){

    return(
       
          props.displayPlant.map( (selectedBenefit) => {

              const imgPath = `https://firebasestorage.googleapis.com/v0/b/project5-e9638.appspot.com/o/${selectedBenefit.imgName}?alt=media&token=${selectedBenefit.imgToken}`;

            return ( 
              <div>

                <div className = "imgCont">
                  <img src={imgPath} alt={selectedBenefit.name}/>
                </div>
                <h3>{selectedBenefit.name}</h3>

                <ul className = "plantGridTextbox">
                  <li key = {selectedBenefit.tId}>
                    <p className = "fieldName">type: </p>
                    <p>{selectedBenefit.type}</p>
                  </li>

                  <li key = {selectedBenefit.bId}>
                    <p className = "fieldName">benefit: </p>
                    <p>{selectedBenefit.benefit}</p>
                  </li>

                  <li key = {selectedBenefit.cId}>
                    <p className = "fieldName">caution: </p>
                    <p>{selectedBenefit.caution}</p>
                  </li>
                </ul>
              
              </div>
          
            )
        })  
    )
}

export default PlantResults;