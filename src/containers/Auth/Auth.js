import React from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.scss'

const Auth = props => {
    const cls = [
        classes.Auth,
        'page'
    ]
    return (
        <div className={cls.join(' ')}>
            <h1>Авторизация</h1>

            <form>
                <input type="email" />
                <input type="password" />

                <Button 
                    type="primary"

                    >
                        Авторизация
                </Button>
            </form>
        </div>
    );
}

export default Auth;