import { useOrderContext } from "@/context/OrderContext"
import { EMPTY_PRODUCT } from '@/constants/product'
import Form from '../Form/Form'
import SubmitButton from './SubmitButton'
import { useSuccessMessage } from '@/hooks/useSuccessMessage'
import { replaceFrenchCommaWithDot } from '@/utils/maths'
import { useParams } from 'react-router-dom'


export default function AddForm() {

  //state
  const  { handleAdd, newProduct, setNewProduct } = useOrderContext()
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage()
  
  const {username} = useParams()

  //comportement
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = event.target
    setNewProduct({...newProduct, [name]: value })
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (!username) return
      const newProductToAdd = { 
        ...newProduct, 
        id: crypto.randomUUID(),
        price: replaceFrenchCommaWithDot(newProduct.price),
      } 
       handleAdd(newProductToAdd, username)
      setNewProduct(EMPTY_PRODUCT)
      displaySuccessMessage()
  } 


  
   //affichage
  return (
  <Form 
    product={newProduct} 
    onSubmit={handleSubmit} 
    onChange={handleChange}
    >
    <SubmitButton isSubmitted={isSubmitted}/>
  </Form >
  )
}
