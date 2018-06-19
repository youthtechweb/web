import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="footer-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 no-padding" style={{marginTop: "20px", paddingLeft: "0", textAlign: "center"}}>
                            <p>Copyright &copy; 2018 YOUTH TECH. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer