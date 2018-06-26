import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openStatus: false
        };
    }
    openMenu(openStatus) {
        this.setState({openStatus: openStatus})
    }

    render() {
        const { openStatus }= this.state;
        return (
            <div className="outer-menu">
                <input className="checkbox-toggle" type="checkbox" checked={this.state.openStatus} onClick={() => this.openMenu(!openStatus)}/>
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><Link to="/Top" onClick={() => this.openMenu(false)}>Top</Link></li>
                                <li><Link to="/About" onClick={() => this.openMenu(false)}>About</Link></li>
                                <li><Link to="/Activity" onClick={() => this.openMenu(false)}>Activity</Link></li>
                                <li><Link to="/Member" onClick={() => this.openMenu(false)}>Member</Link></li>
                                <li><Link to="/Contact" onClick={() => this.openMenu(false)}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar