import React from 'react'
import {Link} from 'react-router-dom'

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="">
                    <div className="container">
                        <div className="col-xs-12 col-sm-3 col-md-3">
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="date" style={{color: "black", fontSize: "22px", marginTop: "10px"}}>About</div>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3">
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop: "30px"}}>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div id="mintyo">
                            <div className="cd-scrolling-bg cd-color-1">
                                <div className="cd-container" id="mintyo">
                                    <div className="fuwat fuwatAnime">
                                        <center>
                                            <img style={{width: "36%"}} src="image/assets/icon_youthtech.png" alt="title" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                    </div>
                </div>
                <div className="container" style={{marginTop: "30px"}}>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div id="mintyo">
                            <div className="cd-scrolling-bg cd-color-1">
                                <div className="cd-container" id="mintyo">

                                    <div className="fuwat fuwatAnime">
                                        <div style={{marginTop: "10px"}}>
                                            <div style={{fontSize: "18px"}}>Who We Are?</div>
                                            <p>私たちはテクノロジーに関わる20代のメンバーで構成されています。</p>
                                            <p>
                                                全員が有志で、同じくテクノロジーに関わる20代を繋ぐ、仲間を繋げるプラットフォームを作っています。
                                            </p>
                                        </div>
                                        <div style={{marginTop: "30px"}}>
                                            <div style={{fontSize: "18px"}}>What We Want to do?</div>
                                            <p>
                                                私たちは私たちは一人ひとりが"オープン"に"フラット"に繋がるプラットフォームを創っていくことを目指しています。
                                            </p>
                                        </div>
                                        <div style={{marginTop: "30px"}}>
                                            <div style={{fontSize: "18px"}}>What We Do?</div>
                                            <div style={{fontSize: "16px", marginTop: "10px"}}>・オフライン</div>
                                            <p>
                                                ミートアップや勉強会、ハッカソンなど、様々な
                                                <Link to="/Activity" className="fb-info">イベント</Link> を開催し、20代が直接会って繋がれる場所を創っていきます。
                                            </p>
                                            <div style={{fontSize: "16px", marginTop: "10px"}}>・オンライン</div>
                                            <p>各種SNSを通じてオンラインで繋がるプラットフォームを提供しています。</p>
                                            <p>(現在、Connpass、Slack、Facebook、Twitter運営中)</p>
                                            <p>Facebookではクローズのコミュニティとして、内部限定のイベント等を告知しております。</p>
                                            <p>下記より、Join可能です。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                    </div>
                </div>
                <div className="fuwat fuwatAnime" style={{marginTop: "5%"}}>
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2">
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2">
                            <a href="https://youthtech.connpass.com/" className="author">
                                <img style={{width:"100%", height:"30%"}} src="image/assets/connpass_icon.jpeg" alt="title" />
                            </a>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2">
                            <a href="https://join.slack.com/t/youthtechchanel/shared_invite/enQtMzgwOTY2NDQzODYxLThlYzk1OWI5OWU0MTEwZDQ0ODkyMGMxNjI4ODFkZDhkN2U3OGNhZTQzNzZiYzMzNTliZTgxYzA4MGEzMmRhNWY" className="author">
                                <img style={{width:"100%", height:"30%"}} src="image/assets/slack_icon.png" alt="title" />
                            </a>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2">
                            <a href="https://www.facebook.com/groups/763788887157082" className="author">
                                <img style={{width:"100%", height:"30%"}} src="image/assets/facebook_icon.png" alt="title" />
                            </a>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2">
                            <a href="https://twitter.com/youthtechtokyo" className="author">
                                <img style={{width:"100%", height:"30%"}} src="image/assets/twitter_icon.png" alt="title" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2">
                    </div>
                </div>
            </div>
        );
    }
}

export default About