import {useOrderContext} from '../../../../../../../../context/OrderContext'
import Form from "../Form/Form"
import EditInfoMessage from './EditInfoMessage'
import { useState } from 'react'
import SavingMessage from './SavingMessage'
import { useSuccessMessage } from '../../../../../../../../hooks/useSuccessMessage'
import { useParams } from 'react-router-dom'

export default function EditForm() {
  //State
  const { productSelected, setProductSelected, handleEdit, titleEditRef } = useOrderContext()
  const [valueOnFocus, setValueOnFocus] = useState<string>()
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()
  const {username} = useParams()

  //Comportements (event handlers)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = event.target
    const productBeingUpdated = {
      ...productSelected, // a les IDs
      [name]: value,
    }
    setProductSelected(productBeingUpdated) //update le formulaire
    username && handleEdit(productBeingUpdated, username) //state handler du menu qui update le menu
  }

  const handleOnFocus = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const valueOnFocus = event.target.value 
    setValueOnFocus(valueOnFocus)
  }

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const valueOnBlur = event.target.value 
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage()
    }
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
