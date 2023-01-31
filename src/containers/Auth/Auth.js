import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import validateControl from '../../utils/forms/validation/validation'
import classes from './Auth.module.scss'

const cls = [
    classes.Auth,
    'page'
]

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                type: 'email',
                label: "Введите ваш email" ,
                value: "",
                isInvalid: true,
                isTouched: false,
                validations: {
                    required: true,
                    email: true
                },
                errorMessage: "Введите корректный email"
            },
            password: {
                type: 'password',
                label: "Введите пароль" ,
                value: "",
                isInvalid: true,
                isTouched: false,
                validations: {
                    required: true,
                    minLength: 6
                },
                errorMessage: "Пароль должен быть не короче 6 символов"
            }
        }
    }

    isFormValid = () => {
        let isValid = true
        Object.keys(this.state.formControls).forEach(controlName => {
            if (this.state.formControls[controlName].isInvalid) {
                isValid = false
            }
        })
        return isValid
    }

    submitFormHandler = (event) => {
        event.preventDefault()
    }

    changeHandler = (event, controlName) => {
        const formControls = this.state.formControls
        const control = formControls[controlName]
        const isFormValid = this.isFormValid()

        control.value = event.target.value
        if ( !control.isTouched ) {
            control.isTouched = true
        }
        control.isInvalid = validateControl(control)
        
        formControls[controlName] = control

        this.setState({ 
            formControls,
            isFormValid 
        })
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    renderInputs = () => {
        
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <Input 
                    key={ index }
                    type={ control.type }
                    label={ control.label } 
                    value={ control.value }
                    isInvalid={ control.isInvalid }
                    isTouched={ control.isTouched }
                    errorMessage={ control.errorMessage }
                    changeHandler={ event => this.changeHandler( event, controlName ) } />
            )
        })

    }

    render() {
        return (
            <div className={cls.join(' ')}>
                <h1>Авторизация</h1>
    
                <form onSubmit={this.submitFormHandler}>
                    
                    { this.renderInputs() }
    
                    <Button 
                        type="success"
                        disabled={ !this.isFormValid() } >
                            Авторизация
                    </Button>
                    <Button 
                        type="primary"
                        disabled={ !this.isFormValid() } >
                            Зарегистрироваться
                    </Button>
                </form>
            </div>
        );
    }
}
