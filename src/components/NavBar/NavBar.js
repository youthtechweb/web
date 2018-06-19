import React from 'react'

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
                                <li><a href="/main">Top</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/activity">Activity</a></li>
                                <li><a href="/member">Member</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar