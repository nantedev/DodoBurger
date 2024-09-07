import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths"
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card"
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

const IMAGE_BY_DEFAUT = "/images/coming-soon.png"

export default function Menu() {
  
const { menu, isModeAdmin } = useContext(OrderContext)


    return (
    <StyledMenu>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAUT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
          />
        )
      })}
    </StyledMenu>
  )
}


const StyledMenu  = styled.div`
    border: 3px solid blue;
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll ;
`