import React from 'react';
import classes from './MenuToggle.module.scss'

const MenuToggle = props => {
    const iconClass = props.isClose ? 'fa-bars' : 'fa-times'  
    const cls = [
        classes.MenuToggle,
        'fa',
        iconClass
    ]

    if (!props.isClose) {
        cls.push(classes.open)
    }

    return (
        <i 
            className={cls.join(' ')} 
            onClick={props.onToggle}
        >
        </i>
    );
    
}

export default MenuToggle;