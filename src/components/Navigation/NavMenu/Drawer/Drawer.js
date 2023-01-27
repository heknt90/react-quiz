import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Drawer.module.scss'

const Drawer = props => {
    const renderLinks = () => {
        return props.links.map((link, index) => {
            return (
                <li key={index} >
                    <NavLink 
                        to={link.to} 
                        onClick={ props.clickHandler }>
                        { link.label}
                    </NavLink>
                </li>
            )
        })
    }

    const cls = [
        classes.Drawer
    ]

    if (!props.isClose) {
        cls.push(classes.open)
    }

    return (
        <ul className={cls.join(' ')}>
            { renderLinks() }
        </ul>
    );
}

export default Drawer;