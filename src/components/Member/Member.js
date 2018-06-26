import React from 'react'

const imageBaseUrl = 'image/members/';
const baseBlogUrl = 'https://medium.com/@youthtechtokyo/';
const members = [
    {name:"RINTARO", image:'rintaro.jpg', blog: ''},
    {name:"MAO", image:'mao.jpg', blog: ''},
    {name:"SHIHO", image:'shiho.jpg', blog: ''},
    {name:"TAKE", image:'take.jpg', blog: ''},
    {name:"DAI", image:'dai.jpg', blog: ''},
    {name:"KANA", image:'kana.jpg', blog: ''},
    {name:"ROKA", image:'roka.jpg', blog: ''},
    {name:"HIROMA", image:'hiroma.jpg', blog: ''},
    {name:"YUKO", image:'yuko.jpg', blog: ''},
    {name:"YASU", image:'yasu.jpg', blog: ''},
    {name:"YOSHIKA", image:'yoshika.jpg', blog: ''}
];

const User = ({user}) => (
    <a href={baseBlogUrl + user.blog} className="author">
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