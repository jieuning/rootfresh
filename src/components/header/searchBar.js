import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SearchBar() {

    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    /* onChange 핸들러 */
    const KeyWordChangeHandler = (e) => {
        setKeyword(e.target.value);
    }
    
    /* 새로고침 방지와 navigate 작동 */
    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/search?keyword=${keyword}`);
    }
 
    return (
        <>
            <SearchWrap>
                <form onSubmit={onSubmitHandler}>
                    <input className="search-box"
                        type="text"
                        value={keyword}
                        onChange={KeyWordChangeHandler}
                        placeholder="원하시는 상품을 입력해주세요" />
                    <button className="search-btn"
                        type="submit">
                            <img src={process.env.PUBLIC_URL + '/image/search_icon.png'} />
                    </button>
                </form>
            </SearchWrap>
        </>
    )
};

export default SearchBar;

const SearchWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 420px;
    height: 38px;
    border: 1px solid #2A6834;
    border-radius: 30px;

    .search-box {
        width: 320px;
        border: none;
        font-size: 14px;
        letter-spacing: -0.06em;
        margin-left: 16px;
    }

    .search-box:focus {
        outline: none;
    }

    .search-btn {
        position: absolute;
        right: 0;
        background: none;
        border: none;
        margin-right: 16px;
    }

    .search-btn img {
        width: 20px;
        object-fit: contain;
    }
`