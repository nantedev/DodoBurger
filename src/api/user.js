import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from './firebase-config'
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (idUser) => { 
    const docRef = doc(db, "users", idUser)

    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists) {
        const userReceived = docSnapshot.data()
     return userReceived
    }
}

export const createUser = (userId) => { 
    // cachette
    const docRef = doc(db, "users", userId)
    //nourriture
    const nourriture = {
        username: userId,
        menu: fakeMenu.LARGE,
    }
    //setDoc(CACHETTE, NOURRITURE)
    setDoc(docRef, nourriture)
 }