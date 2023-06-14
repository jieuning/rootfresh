import styled from "styled-components";
import "../pages/mainPage/style.css"
//component
import CommaFormat from "./CommaFormat";


function Thefresh({ items, navigate }) {

  /* 해당 아이템 필터 */
  const freshFruit = items.filter(data => data.id >= 48 && data.id <= 50);
  const freshSeafood = items.filter(data => data.id >= 51 && data.id <= 53);

  return (
    <TheFreshContainer>
      <div>
        <div className="fresh-banner">
          <div className="fresh-title">
            <h3>더 신선한 싱그러운 제철 채소·과일</h3>
            <button className="fresh-more-btn"
              onClick={() => navigate('/menu/THE신선')}>
              더 보기
            </button>
          </div>
          <img src={process.env.PUBLIC_URL + '/image/thefresh1.png'} alt="감귤 이미지"/>
        </div>
        <ul className="fresh-item-wrap">
          {freshFruit.map((data, i) => (
            <li key={i} className="fresh-items"
              onClick={() => navigate(`/detail/${data.id}`)}>
              <div className="item-image-wrap">
                <img src={process.env.PUBLIC_URL + data.image} 
                  alt="대하 이미지"/>
              </div>
              <div className="fresh-txt-wrap">
                <p>{CommaFormat(data.price)}<span>원</span></p>
                <span>{data.content}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="fresh-banner">
          <div className="fresh-title">
            <h3>더 신선한 제철 해산물</h3>
            <button className="fresh-more-btn"
              onClick={() => navigate('menu/THE신선')}>
              더 보기
            </button>
          </div>
          <img src={process.env.PUBLIC_URL + '/image/thefresh2.png'} />
        </div>
        <ul className="fresh-item-wrap">
          {freshSeafood.map((data, i) => (
            <li key={i} className="fresh-items"
              onClick={() => navigate(`/detail/${data.id}`)}>
              <div className="item-image-wrap">
                <img src={process.env.PUBLIC_URL + data.image} />
              </div>
              <div className="fresh-txt-wrap">
                <p>{CommaFormat(data.price)}<span>원</span></p>
                <span>{data.content}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TheFreshContainer>
  )
};

export default Thefresh;

const TheFreshContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: flex-start;
  margin-top: 30px;
  flex-wrap: wrap;
  .fresh-items {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .fresh-txt-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5;
  }
  .fresh-txt-wrap > span {
    font-size: 14px;
    font-weight: 400;
  }
  .fresh-txt-wrap > p {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-top: 10px;
  }
  .fresh-item-wrap {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  .item-image-wrap {
    overflow: hidden;
    border-radius: 10px;
  }
  .fresh-items img {
    flex-direction: column;
    width: 180px;
    transition: .4s;
  }
  .fresh-items img:hover {
    transform: scale(105%);
  }
  .fresh-banner {
    position: relative;
  }
  .fresh-banner img {
    width: 580px;
    height: 320px;
    object-fit: contain;
    border-radius: 10px;
  }
  .fresh-title {
    position: absolute;
    bottom: 0;
    text-align: left;
    padding: 30px;
  }
  .fresh-title h3 {
    z-index: 30;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #fff;
  }
  .fresh-more-btn {
    border-radius: 30px;
    border: none;
    padding: 4px 10px;
    background-color: #fff;
  }
  @media(max-width: 1229px) {
    gap: 30px;
    .fresh-banner img {
      width: calc(100% - 40px);
      height: auto;
    }
    .fresh-item-wrap {
      display: flex;
      gap: 10px;
      width: calc(100% - 40px);
      margin-top: 10px;
    }
    .fresh-items img {
      width: 100%;
      height: auto;
    }
    .fresh-txt-wrap span {
      font-size: 12px;
    }
    .fresh-txt-wrap p {
      font-size: 12px;
    }
    .fresh-title {
      padding: 20px;
    }
    .fresh-title h3 {
      font-size: 18px;
      font-weight: 600;
    }
    .fresh-more-btn {
      font-size: 12px;
    }
  }
`