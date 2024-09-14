import styled from 'styled-components';
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';
import { getInputTextsConfig } from './inputTextsConfig';


export default function Form({product, onSubmit, onChange, isSubmitted}) {
  //State

  //Comportement

   const inputTexts = getInputTextsConfig(product)

   //Affichage
  return (
    <FormStyled onSubmit={onSubmit}>
       <ImagePreview imageSource={product.imageSource} title={product.title}/>
      <div className="input-fields">
             {inputTexts.map((input) => (
              <TextInput 
              key={input.id}
                {...input}
                 onChange={onChange}
                 Icon={input.Icon}
                 version="minimalist"
              />
             ))} 
      </div>
      <div className="submit">
        <Button className="submit-button" label="Ajouter un nouveau produit au menu" version="success"/>
        {isSubmitted &&  (<SubmitMessage />)}
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
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
