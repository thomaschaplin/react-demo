import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, TextField, RaisedButton } from 'material-ui';

export class FormPhone extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep()
    }

    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Phone Number' />
                    <TextField
                        hintText="Enter Your Phone Number"
                        floatingLabelText="Phone"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={{ margin: 15 }}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={{ margin: 15 }}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPhone
