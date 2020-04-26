import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import firebase from './firebase';
import Header from './Header.js';
import Home from './Home.js';
import Form from './Form.js'
import PlantResults from './PlantResults.js';
import DisplayAll from './DisplayAll';


class App extends Component{
  constructor() {
    super();

		this.state = {
      plants: [],
      userSelection: "",
      plantMatch: [],
      HomeImg: true,
      
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
        const oldPlantsArray = [...this.state.plants];
        const plantResults = oldPlantsArray.filter( (benefitSelection) => {
          return benefitSelection.benefit === benefit;
        })        
        this.setState({
          plantMatch: plantResults  
        }
      )
    }

    // scroll to plant results

    // scrollTo = () => {
    //   const element = document.getElementById('form');
    //   console.log(element);
    //   element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    // }

  render(){
    
    return (
      <Router>
        
            <Route path="/kitchen-apothecary" component={Home} exact />

            <Route path="/kitchen-apothecary/search">

              <Header />
              
              <main className="wrapper">
                
                <Form getBenefit={this.whichBenefit} />

                <div className="plantGrid">
                  <PlantResults displayPlant={this.state.plantMatch} />
                </div>

            <Route path="/kitchen-apothecary/displayall">
              
              <DisplayAll displayAllPlants={this.state.plants} />
              
            </Route>

              </main>

              

            </Route>
        
      </Router>
    );
  }
  
  }
  

export default App;
