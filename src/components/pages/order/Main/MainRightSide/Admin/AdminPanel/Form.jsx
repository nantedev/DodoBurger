import styled from 'styled-components';
import TextInput from '../../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import { getInputTextsConfig } from './inputTextsConfig';
import React from 'react';
import SelectInput from '../../../../../../reusable-ui/SelectInput';

const isAvailableOptions = [
  {value: true, label:"En stock"},
  {value: false, label:"En rupture"},
]

const isPublicisedOptions = [
  {value: true, label:"Sans pub"},
  {value: false, label:"Avec pub"},
]


const Form = React.forwardRef(({product, onSubmit, onChange, onFocus, onBlur, children}, ref) => {
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
                 onFocus={onFocus}
                 onBlur={onBlur}
                 ref={ref && input.name === "title" ? ref : null}
              />
             ))}

              <SelectInput name="isAvailable" options={isAvailableOptions} className="is-available" id="3"/>
              <SelectInput name="isPublicised" options={isPublicisedOptions} className="is-publicised" id="4"/>
             
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
    grid-column-gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
    "title title title"
    "image-source image-source image-source"
    "price is-available is-publicised"
    ;

    .title {
      grid-area : title;    
    }
    .image-Source {
      grid-area : image-source;
    }
    .price {
      grid-area : price;
    }
    .is-available {
      grid-area: is-available;
    }
    .is-publicised {
      grid-area: is-publicised;
    }

  }

  .footer{
    grid-area: footer;
    display: flex;
    align-items: center;
  }
`; 
