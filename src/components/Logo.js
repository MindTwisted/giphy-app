import React from 'react';
import PropTypes from 'prop-types';

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

Logo.propTypes = {
    text: PropTypes.string.isRequired
};

export default Logo;