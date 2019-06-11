import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, TextField, RaisedButton } from 'material-ui';

export class FormName extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Your Name' />
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstname')}
                        defaultValue={values.firstname}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastname')}
                        defaultValue={values.lastname}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={{ margin: 15 }}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormName
