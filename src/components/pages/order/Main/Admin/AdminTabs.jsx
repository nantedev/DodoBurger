import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  
  const {
    isCollapsed, 
    setIsCollapsed, 
    isEditSelected, 
    setIsEditSelected, 
    isAddSelected, 
    setIsAddSelected 
  } = useContext(OrderContext)
  

    const selectTab = (tabSelected) => {
      setIsCollapsed(false)

      if (tabSelected === "add") {
        setIsEditSelected(false)
        setIsAddSelected(true) 
      }

      if (tabSelected === "edit") {
        setIsEditSelected(true)
        setIsAddSelected(false) 
      }
    }

    const tabsConfig = [
        {
          label: "",
          Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
          onClick: () => setIsCollapsed(!isCollapsed),
          className: isCollapsed ? "is-active" : "",
        },
        {
          label: "Ajouter un produit",
          Icon: <AiOutlinePlus /> ,
          onClick:  () => selectTab("add") ,
          className: isAddSelected ? "is-active" : "",
        },
        {
          label:"Modifier un produit",
          Icon:<MdModeEditOutline /> ,
          onClick:() => selectTab("edit") ,
          className:isEditSelected ? "is-active" : "",
        }
    ]

  return (
    <AdminTabsStyled>
        {tabsConfig.map((tab) => {
          return (
           <Tab 
        label={tab.label}
        Icon={tab.Icon} 
        onClick={tab.onClick} 
        className={tab.className}
        /> 
      )
     })
    }
    </AdminTabsStyled>
  )
}


const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;