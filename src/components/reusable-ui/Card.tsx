import styled, { css } from "styled-components"
import { theme } from "@/theme/theme";
import Button from "./Button"
import { TiDelete } from "react-icons/ti";
import { fadeInFromRight, fadeInFromTop } from "@/theme/animations";

type CardProps = {
  title?: string,
  imageSource?: string,
  leftDescription: string,
  hasDeleteButton?: boolean,
  onDelete?: React.MouseEventHandler<HTMLButtonElement>,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  isHoverable?: boolean,
  isSelected?: boolean,
  onAdd?: React.MouseEventHandler<HTMLButtonElement>,
  overlapImageSource: string,
  isOverlapImageVisible?: boolean,
}

export default function Card({
  title, 
  imageSource, 
  leftDescription, 
  hasDeleteButton, 
  onDelete, 
  onClick, 
  isHoverable,
  isSelected, 
  onAdd,
  overlapImageSource, //Chemin de l'image no-stock
  isOverlapImageVisible,
  }: CardProps) {
  return (
    <CardStyled onClick={onClick} $isHoverable={isHoverable} $isSelected={isSelected}>
        <div className="card" >
          {hasDeleteButton && (
            <button
            className="delete-button"
            aria-label="delete-button"
            onClick={onDelete}>
            <TiDelete className="icon" />
            </button>)}
            <div className="image">
                {isOverlapImageVisible && (
                    <div className="overlap">
                    <div className="transparent-layer"></div>
                    <img className="overlap-image" src={overlapImageSource} alt="overlap" />
                    </div>
                )}
                <img className="product" src={imageSource} alt={title} />
              </div>
                <div className="text-info">
                <div className="title">{title}</div>
                <div className="description">
                    <div className="left-description">{leftDescription}</div>
                    <div className="right-description">
                    <Button 
                    className="primary-button" 
                    label={"Ajouter"} 
                    onClick={onAdd}
                    disabled={isOverlapImageVisible}
                    />
                    </div>
                </div>
                </div>
        </div>
    </CardStyled>
  )
}

type CardStyledProps = {
  $isHoverable?: boolean,
  $isSelected?: boolean,
}

const CardStyled = styled.div<CardStyledProps>`
  ${({$isHoverable}) => $isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px; //fix extra card height

      .card {
        background: ${theme.colors.white};
        width: 240px;
        height: 330px;
        display: grid;
        grid-template-rows: 65% 1fr;
        box-sizing: border-box;
        padding: 0 20px 10px;
        box-shadow: ${theme.shadows.medium};
        border-radius: ${theme.borderRadius.extraRound};
        position: relative;

        .delete-button {
        border: 1px solid red;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
        width: 30px;
        height: 30px;
        color: ${theme.colors.primary};
        z-index: 2;
        padding: 0;
        border: none;
        background: none;
        animation: ${fadeInFromRight} ${theme.animations.speed.slow} ease-out;

        .icon {
          /* border: 1px solid blue; */
          height: 100%;
          width: 100%;
        }

        &:hover {
          color: ${theme.colors.red};
          /* background-color: red; */
        }
        &:active {
          color: ${theme.colors.primary};
        }
      }


      .image {
      margin-top: 30px;
      margin-bottom: 20px;
      /* position: relative; */
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .overlap {
        .overlap-image {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          animation: ${fadeInFromTop} 500ms;
          border-radius: ${theme.borderRadius.extraRound};
        }

        .transparent-layer {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
        }
      }
    }

        .text-info {
        display: grid;
        grid-template-rows: 30% 70%;
        padding: 5px;

            .title {
            margin: auto 0;
            font-size: ${theme.fonts.size.P4};
            position: relative;
            bottom: 10px;
            font-weight: ${theme.fonts.weights.bold};
            color: ${theme.colors.dark};
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            font-family: ${theme.fonts.family.stylish};
            }

            .description {
            display: grid;
            grid-template-columns: 1fr 1fr;

            .left-description {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-weight: ${theme.fonts.weights.medium};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: ${theme.fonts.weights.medium};
            color: ${theme.colors.primary};
            }

            .right-description {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: ${theme.fonts.size.P1};

            .primary-button {
            font-size: ${theme.fonts.size.XS};
            padding: 12px;
            }
        }
      }
    }
    ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}
  }   
`;


const hoverableStyle = css`
  .card:hover {
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`


const selectedStyle = css`
  background: ${theme.colors.primary};
  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`