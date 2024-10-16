import styled from 'styled-components';
import TextInput from '../../../../../../../reusable-ui/TextInput';
import { getTextInputConfig, getSelectInputConfig } from './inputConfig';
import SelectInput from '../../../../../../../reusable-ui/SelectInput';
import React from 'react';


export const Inputs = React.forwardRef(({product, onChange, onFocus, onBlur}, ref) => {

  const textInputs = getTextInputConfig(product)
  const selectInputs = getSelectInputConfig(product)

   //Affichage
  return (
    <InputsStyled>
             {textInputs.map((input) => (
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

             {selectInputs.map((select) => (
                  <SelectInput  
                  {...select} 
                  key={select.id} 
                  onChange={onChange} 
                  onFocus={onFocus}
                  onBlur={onBlur}
                  />
             ))}

    </InputsStyled>
  )
})

const InputsStyled = styled.form`
    grid-area: input-fields ;
    display: grid;
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
    "title title title"
    "image-source image-source image-source"
    "price is-available is-publicised";


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
`
