import styled from 'styled-components';
import ImagePreview from './ImagePreview';
import React from 'react';
import { Inputs } from './Inputs.jsx';


const Form = React.forwardRef(({product, onSubmit, onChange, onFocus, onBlur, children}, ref) => {
  //State(empty)

  //Comportement(empty)


   //Affichage
  return (
    <FormStyled onSubmit={onSubmit}>
       <ImagePreview imageSource={product.imageSource} title={product.title} />
       <Inputs product={product} onChange={onChange} onFocus={onFocus} onBlur={onBlur} ref={ref} />
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

  .footer{
    grid-area: footer;
    display: flex;
    align-items: center;
  }
`; 
