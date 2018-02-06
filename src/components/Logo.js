import React from 'react';
import logo from '../static/images/logo.svg';
import './Logo.css';

const Logo = (props) => {
    return (
        <div className="Logo">

            <img src={logo}
                 alt="Logo"
                 className="Logo__image"/>

            <div className="Logo__text">
                {props.text}
            </div>

        </div>
    )
};

export default Logo;