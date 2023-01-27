import React from 'react';
import classes from './NotFound.module.scss'

const NotFound = props => {
    const cls = [
        classes.NotFound,
        'page'
    ]
    
    return (
        <div className={cls.join(' ')}>
            <h1>404 Not Found</h1>
        </div>
    );

}

export default NotFound;