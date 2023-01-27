import React, { Component } from 'react';
import NavMenu from '../../components/Navigation/NavMenu/NavMenu';
import classes from './Layout.module.scss'

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>  
                <NavMenu />
                <main>
                    { this.props.children }
                </main>              
            </div>
        );
    }
}

export default Layout;