import { useState } from "react"
import { deepClone, removeObjectById, findIndexById } from "../utils/array"
import { fakeMenu } from "../fakeData/fakeMenu"
import { syncBothMenus } from "../api/product"

export const useMenu = () => { 
    const [menu, setMenu] = useState(undefined)

    //Comportements (Gestionnaire de state)
    const handleAdd = (newProduct, username) => {
        //Copie du tableau
        const menuCopy = deepClone(menu)
        //Manip copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]
        //Update Statez
        setMenu(menuUpdated)
        syncBothMenus(username, menuUpdated)
      }
  
      const handleDelete = (idOfProductToDelete, username) => {
        //Copie du state
        const menuCopy = deepClone(menu)
        //Manip copie de state
        const menuUpdated = removeObjectById(idOfProductToDelete, menuCopy)
        //Update State
        setMenu(menuUpdated)
        syncBothMenus(username, menuUpdated)
      }
  
      const handleEdit = (productBeingEdited) => { 
        //Copie du state
        const menuCopy = deepClone(menu)
        //Manip copie de state
        const indexOfProductToEdit = findIndexById(productBeingEdited.id, menu)
        menuCopy[indexOfProductToEdit] = productBeingEdited
        //Update State
        setMenu(menuCopy)     
      }
  
      const resetMenu = (username) => {
        setMenu(fakeMenu.SMALL)
        syncBothMenus(username, fakeMenu.SMALL)
    }

    return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
}
