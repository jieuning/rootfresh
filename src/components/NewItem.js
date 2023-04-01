import { Link } from "react-router-dom";
import styled from "styled-components";

//css
import "../pages/mainPage/style.css"

//component
import Card from "./Card";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'

SwiperCore.use([Navigation]);

function NewItem({items}) {

    const NewItems = items.filter(data => data.id < 8);


    return (
        <NewContainer>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                }}
            >
                {NewItems.map((data) => (
                    <SwiperSlide>
                        <div className="main-container">
                            <Link to={`/detail/${data.id}`}>
                                <Card data={data}></Card>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-prev" />
            <button className="swiper-button-next" />
        </NewContainer>
    )
}

export default NewItem;


const NewContainer = styled.div`
    position: relative;

    .swiper-button-prev {
        width: 40px;
        height: 40px;
        position: absolute;
        top: calc(50% - 10px);
        left: -20px;
        transform: translateY(-50%);
        z-index: 20;
        border: none;
        background: url('image/menu_arrow_prev.png');
        background-size: cover;
        border-radius: 50%;
        box-shadow: 0 3px 4px rgb(0 0 0 / 16%);
    }
    .swiper-button-next {
        width: 40px;
        height: 40px;
        position: absolute;
        top: calc(50% - 10px);
        right: -20px;
        transform: translateY(-50%); 
        z-index: 20;
        border: none;
        background: url('image/menu_arrow_next.png');
        background-size: cover;
        border-radius: 50%;
        box-shadow: 0 3px 4px rgb(0 0 0 / 16%);
    }

    .swiper-button-prev::after,
    .swiper-button-next::after
     {display: none}
`
