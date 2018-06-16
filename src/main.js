import React from 'react'
import ReactDOM from 'react-dom'
import {Col, Row} from 'react-bootstrap'
import './style.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                test
            </Router>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);