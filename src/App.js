import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Header from './Header.js';
import Form from './Form.js'
import PlantResults from './PlantResults.js';
import background from './assets/backgroundImg1.jpg'


class App extends Component{
  constructor() {
    super();

		this.state = {
      plants: [],
      userSelection: "",
      plantMatch: [],
      HomeImg: true
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

    // in the below code, I was attempting to display an image with a button before the search results are displayed, but I was not able to get it functioning.  

  // showHomeImg = () =>{
  //     this.setState({HomeImg : true});
  // }

  // hideHomeImg = () =>{
  //     this.setState({HomeImg : false});
  // }

  // renderHomeImg = () =>{
  //   if(this.state.showHomeImg){
  //     return(
  //     <div className="backgroundImgCont">
  //       <img src={background} alt="wooden table decorated with plants and herbs" />
  //     <button className="displayBttn" onClick={this.hideHomeImg} >What would you like help with?</button>
  //     </div>
  //     )
  //   } else {
  //   return(
  //   null
  //     )
  //   }
  // }

  render(){
    
    return (
      <div className="wrapper">

        < Header />

        < Form getBenefit={this.whichBenefit} />

        <main className = "wrapper">
          
          
          {/* {this.renderHomeImg()} */}

          <div className = "plantGrid">
            < PlantResults displayPlant={this.state.plantMatch} />
          </div>

        </main>

        </div>
      );
    }
  }
  

export default App;
