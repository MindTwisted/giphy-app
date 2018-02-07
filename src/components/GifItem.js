import React from 'react';

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

export default GifItem;