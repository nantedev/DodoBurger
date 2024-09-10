import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import HintMessage from '../HintMessage';

export default function EditForm() {
  const { productSelected } = useContext(OrderContext)

  return (
    <EditFormStyled>
        <span>{productSelected && productSelected.title}</span>
        <HintMessage />
        
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
  border: 1px solid red;
`;