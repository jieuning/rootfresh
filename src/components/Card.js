import styled from "styled-components";
import "../pages/mainPage/style.css"

//component
import CommaFormat from "./CommaFormat";


function Card({data}) {

    return (
        <ul className="card-wrap">
            <li>
                <div className="img-wrap">
                    <Image src={process.env.PUBLIC_URL + data.image} />
                </div>
                <div className="card-info">
                    <div className="item-price">
                        <h4 className="item-title">{data.title}</h4>
                        <span className="discount-rate" >{data.discount_rate}</span>
                        <span className="price">{CommaFormat(data.price)}<span>원</span></span>
                        <span className="dimmed-price">{data.dimmed_price}</span>
                    </div>
                </div>
            </li>
        </ul>
    )
};

export default Card;

const Image = styled.img`
    transition: .4s;
    &:hover {
        transform: scale(105%);
    }
`
