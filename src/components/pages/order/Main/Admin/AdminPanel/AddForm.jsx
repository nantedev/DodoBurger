import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {

  const  { handleAddProduct } = useContext(OrderContext)

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource: "https://img.freepik.com/premium-photo/tasty-burger-isolated-white-background-fresh-hamburger-fast-food-with-beef-vegetables-cheese_969517-159.jpg?w=1380",
    price: 2.5
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      handleAddProduct(newProduct)
  } 

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Image URL"/>
        <input type="text" placeholder="Prix"/>
      </div>
      <button className="submit-buton">Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
    "image-preview input-fields"
    "image-preview input-fields"
    "image-preview input-fields"
    ".             submit-buton";

  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: image-preview ;
  }
  .input-fields{
    background: blue;
    grid-area: input-fields ;
    display: grid;
  }
  .submit-buton{
    background: green;
    grid-area: submit-buton ;
  }
`; 
