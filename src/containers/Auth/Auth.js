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
        value:  '',
        formControls: {
            email: '',
            password: ''
        }
    }

    changeHandler = (event) => {
        console.log('changed input value', event.target.type)
        const formControls = this.state.formControls
        formControls[event.target.type] = event.target.value
        this.setState({ formControls })
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    render() {
        return (
            <div className={cls.join(' ')}>
                <h1>Авторизация</h1>
    
                <form>
                    <Input 
                        type="email"
                        label="Введите ваш email" 
                        value={ this.state.formControls.email }
                        changeHandler={ event => this.changeHandler(event) } />
                    <Input 
                        type="password"
                        label="Введите пароль" 
                        value={ this.state.formControls.password }
                        changeHandler={ event => this.changeHandler(event) } />
    
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
