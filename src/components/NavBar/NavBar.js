import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="outer-menu">
                <input className="checkbox-toggle" type="checkbox" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><Link to="/Top">Top</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Activity">Activity</Link></li>
                                <li><Link to="/Member">Member</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar