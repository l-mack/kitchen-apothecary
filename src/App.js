import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Header from './Header.js';
import Form from './Form.js'
import PlantResults from './PlantResults.js';

class App extends Component{
  constructor() {
    super();

		this.state = {
      plants: [],
      userSelection: "",
      plantMatch: []
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
          
        }
        )
      }

  render(){
    return (
      <div className="formFlex">

        < Header />

        < Form getBenefit={this.whichBenefit} />

        <main className = "wrapper">

        < PlantResults displayPlant={this.state.plantMatch} />

        </main>

        </div>
      );
    }
  }
  

export default App;
