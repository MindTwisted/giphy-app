import React from 'react';
import PropTypes from 'prop-types';

import './GifItem.css';

const GifItem = (props) => {
    return (
        <div className="GifItem">
            <div className="GifItem__image">
                <img src={props.imageUrl}
                     alt={props.title}/>
            </div>
            <div className="GifItem__body">
                <a href={props.url}
                   target="_blank"
                   className="GifItem__title">
                    {props.title}
                </a>
            </div>
        </div>
    )
};

GifItem.defaultProps = {
    title: 'Some gif ;)'
};

GifItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default GifItem;