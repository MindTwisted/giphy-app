import React from 'react';
import {Input} from 'reactstrap';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="SearchBox">
            <Input type="text"
                   placeholder="Search"/>
        </div>
    )
};

export default SearchBox;