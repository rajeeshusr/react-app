import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class CustomerDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        const styles = { button: { margin: 15 } };
        return (
            <MuiThemeProvider>
                <>
                    <h1>Enter Customer Details</h1>
                    <TextField
                        hintText="Enter First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText="Enter Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hintText="Enter Address"
                        floatingLabelText="Address"
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </>
            </MuiThemeProvider>
        )
    }
}

export default CustomerDetails;