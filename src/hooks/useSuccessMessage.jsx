import { useState } from "react"

export const useSuccessMessage = () => { 
    //state
    const [isSubmitted, setIsSubmitted] = useState(false)

    //comportements
    const displaySuccessMessage = () => { 
        setIsSubmitted(true)
        setTimeout(() => {
        setIsSubmitted(false)
    }, 2000)
       }

    return { isSubmitted, displaySuccessMessage}
   }