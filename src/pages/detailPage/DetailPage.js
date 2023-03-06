import React from "react";
import { useParams } from "react-router-dom";
import "./style.css"

function
    DetailPage(props) {

    const { id } = useParams();

    console.log(id);

    return (
        <React.Fragment>
            <div className="about-container">
                <div className="detail-image">
                    <img src={process.env.PUBLIC_URL + props.items[id].image} />
                </div>
                <div className="item-info">
                    <div className="title-wrap">
                        <h4 className="detail-title">{props.items[id].title}</h4>
                        <p className="discount-rate">{props.items[id].discount_rate}</p>
                        <p>{props.items[id].detail_price}<span className="won">원</span></p>
                        <p className="detail-dimmed-price">{props.items[id].dimmed_price}</p>
                    </div>
                    <dl>
                        <div>
                            <dt>판매단위</dt>
                            <dd>{props.items[id].sales_unit}</dd>
                        </div>
                        <div>
                            <dt>중량/용량</dt>
                            <dd>{props.items[id].net}</dd>
                        </div>
                        <div>
                            <dt>원산지</dt>
                            <dd>상품설명/상세정보 참조</dd>
                        </div>
                        <div>
                            <dt>유통기한</dt>
                            <dd>출고일 기준, 1년 이상 남은 상품을 배송해 드립니다</dd>
                        </div>
                        <div>
                            <dt>상품선택</dt>
                            <dd>2000</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DetailPage;