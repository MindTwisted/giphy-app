import React, {Component} from 'react';
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
                <DebounceInput className="form-control"
                               placeholder="Search"
                               minLength={2}
                               debounceTimeout={300}
                               onChange={this.handleChange}/>
            </div>
        )
    }
}

export default SearchBox;