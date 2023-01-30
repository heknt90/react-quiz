import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
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
            },
            password: {
                type: 'password',
                label: "Введите пароль" ,
                value: "",
            }
        }
    }

    submitFormHandler = (event) => {
        event.preventDefault()
    }

    changeHandler = (event, controlName) => {
        const formControls = this.state.formControls
        const control = formControls[controlName]
        
        control.value = event.target.value

        formControls[controlName] = control
        this.setState({ formControls })
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
                    key={ controlName + index }
                    type={ control.type }
                    label={ control.label } 
                    value={ control.value }
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
    
                        >
                            Авторизация
                    </Button>
                    <Button 
                        type="primary"
    
                        >
                            Зарегистрироваться
                    </Button>
                </form>
            </div>
        );
    }
}
