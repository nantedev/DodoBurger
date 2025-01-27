import SubmitMessage from './SubmitMessage'
import Button from '@/components/reusable-ui/Button'

export default function SubmitButton({isSubmitted} : {isSubmitted: boolean}) {
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
