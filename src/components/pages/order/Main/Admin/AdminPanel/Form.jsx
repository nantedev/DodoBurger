import styled from 'styled-components';
import TextInput from '../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import { getInputTextsConfig } from './inputTextsConfig';
import React from 'react';


const Form = React.forwardRef(({product, onSubmit, onChange, children}, ref) => {
  //State(empty)

  //Comportement(empty)

   const inputTexts = getInputTextsConfig(product)
   //Affichage
  return (
    <FormStyled onSubmit={onSubmit}>
       <ImagePreview imageSource={product.imageSource} title={product.title} />
      <div className="input-fields">
             {inputTexts.map((input) => (
              <TextInput 
              key={input.id}
                {...input}
                 onChange={onChange}
                 Icon={input.Icon}
                 version="minimalist"
                 ref={ref && input.name === "title" ? ref : null}
              />
             ))} 
      </div>
      <div className="footer">
       {children}
      </div>
    </FormStyled>
  )
})

export default Form
const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
    "image-preview input-fields"
    "image-preview input-fields"
    "image-preview input-fields"
    ".             footer";
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;


  .input-fields{
    grid-area: input-fields ;
    display: grid;
    grid-row-gap: 8px;
  }

  .footer{
    grid-area: footer;
    display: flex;
    align-items: center;
  }
`; 
