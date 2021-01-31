import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class VehicleDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        const styles = { button: { margin: 15 } };
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1>Enter Vehicle Details</h1>
                    <TextField
                        hintText="Enter Vehicle Number"
                        floatingLabelText="Vehicle Number"
                        onChange={handleChange('vehicleNumber')}
                        defaultValue={values.vehicleNumber}
                    />
                    <br />
                    <TextField
                        hintText="Enter Car Make"
                        floatingLabelText="Car Make"
                        onChange={handleChange('carMake')}
                        defaultValue={values.carMake}
                    />
                    <br />
                    <TextField
                        hintText="Enter Model"
                        floatingLabelText="Model"
                        onChange={handleChange('model')}
                        defaultValue={values.model}
                    />
                    <br />
                    <TextField
                        hintText="Enter Model Year"
                        floatingLabelText="Model Year"
                        onChange={handleChange('modelYear')}
                        defaultValue={values.modelYear}
                    />
                    <br />
                    <TextField
                        hintText="Enter Mileage"
                        floatingLabelText="Mileage"
                        onChange={handleChange('mileage')}
                        defaultValue={values.mileage}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
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

export default VehicleDetails;
