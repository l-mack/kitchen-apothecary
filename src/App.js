import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Form from './Form.js'
// import PlantResults from './PlantResults.js';

class App extends Component{
  constructor() {
    super();

		this.state = {
      plants: [],
      userSelection: ""
    }
  }

  componentDidMount(){
      const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();
        for(let key in data){
          newState.push(data[key]);
        }
        this.setState({
          plants: newState            
        }, () =>{
          console.log(this.state.plants)
        })
    });
  }

    // get user selection from form component
      whichBenefit = (e, userChoice) => {
        e.preventDefault();
        this.findPlants(userChoice);
      }

      // filter plants array to find plants that match the chosen benefit and save to state

      findPlants = (benefit) => {
        
        const plantResults = this.state.plants.filter( (benefitSelection) => {
          return benefitSelection.benefit === benefit;
        })
        this.setState({
          plantMatch: plantResults
        })
      }

  render(){
    return (
      <div className="formFlex">

        <h1>Apothecary Kitchen</h1>

        < Form getBenefit={this.whichBenefit} />

        {/* < PlantResults displayPlant={this.state.plantMatch} /> */}

        {/* <main>
            <ul>
          {
          this.state.plantMatch.map( (selectedBenefit) => {
            return ( <li>{selectedBenefit.name}</li>
            )
          })
          }
        </ul>
        </main> */}

      </div>
    );
  }
  }
  

export default App;
