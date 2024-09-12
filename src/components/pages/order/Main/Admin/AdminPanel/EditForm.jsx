import { useContext, useState } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import ImagePreview from './ImagePreview';
import { getInputTextsConfig } from './inputTextsConfig';
import TextInput from '../../../../../reusable-ui/TextInput';

export default function EditForm() {
  //State
  const { productSelected, setProductSelected, handleEdit } = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(productSelected)

  //Comportements (event handlers)
  const handleChange = (event) => {
    const {name, value} = event.target
    const productBeingUpdated = {
      ...productSelected, // a les IDs
      [name]: value,
    }
    setProductSelected(productBeingUpdated) //update le formulaire
    handleEdit(productBeingUpdated) //state handler du menu qui update le menu
  }
  //Affichage
  return (
    <EditFormStyled>
        <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
        <div className="input-fields">
             {inputTexts.map((input) => (
              <TextInput 
              key={input.id}
                 {...input}
                 onChange={handleChange}
                 Icon={input.Icon}
                 version="minimalist"
              />
             ))} 
      </div>
      <div className="submit"></div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
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
      height: 100%;
    }
  }
`;