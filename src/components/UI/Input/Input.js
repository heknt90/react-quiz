import React from 'react';
import classes from './Input.module.scss'

const Input = props => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    const cls = [
        classes.Input,
    ]
    if ( props.isTouched && props.isInvalid ) {
        cls.push(classes.error)
    }

    const renderErrorMessage = () => {
        return ( props.isTouched && props.isInvalid )
            ? (
                <span className={ classes.errorMessage }>
                { props.errorMessage }
                </span>
            )
            : null        
    }

    return (
        <div className={ cls.join(' ') }>
            <label 
                htmlFor={ htmlFor }>
                    { props.label }
            </label>
            <input 
                type={ inputType } 
                id={ htmlFor }
                value={ props.value }
                onChange={ props.changeHandler }  />
            { renderErrorMessage() }
            
        </div>
    );
};

export default Input;