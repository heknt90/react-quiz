import React, { Component } from 'react';
import Drawer from './Drawer/Drawer';
import MenuToggle from './MenuToggle/MenuToggle';

class NavMenu extends Component {
    state = {
        isOpen: false,
        links: [
            {to: '/', label: 'Главная'},
            {to: '/quiz-creator', label: 'Создать викторину'},
            {to: '/auth', label: 'Авторизация'},
        ]
    }

    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Drawer isClose={ !this.state.isOpen } links={ this.state.links } />
                <MenuToggle isClose={ !this.state.isOpen } onToggle={ this.toggleMenu } />
            </React.Fragment>
        );
    }
}

export default NavMenu;