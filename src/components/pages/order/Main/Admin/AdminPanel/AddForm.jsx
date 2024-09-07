import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

const EMPTY_PRODUCT = {
  id: "", 
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddForm() {

  //State

  const  { handleAddProduct } = useContext(OrderContext)
  const [ newProduct, setNewProduct ] = useState(EMPTY_PRODUCT)


  //Comportement
  const handleChange = (event) => {
    const {name, value} = event.target
      setNewProduct({...newProduct, [name]: value })
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      const newProductToAdd = { ...newProduct, id: crypto.randomUUID()} 
      handleAddProduct(newProductToAdd)
  } 

  
  //Affichage

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input name="title" value={newProduct.title} type="text" placeholder="Name" onChange={handleChange}/>
        <input name="imageSource" value={newProduct.imageSource} type="text" placeholder="Image URL"  onChange={handleChange}/>
        <input name="price" value={newProduct.price ? newProduct.price : ""} type="text" placeholder="Prix"  onChange={handleChange}/>
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
