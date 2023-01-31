import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from './QuizCreator.module.scss'

export default class QuizCreator extends Component {
    state = {
        quizes: [],
        formControls: {

        }
    }

    render() {
        const cls = [
            classes.QuizCreator,
            'page'        
        ]

        return (
            <div className={cls.join(' ')}>
                <h1>Создать викторину</h1>

                <form onSubmit={event => event.preventDefault()}>
                    <Input
                        label='Вопрос' />
                    <hr />
                    <Input
                        label='Вариант 1' />
                    <Input
                        label='Вариант 2' />
                    <Input
                        label='Вариант 3' />
                    <Input
                        label='Вариант 4' />

                    <Button >Click</Button>
                </form>
            </div>
        )
    }
}