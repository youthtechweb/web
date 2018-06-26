import React from 'react'

const events = [
    {
        title: "YOUTH TECH NIGHT",
        date: "2018.5.11",
        eventUrl: "https://www.facebook.com/events/175417999846409/",
        imageUrl: "image/events/0511_event.jpg",
        tags: ["Meetup", "BASE Q", "FirstEvent"]
    },
    {
        title: "SPIN-OFF EVENT in YOYOGI PARK",
        date: "2018.6.9",
        eventUrl: "https://www.facebook.com/events/755422244845340/",
        imageUrl: "image/events/0609_event.jpg",
        tags: ["YOYOGIPark", "Spin-offEvent", "LunchTime"]
    },
    {
        title: "UI/UX NIGHT ~若手デザイナー集まれ~",
        date: "2018.7.20",
        eventUrl: "",
        imageUrl: "image/events/0720_event.png",
        tags: ["talknote", "UI/UX", "design"]
    }
];

const Tags = tags => {
    let tagString = "";
    tags.forEach(tag => tagString += `#${tag} `);
    return tagString;
};

const EventElem = (
    {
        event: {
            title = '',
            date = '',
            eventUrl = '',
            imageUrl = '',
            tags = ''
        }
    }
) => (
    <div className="fuwat fuwatAnime" style={{marginTop: "10px"}}>
        <div className="container">
            <div className="col-xs-12 col-sm-3 col-md-3">
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="date">{date}</div>
                <div className="fb-info">
                    <a href={eventUrl} className="author">{title}</a>
                    <p className="message">{Tags(tags)}</p>
                    <img style={{width: "100%", height: "10%"}} src={imageUrl} alt="title"/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3">
            </div>
        </div>
    </div>
);

const Activity = () => {
    const eventList = events.map(event => (<EventElem event={event}/>));
    console.log("eventList ->", eventList);
    return (
    <div>
        <div className="">
            <div className="container">
                <div className="col-xs-12 col-sm-3 col-md-3">
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="date" style={{color: "black", fontSize: "22px", marginTop: "10px"}}>Activity</div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3">
                </div>
            </div>
        </div>
        <div>
            {eventList}
        </div>
    </div>
    )
};

export default Activity