import React, { Component } from 'react';

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

    render(){

        return(
            <form action="">
                <label>
                    <select onChange={this.handleChange} className="whichBenefit" id="whichBenefit">
                        <option value="selectProperty">What would you like help with: </option>
                        <option value="anxiety">Anxiety</option>
                        <option value="immune support">Immune Support</option>
                        <option value="inflammation">Inflammation</option>
                        <option value="circulatory support">Circulatory Support</option>
                        <option value="engery boost">Energy Boost</option>
                    </select>
                </label>
                <button className="selectBttn" onClick={ (e) => this.props.getBenefit(e, this.state.userSelection)}>Select</button>
            </form>
        )
    }

}

    export default Form;