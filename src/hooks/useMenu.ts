import { useState } from "react"
import { deepClone, removeObjectById, findIndexById } from "../utils/array"
import { fakeMenu } from "@/fakeData/fakeMenu" 
import { MenuProduct } from "@/types/Product"
//@ts-ignore
import { syncBothMenus } from "../api/product"


export const useMenu = () => { 
    const [menu, setMenu] = useState<MenuProduct[] | undefined>(undefined)

    //Comportements (Gestionnaire de state)
    const handleAdd = (newProduct: MenuProduct, username: string) => {
       if (menu) { 
        //Copie du tableau
        const menuCopy = deepClone(menu)

        //Manip copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]
        //Update State
        setMenu(menuUpdated)
        syncBothMenus(username, menuUpdated)
      }
      }
  
      const handleDelete = (idOfProductToDelete: string, username:string) => {
        if (menu) {
          //Copie du state
        const menuCopy = deepClone(menu)
        //Manip copie de state
        const menuUpdated = removeObjectById(idOfProductToDelete, menuCopy)
        //Update State
        setMenu(menuUpdated)
        syncBothMenus(username, menuUpdated)
      }
      }
  
      const handleEdit = (productBeingEdited: MenuProduct, username: string) => { 
        if (menu) {//Copie du state
        const menuCopy = deepClone(menu)
        //Manip copie de state
        const indexOfProductToEdit = findIndexById(productBeingEdited.id, menu)
        menuCopy[indexOfProductToEdit] = productBeingEdited
        //Update State
        setMenu(menuCopy)
        syncBothMenus(username, menuCopy) }    
      }
  
      const resetMenu = (username: string) => {
        setMenu(fakeMenu.LARGE)
        syncBothMenus(username, fakeMenu.LARGE)
    }

    return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
}
