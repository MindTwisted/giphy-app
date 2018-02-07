import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {TransitionGroup} from 'react-transition-group';
import Waypoint from 'react-waypoint';

import './App.css';

import Fade from '../components/transitions/Fade';

import Logo from '../components/Logo';
import SearchBox from '../components/SearchBox';
import GifItem from '../components/GifItem';

import * as GifsActions from '../redux/actions';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pagination: {
                loadCount: 25,
                offset: 0,
                totalCount: 0
            }
        };

        this.searchGifs = this.searchGifs.bind(this);
        this.loadMoreGifs = this.loadMoreGifs.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadRandomGifs(this.state.pagination.loadCount);
    }

    searchGifs(query) {
        this.props.actions.searchGifs(
            query,
            this.state.pagination.loadCount,
            this.state.pagination.offset
        )
            .then((result) => {
                this.setState({
                    pagination: {
                        ...this.state.pagination,
                        searchQuery: query,
                        offset: 0,
                        totalCount: result.data.pagination.total_count
                    }
                });

                if (!result.data.data.length) {
                    this.props.actions.loadRandomSingleGif();
                }
            });
    }

    loadMoreGifs() {
        const totalCount = this.state.pagination.totalCount;
        const loadCount = this.state.pagination.loadCount;
        const searchQuery = this.state.pagination.searchQuery;
        let offset = this.state.pagination.offset;

        if (totalCount && this.props.gifs.length < totalCount) {
            offset += loadCount;

            this.setState({
                pagination: {
                    ...this.state.pagination,
                    offset
                }
            });

            this.props.actions.loadMoreGifs(searchQuery, loadCount, offset);
        }
    }

    render() {
        const gifs = this.props.gifs;

        const renderGifs = () => {
            return gifs.map((gif) => {
                return (
                    <Fade key={gif.id}>
                        <div className="App__gifItem">
                            <GifItem title={gif.title}
                                     url={gif.url}
                                     imageUrl={gif.images.fixed_width.url}/>
                        </div>
                    </Fade>
                )
            });
        };

        const renderNotFound = () => {
            return (
                <h2 className="App__notFound">Not Found</h2>
            )
        };

        const renderSingleGif = () => {
            const singleGif = this.props.gifs.singleGif;

            return (
                <div className="App__singleGif">
                    {renderNotFound()}
                    <GifItem url={singleGif.url}
                             imageUrl={singleGif.image_original_url}/>
                </div>
            )
        };

        return (
            <div className="App">
                <div className="App__header">

                    <div className="App__logo">
                        <Logo text="Giphy App"/>
                    </div>

                    <div className="App__searchBox">
                        <SearchBox searchGifs={this.searchGifs}/>
                    </div>

                </div>

                <div className="App__body">
                    {
                        gifs.length > 0 ?
                            <TransitionGroup className="App__content">
                                {renderGifs()}

                                <Waypoint onEnter={this.loadMoreGifs}/>
                            </TransitionGroup> :
                            <div>
                                {gifs.singleGif ? renderSingleGif() : renderNotFound()}
                            </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gifs: state.gifs
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GifsActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


