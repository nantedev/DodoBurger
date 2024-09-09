import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { FiCheck } from 'react-icons/fi';
import {theme} from '../../../../../../theme'
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';

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
          <div className='empty-image'>Aucune Image</div> }
        </div>
      <div className="input-fields">
        <TextInput 
        name="title" 
        value={newProduct.title} 
        type="text" 
        placeholder="Nom du produit (ex: Super Dodo Burger)" 
        onChange={handleChange}
        Icon={<FaHamburger />}
        version="minimalist"
        />
        <TextInput 
        name="imageSource" 
        value={newProduct.imageSource} 
        type="text" 
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"  
        onChange={handleChange}
        Icon={<BsFillCameraFill />}
        version="minimalist"
        />
        <TextInput 
        name="price" 
        value={newProduct.price ? newProduct.price : ""} 
        type="text" 
        placeholder="Prix"  
        onChange={handleChange}
        Icon={<MdOutlineEuro />}
        version="minimalist"
        />
      </div>
      <div className="submit">
        <div className='submit-button'>
          <Button label="Ajouter un nouveau produit au menu" version="success"/>
        </div>
        {isSubmitted &&  (
          <div className='submit-message'>
          <FiCheck className='icon'/> 
          <span className="message">Ajouté avec succès !</span>
        </div>)}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
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
  grid-column-gap: 20px;
  grid-row-gap: 8px;

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


  .empty-image {
    /* background-color: green; */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }

  }

  .input-fields{
    grid-area: input-fields ;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit{
    /* background: green; */
    grid-area: submit;
    display: flex;
    align-items: center;

    .submit-button{
      width: 50%;
    }

    .submit-message{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;

      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }
      
      .message {
        margin-left: 5px;
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.success};
      }
    }
  }
`; 
