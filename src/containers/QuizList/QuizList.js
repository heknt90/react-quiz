import React, { Component } from 'react';
import classes from './QuizList.module.scss'

const cls = [
    classes.QuizList,
    'page'
]

const QuizList = props => {

    return (
        <div className={cls.join(' ')}>
            <div>
                <h1>Список викторин</h1>

                <ul>
                    <li>
                        <a href='#'>
                            Test 1
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Test 2
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Test 3
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default QuizList;