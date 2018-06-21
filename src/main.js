import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar.js"
import Top from './components/Main/Main.js'
import Activity from "./components/Activity/Activity";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Member from "./components/Member/Member";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <NavBar/>
                    <Header/>

                    <Route exact path='/' component={Top} />
                    <Route path='/Top' component={Top} />
                    <Route path='/About' component={About} />
                    <Route path='/Activity' component={Activity} />
                    <Route path='/Member' component={Member} />
                    <Route path='/Contact' component={Contact} />

                    <Footer/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);