import styled from "styled-components";
import Tab from "../../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../../theme/index";
import {useOrderContext} from "../../../../../../context/OrderContext";
import { getTabsConfig } from "./tabsConfig";

export default function AdminTabs() {
  
  const {
    isCollapsed, 
    setIsCollapsed, 
    currentTabSelected,
    setCurrentTabSelected, 
  } = useOrderContext()
  

    const selectTab = (tabSelected) => {
      setIsCollapsed(false) // open the panel
      setCurrentTabSelected(tabSelected) //refresh the selected tab
    }

const tabs = getTabsConfig()

  return (
    <AdminTabsStyled>
            <Tab 
            label=""
            Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />} 
            onClick={() => setIsCollapsed(!isCollapsed)} 
            className={isCollapsed ? "is-active" : ""}
            />

        { tabs.map((tab) => (
                    <Tab 
                    key={tab.index}
                    label={tab.label}
                    Icon={tab.Icon} 
                    onClick={() => selectTab(tab.index)}
                    className = {currentTabSelected === tab.index ? "is-active" : ""}
                    /> 
        ))}
    </AdminTabsStyled>
  )
}


const AdminTabsStyled = styled.div`

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