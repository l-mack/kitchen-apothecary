import React from 'react';

function PlantResults(props){
    return(
        <main>
            <ul>
          {
          props.displayPlant.map( (selectedBenefit) => {
            return ( <li>{selectedBenefit.name}</li>
            )
          })
          }
        </ul>
        </main>
    )
}

export default PlantResults;