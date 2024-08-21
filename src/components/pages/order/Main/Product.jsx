import styled from "styled-components";

export default function Product({title, imageSource, price}) {
  return (
    <ProduitStyled>
    <div className="image">
        <img src={imageSource} alt={title} />
    </div>
    <div className="info-text"> 
        <div className="description">
            <div className="title">{title}</div>
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

        .image {
        border: 1px solid pink;
        width: 100px;
        height: auto;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        }
        .description {
            border: 1px solid pink;
        }
`;