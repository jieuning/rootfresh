import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {

    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    /* onChange 핸들러 */ 
    const handleKeyWordChange = (e) =>
        setKeyword(e.target.value)

    return (
        <>
            <div className="search-bar">
                <input className="search-box"
                    type="text"
                    value={keyword}
                    onChange={handleKeyWordChange}
                    placeholder="원하시는 상품을 입력해주세요" />
                <button className="search-btn" onClick={() => 
                    navigate(`/search?keyword=${keyword}`)} />
            </div>
        </>
    )
};

export default SearchBar;