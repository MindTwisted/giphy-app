import React from 'react';
import {CSSTransition} from 'react-transition-group';

import './Fade.css';

const Fade = ({children, ...props}) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);

export default Fade;