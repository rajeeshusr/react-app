import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export class Display extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { firstName, lastName, address, vehicleNumber, carMake, model, modelYear, mileage } } = this.props;
        const styles = { button: { margin: 15 } };
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1>Customer Details</h1>
                    <div>
                        First Name : {firstName}
                    </div>
                    <div>
                        Last Name : {lastName}
                    </div>
                    <div>
                        Address : {address}
                    </div>
                    <h1>Vehicle Details</h1>
                    <div>
                        Vehicle Number : {vehicleNumber}
                    </div>
                    <div>
                        Car Make : {carMake}
                    </div>
                    <div>
                        Model : {model}
                    </div>
                    <div>
                        Model Year : {modelYear}
                    </div>
                    <div>
                        Mileage : {mileage}
                    </div>

                    <br />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Display;
