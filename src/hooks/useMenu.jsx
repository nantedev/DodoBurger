import { useState } from "react"
import { deepClone, removeObjectById } from "../utils/array"
import { fakeMenu } from "../fakeData/fakeMenu"

export const useMenu = () => { 
    const [menu, setMenu] = useState(fakeMenu.MEDIUM)
    //Comportements (Gestionnaire de state)
    const handleAdd = (newProduct) => {
        //Copie du tableau
        const menuCopy = deepClone(menu)
        //Manip copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]
        //Update State
        setMenu(menuUpdated)
      }
  
      const handleDelete = (idOfProductToDelete) => {
        //Copie du state
        const menuCopy = deepClone(menu)
        //Manip copie de state
        const menuUpdated = removeObjectById(idOfProductToDelete, menuCopy)
        //Update State
        setMenu(menuUpdated)
      }
  
      const handleEdit = (productBeingEdited) => { 
        //Copie du state
        const menuCopy = deepClone(menu)
        //Manip copie de state
        const indexOfProductToEdit = menu.findIndexById((product) => product.id === productBeingEdited.id)
        menuCopy[indexOfProductToEdit] = productBeingEdited
        //Update State
        setMenu(menuCopy)     
      }
  
      const resetMenu = () => {
        setMenu(fakeMenu.SMALL)
    }

    return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
}
