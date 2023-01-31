import React, { Component } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Drawer from './Drawer/Drawer';
import MenuToggle from './MenuToggle/MenuToggle';

class NavMenu extends Component {
    state = {
        isOpen: false,
        links: [
            {to: '/', label: 'Главная'},
            {to: '/quiz/create', label: 'Создать викторину'},
            {to: '/auth', label: 'Авторизация'},
        ]
    }

    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    closeMenu = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Drawer isClose={ !this.state.isOpen } links={ this.state.links } clickHandler={ this.closeMenu } />
                <MenuToggle isClose={ !this.state.isOpen } onToggle={ this.toggleMenu } />
                { 
                    this.state.isOpen 
                        ? <Backdrop clickHandler={this.closeMenu } />
                        : null 
                }
                
            </React.Fragment>
        );
    }
}

export default NavMenu;