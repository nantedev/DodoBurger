import styled from "styled-components";

export default function Product({title, imageSource, price}) {
  return (
    <ProduitStyled>
    <div className="image">
        <img src={imageSource} alt={title} />
    </div>
    <div className="info-text"> 
    <div className="title">{title}</div>
        <div className="description">
            <div className="price">{price}</div>
            <button className="add-button">Ajouter</button>
        </div>
    </div>
    </ProduitStyled>
  )
}

const ProduitStyled = styled.div`
        background: red;
        width: 240px;
        height: 330px;
        display: grid;
        grid-template-rows: 65% 1fr;
        box-sizing: border-box;
        padding: 0 20px 10px;

        .image {
        border: 1px solid pink;
        width: 100%;
        height: auto;
        margin-top: 30px;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
        }
        
        .description {
            border: 1px solid blue;
        }
`;