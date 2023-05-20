import styled from "styled-components";
//component
import CommaFormat from "./CommaFormat";
//responsive
import { Pc, Mobile } from "./mobile/responsive";


function Card({ data }) {
  return (
    <CardWrap>
      <li>
        <div className="img-wrap">
          <Image src={process.env.PUBLIC_URL + data.image}
            alt={data.title} />
        </div>
        <div className="card-info">
          <h4 className="item-title">{data.title}</h4>
          <span className="discount-rate" >{data.discount_rate}</span>
          <span className="price">{CommaFormat(data.price)}원</span>
          <Pc>
            <span className="dimmed-price">{data.dimmed_price}</span>
          </Pc>
          <Mobile>
            <p className="dimmed-price">{data.dimmed_price}</p>
          </Mobile>
        </div>
      </li>
    </CardWrap>
  )
};

export default Card;

const CardWrap = styled.ul`
  margin-bottom: 20px;
  .img-wrap {
    border-radius: 10px;
    overflow: hidden;
  }
  .card-info {
    width: 285px;
    text-align: left;
    font-weight: 400;
  }
  .item-title {
    margin: 10px 0;
    font-weight: 400;
    line-height: 1.5;
  }
  .item-price:nth-child(1) span,
  .item-price:nth-child(2) span{
    margin-right: 4px;
  }
  .discount-rate {
    color: #f1622f;
    font-weight: 700;
  }
  .price {
    font-weight: 700;
    letter-spacing: -0.0em;
  }
  .dimmed-price {
    font-size: 14px;
    font-weight: 500;
    color: #b5b5b5;
    text-decoration: line-through;
  }
  @media (max-width: 1229px) {
    margin-bottom: 0;
    .img-wrap {
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
    .card-info {
      width: 100%;
      text-align: left;
      font-weight: 400;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.3;
    }
    .item-title {
      font-size: 14px;
      margin: 5px 0 0 0;
    }
    .price {
      margin-left: 5px;
    }
    .dimmed-price {
      font-size: 12px;
      font-weight: 300;
    }
  }
`
const Image = styled.img`
  width: 285px;
  transition: .4s;
  &:hover {
    transform: scale(105%);
  }
  @media (max-width: 1229px) {
    width: 100%;
    height: auto;
  }
`
