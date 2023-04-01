import styled from "styled-components";

function RecipeCard({ recipe }) {
    return (
        <RecipeBox>
            <img src={process.env.PUBLIC_URL + recipe.image} />
            <div className="recipe-content">
                <h4>{recipe.title}</h4>
                <p>{recipe.content}</p>
            </div>
        </RecipeBox>
    )
}

export default RecipeCard;


const RecipeBox = styled.div`
    width: 215px;
    height: 308px;
    background-color: #fff;
    border-radius: 8px;

    img {
        width: 100%;
        height: 174px;
        object-fit: cover;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .recipe-content {
        padding: 16px;
    }

    .recipe-content h4 {
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        color: #EA8841;
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f0f0;
    }

    .recipe-content p {
        font-size: 16px;
        font-weight: 300;
        text-align: left;
        line-height: 1.3;
        margin-top: 10px;
    }
`