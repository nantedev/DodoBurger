import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';
import { getInputTextsConfig } from './inputTextsConfig';

export const EMPTY_PRODUCT = {
  id: "", 
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddForm() {

  //State
  const  { handleAddProduct, newProduct, setNewProduct } = useContext(OrderContext)
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

   const inputTexts = getInputTextsConfig(newProduct)
  
   //Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
       <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title}/>
      <div className="input-fields">
             {inputTexts.map((input) => (
              <TextInput 
                {...input}
                 onChange={handleChange}
                 Icon={input.Icon}
                 version="minimalist"
              />
             ))} 
      </div>
      <div className="submit">
        <Button className="submit-button" label="Ajouter un nouveau produit au menu" version="success"/>
        {isSubmitted &&  (<SubmitMessage />)}
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


  .input-fields{
    grid-area: input-fields ;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit{
    grid-area: submit;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
    }
  }
`; 
