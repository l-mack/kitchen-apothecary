import React, { Component } from 'react';

// form to get user input about which benefit they want, then pass it back up to App.js where we will use it
// Logical Flow:
    // user picks a benefit from a select drop-down
    // save selection to state
    // on submit, we call a function to pass the user selection back up to App.js

// what we need
    // a form with a drop down
    // state!
    // a function from props

class Form extends Component{

    constructor(){
        super();
        this.state = {
            userSelection: ''
        }
    }

handleChange = (event) =>{
    this.setState({
        userSelection: event.target.value
    })
}


    // deffered = (e) => {
    //     this.props.getBenefit(e, this.state.userSelection)
    // }


    render(){
        // this.props.getBenefit();
        return(
            <form action="">
                <label>
                    <select onChange={this.handleChange} className="whichBenefit" id="whichBenefit">
                        <option value="select-property">Select a Benefit Property</option>
                        <option value="anti-anxiety">Anti-Anxiety</option>
                        <option value="immune support">Immune Support</option>
                        <option value="anti-inflammatory">Anti-Inflammatory</option>
                    </select>
                </label>
                <button onClick={ (e) => this.props.getBenefit(e, this.state.userSelection)}>Select</button>
            </form>
        )
    }

}

    export default Form;