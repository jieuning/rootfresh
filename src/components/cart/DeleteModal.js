import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/cartSlice";

function DeleteModal({ modal, setModal, checkedList }) {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const cartList = state.cart
    console.log(cartList)

    return (
        <ModalContainer>
            <div className="modal-container modal-background">
                <div className="modal-container delete-modal">
                    <h3>선택 항목을 삭제하시겠습니까?</h3>
                    <ButtonContainer>
                        <button className="cancle-button" 
                        onClick={() => setModal(!modal)}>취소</button>
                        <button className="ok-button" 
                        onClick={() => {
                            checkedList.forEach((item) => {
                                dispatch(removeItem(item.id))
                                setModal(!modal)
                            })
                        }}>확인</button>
                    </ButtonContainer>
                </div>
            </div>
        </ModalContainer>
    )
}

export default DeleteModal;


const ModalContainer = styled.div`
    .modal-container {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
    }
    .modal-background {
        width: 100%;
        height: 100%;
        z-index: 99;
        background: rgba(0,0,0,.4);
    }
    .delete-modal {
        width: 360px;
        height: 156px;
        z-index: 1;
        box-sizing: border-box;
        background: #fff;
        border-radius: 6px;
    }
    h3 {
        font-size: 16px;
        text-align: center;
        margin: 50px 20px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    height: 56px;
    border-top: 1px solid #f5f5f5;

    .cancle-button {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 16px;
        background: #fff;
        font-weight: 500;
        color: #2A6834;
        border-right: 1px solid #f5f5f5;
        border-bottom-left-radius: 6px;
    }
    .ok-button {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 16px;
        background: #fff;
        font-weight: 500;
        color: #2A6834;
        border-bottom-right-radius: 6px;
    }
`