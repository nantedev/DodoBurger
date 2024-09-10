import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./HintMessage";

export const tabsConfig = [
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus /> ,
      Content: <AddForm />,
    },
    {
      index: "edit",
      label:"Modifier un produit",
      Icon:<MdModeEditOutline /> ,
      // Content: <EditForm />,
      Content: <HintMessage />
    },
]


export const getTabSelected = (tabs, currentTabSelected) => 
  tabs.find((tab) => tab.index === currentTabSelected)