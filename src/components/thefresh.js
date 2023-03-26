import React from "react";

//css
import "../pages/mainPage/style.css"

function thefresh(props) {

    const freshFruit = props.items.filter(data => data.id > 47 && data.id < 50);
    const freshSeafood = props.items.filter(data => data.id > 49 && data.id < 52);

    return (
        <ul className="thefresh-wrap">
            <div style={{marginRight: "40px"}}>
                <li className="title-background">
                    <img src={process.env.PUBLIC_URL + '/image/thefresh1.png'} />
                </li>
                {freshFruit.map((data, i) => (
                    <li className="fruit-items">
                        <img src={process.env.PUBLIC_URL + data.image} />
                        <div className="fruit-txt-wrap">
                            <h5>{data.title}</h5>
                            <span>{data.content}</span>
                            <p>{data.price}</p>
                        </div>
                    </li>
                ))}
            </div>
            <div>
                <li className="title-background">
                    <img src={process.env.PUBLIC_URL + '/image/thefresh2.png'} />
                </li>
                {freshSeafood.map((data, i) => (
                    <li className="fruit-items">
                        <img src={process.env.PUBLIC_URL + data.image} />
                        <div className="fruit-txt-wrap">
                            <h5>{data.title}</h5>
                            <span>{data.content}</span>
                            <p>{data.price}</p>
                        </div>
                    </li>
                ))}
            </div>
        </ul>
    )
}

export default thefresh;