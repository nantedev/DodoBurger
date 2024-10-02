import { useContext } from 'react'
import OrderContext from '../../../../../../../context/OrderContext'
import Form from "./Form"
import EditInfoMessage from './EditInfoMessage'

export default function EditForm() {
  //State
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext) 

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
  //Affichage
  return (
  <Form 
  product={productSelected} 
  onChange={handleChange} 
  ref={titleEditRef}
  >
    <EditInfoMessage />
  </Form>
  )
}
