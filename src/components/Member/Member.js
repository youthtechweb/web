import React from 'react'

const imageBaseUrl = 'image/members/';
const members = [
    {name:"RINTARO", image:'rintaro.jpg'},
    {name:"MAO", image:'mao.jpg'},
    {name:"SHIHO", image:'shiho.jpg'},
    {name:"TAKE", image:'take.jpg'},
    {name:"DAI", image:'dai.jpg'},
    {name:"KANA", image:'kana.jpg'},
    {name:"ROKA", image:'roka.jpg'},
    {name:"HIROMA", image:'hiroma.jpg'},
    {name:"YUKO", image:'yuko.jpg'},
    {name:"YASU", image:'yasu.jpg'},
    {name:"YOSHIKA", image:'yoshika.jpg'}
];

const User = ({user}) => (
    <a href="" className="author">
        <img style={{width: "100%", height: "30%"}} src={imageBaseUrl + user.image} alt="title"/>
    </a>
);

const RowMember = ({user1 = null, user2 = null}) => (
    <div className="fuwat fuwatAnime" style={{marginTop: "5%"}}>
        <div className="row">
            <div className="col-xs-1 col-sm-3 col-md-3">
            </div>
            <div className="col-xs-5 col-sm-3 col-md-3">
                {user1 ? <User user={user1} /> : ""}
            </div>
            <div className="col-xs-5 col-sm-3 col-md-3">
                {user2 ? <User user={user2} /> : ""}
            </div>
            <div className="col-xs-1 col-sm-3 col-md-3">
            </div>
        </div>
    </div>
);

const Member = () => {
    const memberList = [];
    for(let i = 0; i < members.length; i+=2) {
        memberList.push(<RowMember user1={members[i]} user2={members[i + 1]}/>)
    }
    return (
        <div>
            <div className="container">
                <div className="col-xs-12 col-sm-3 col-md-3">
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="date" style={{color:"black", fontSize:"22px", marginTop:"10px"}}>Member</div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3">
                </div>
            </div>
            {memberList}
        </div>
    );
};

export default Member