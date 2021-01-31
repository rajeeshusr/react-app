import React, { Component } from "react";
import { CustomerDetails } from "./CustomerDetails";
import { VehicleDetails } from "./VehicleDetails";
import { Display } from "./Display";
export class UserInfo extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    address: '', 
    vehicleNumber: '', 
    carMake: '', 
    model: '', 
    modelYear: '', 
    mileage: ''
  }

  //Proceed to next step
  nextStep = () => {
    const { step, firstName, vehicleNumber } = this.state;
    if(step === 1){
      if(firstName ){
        this.setState({
          step: step + 1
        });  
      }
    }
    else if(step === 2){
      if(vehicleNumber ){
        this.setState({
          step: step + 1
        });  
      }
    }
    else{
      this.setState({
        step: step + 1
      }); 
    }
  }

  //Go Back to next step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  //Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step, firstName, lastName, address, vehicleNumber, carMake , model, modelYear, mileage } = this.state;
    const values = { firstName, lastName, address, vehicleNumber, carMake , model, modelYear, mileage };

    switch (step) {
      case 1:
        return (
          <CustomerDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <VehicleDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Display
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        return (
          <h1>Default</h1>
        )
    }
  }
}

export default UserInfo;