import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { FiCheck } from 'react-icons/fi';

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
  const [isSubmitted, setIsSubmitted] = useState(false)

  //Comportement
  const handleChange = (event) => {
    const {name, value} = event.target
      setNewProduct({...newProduct, [name]: value })
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      const newProductToAdd = { ...newProduct, id: crypto.randomUUID()} 
      handleAddProduct(newProductToAdd)
      setNewProduct(EMPTY_PRODUCT)
      displaySuccessMessage()
  } 

  const displaySuccessMessage = () => { 
    setIsSubmitted(true)
    setTimeout(() => {
    setIsSubmitted(false)}, 2000)
   }
  //Affichage

  return (
    <AddFormStyled onSubmit={handleSubmit}>
       <div className="image-preview">
        {newProduct.imageSource ? 
          <img src={newProduct.imageSource} alt={newProduct.imageSource} /> : 
          <div>Aucune Image</div> }
        </div>
      <div className="input-fields">
        <input name="title" 
        value={newProduct.title} 
        type="text" 
        placeholder="Nom du produit (ex: Super Dodo Burger)" 
        onChange={handleChange}
        />
        <input 
        name="imageSource" 
        value={newProduct.imageSource} 
        type="text" 
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"  
        onChange={handleChange}
        />
        <input 
        name="price" 
        value={newProduct.price ? newProduct.price : ""} 
        type="text" 
        placeholder="Prix"  
        onChange={handleChange}
        />
      </div>
      <div className="submit">
        <button className="submit-button">Submit button</button>
        {isSubmitted &&  (
          <div className='submit-message'>
          <FiCheck /> <span>Ajouté avec succès !</span>
        </div>)}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 2px solid red;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
    "image-preview input-fields"
    "image-preview input-fields"
    "image-preview input-fields"
    ".             submit";

  height: 100%;
  width: 70%;

  .image-preview {
    grid-area: image-preview ;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .input-fields{
    background: blue;
    grid-area: input-fields ;
    display: grid;
  }

  .submit{
    background: green;
    grid-area: submit;
    display: flex;
    align-items: center;

    .submit-button{
      width: 50%;
    }

    .submit-message{
      border: 2px solid black;
    }
  }
`; 
