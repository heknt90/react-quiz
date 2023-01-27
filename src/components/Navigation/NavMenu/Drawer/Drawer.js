import React from 'react';
import classes from './Drawer.module.scss'

const Drawer = props => {
    const renderLinks = () => {
        return props.links.map((link, index) => {
            return (
                <li key={index}>
                    <a href={link.to}>
                        { link.label}
                    </a>
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