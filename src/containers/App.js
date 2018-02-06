import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';

import './App.css';

import Logo from '../components/Logo';
import SearchBox from '../components/SearchBox';
import GifItem from '../components/GifItem';

import * as GifsActions from '../redux/actions';

class App extends Component {
    componentDidMount() {
        this.props.actions.loadRandomGifs();
    }

    render() {
        const gifs = this.props.gifs;

        const renderGifs = () => {
            return gifs.map((gif) => {
                return (
                    <Col md="3"
                         key={gif.id}>
                        <div className="App__gifItem">
                            <GifItem title={gif.title}
                                     url={gif.url}
                                     imageUrl={gif.images.fixed_width.url}/>
                        </div>
                    </Col>
                )
            });
        };

        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col md="3">

                            <Logo text="Giphy App"/>

                        </Col>
                        <Col md="9">

                            <SearchBox/>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>

                            <div className="App__content">
                                <Row>
                                    {gifs.length > 0 ? renderGifs() : null}
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </Container>
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

