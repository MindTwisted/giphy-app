import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';

import './SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.searchGifs(event.target.value);
    }

    render() {
        return (
            <div className="SearchBox">
                <DebounceInput className="SearchBox__input"
                               placeholder="Search"
                               minLength={2}
                               debounceTimeout={1000}
                               onChange={this.handleChange}/>
            </div>
        )
    }
}

SearchBox.propTypes = {
    searchGifs: PropTypes.func.isRequired
};

export default SearchBox;