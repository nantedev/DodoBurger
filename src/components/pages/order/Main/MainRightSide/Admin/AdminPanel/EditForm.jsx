import { useContext } from 'react'
import OrderContext from '../../../../../../../context/OrderContext'
import Form from "./Form"
import EditInfoMessage from './EditInfoMessage'
import { useState } from 'react'
import SavingMessage from './SavingMessage'
import { useSuccessMessage } from '../../../../../../../hooks/useSuccessMessage'

export default function EditForm() {
  //State
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext) 
  const [valueOnFocus, setValueOnFocus] = useState()
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()
  
  //Comportements (event handlers)
  const handleChange = (event) => {
    const {name, value} = event.target
    const productBeingUpdated = {
      ...productSelected, // a les IDs
      [name]: value,
    }
    setProductSelected(productBeingUpdated) //update le formulaire
    handleEdit(productBeingUpdated, username) //state handler du menu qui update le menu
  }

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value 
    setValueOnFocus(valueOnFocus)
  }

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value 
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage()
    }
    console.log("valueOnBlur :",valueOnBlur)
  }

  //Affichage
  return (
  <Form 
  product={productSelected} 
  onChange={handleChange} 
  onFocus={handleOnFocus}
  onBlur={handleOnBlur}
  ref={titleEditRef}
  >
    {isSaved ? <SavingMessage /> : <EditInfoMessage />
    }
  </Form>
  )
}
