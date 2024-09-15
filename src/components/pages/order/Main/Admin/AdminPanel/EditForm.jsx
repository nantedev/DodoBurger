import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import Form from './form';
import EditInfoMessage from './EditInfoMessage'

export default function EditForm() {
  //State
  const { productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext) 

  //Comportements (event handlers)
  const handleChange = (event) => {
    const {name, value} = event.target
    const productBeingUpdated = {
      ...productSelected, // a les IDs
      [name]: value,
    }
    setProductSelected(productBeingUpdated) //update le formulaire
    handleEdit(productBeingUpdated) //state handler du menu qui update le menu
  }
  //Affichage
  return (
  //   <EditFormStyled>
  //       <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
  //       <div className="input-fields">
  //            {inputTexts.map((input) => (
  //             <TextInput 
  //             key={input.id}
  //                {...input}
  //                onChange={handleChange}
  //                Icon={input.Icon}
  //                version="minimalist"
  //                ref={input.name === "title" ? titleEditRef : null}
  //             />
  //            ))} 
  //     </div>
  //     <div className="submit">
  //             <EditInfoMessage />
  //     </div>
  //   </EditFormStyled>
  // );
  <Form 
  product={productSelected} 
  onChange={handleChange} 
  ref={titleEditRef}
  >
    <EditInfoMessage />
  </Form>
  )
}
