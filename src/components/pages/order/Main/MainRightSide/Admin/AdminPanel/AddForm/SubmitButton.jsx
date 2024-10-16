import React from 'react'
import SubmitMessage from './SubmitMessage'
import Button from '../../../../../../../reusable-ui/Button'

export default function SubmitButton({isSubmitted}) {
  return (
    <>
          <Button 
          className="submit-button" 
          label="Ajouter un nouveau produit au menu" 
          version="success"/>
          {isSubmitted &&  (<SubmitMessage />)}
      </>
  )
}
