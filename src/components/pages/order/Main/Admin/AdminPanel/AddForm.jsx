import { useContext, useState } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import Form from './form';
import Button from '../../../../../reusable-ui/Button';
import SubmitMessage from "./SubmitMessage"


export default function AddForm() {

  //State
  const  { handleAddProduct, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)

  //Comportement
  const handleChange = (event) => {
    const {name, value} = event.target
    setNewProduct({...newProduct, [name]: value })
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      const newProductToAdd = { ...newProduct, id: crypto.randomUUID()} 
      handleAddProduct(newProductToAdd)
      setNewProduct(EMPTY_PRODUCT)
      displaySuccessMessage()
  } 

  const displaySuccessMessage = () => { 
    setIsSubmitted(true)
    setTimeout(() => {
    setIsSubmitted(false)}, 2000)
   }

  
   //Affichage
  return (
  <Form 
    product={newProduct} 
    onSubmit={handleSubmit} 
    onChange={handleChange}
    isSubmitted={isSubmitted}
    >
      <>
          <Button 
          className="submit-button" 
          label="Ajouter un nouveau produit au menu" 
          version="success"/>
          {isSubmitted &&  (<SubmitMessage />)}
      </>
    </Form >
  )
}
