import styled from "styled-components"
import Profile from "./Profile"
import ToggleButton from "@/components/reusable-ui/ToggleButton"
import { toast } from 'react-toastify'
import ToastAdmin from "./ToastAdmin"
import { useOrderContext } from "@/context/OrderContext"

export default function NavbarRightSide() {
  const {isModeAdmin, setIsModeAdmin} = useOrderContext()


    const displayToastNotification = () => {
      if (!isModeAdmin){
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }
  
  return (
    <NavbarRightSideStyled>
        <ToggleButton 
          isChecked={isModeAdmin}
          labelIfChecked="Désactiver le mode Admin"
          labelIfUnchecked="Activer le mode Admin"
          onToggle={displayToastNotification}
        />
        <Profile />
        <ToastAdmin />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    .toggle-button {
      border: 1px solid red;
    }
`