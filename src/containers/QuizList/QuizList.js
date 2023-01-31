import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './QuizList.module.scss'

const cls = [
    classes.QuizList,
    'page'
]
export default class QuizList extends Component {
    state = {
        quizes: [ 1, 2, 3 ]
    }

    renderQuiz = () => {
        return this.state.quizes.map( (quiz, index) => {
            return (
                <li key={index}>
                    <Link to={ "quiz/" + quiz }> Test { quiz } </Link>
                </li>
            )
        })
    }

    render() {
        console.log( this.renderQuiz() )

        return (
            <div className={cls.join(' ')}>
                <div>
                    <h1>Список викторин</h1>

                    <ul>
                        { this.renderQuiz() }
                    </ul>
                </div>
            </div>
        )
    }
}