import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths"
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card"

export default function Menu() {
  
  const [menu, setMenu] = useState(fakeMenu2)

    return (
    <StyledMenu>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
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