import React, { Component } from 'react'
import FormName from './FormName';
import FormEmail from './FormEmail';
import FormPhone from './FormPhone';
import Confirm from './Confirm';

export class UserForm extends Component {

    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { firstname, lastname, email, phone } = this.state
        const values = { firstname, lastname, email, phone }
        switch (this.state.step) {
            case 1:
                return (
                    <FormName
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormEmail
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <FormPhone
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <h1>Success</h1>
                )
        }
    }
}

export default UserForm
