import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, RaisedButton, List, ListItem } from 'material-ui';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep()
    }

    render() {
        const { values: { firstname, lastname, email, phone } } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Confirm' />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstname}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastname}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Phone"
                            secondaryText={phone}
                        />
                    </List>
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

export default Confirm
