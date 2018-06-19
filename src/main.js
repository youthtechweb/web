import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar.js";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                test
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);