import styled from "styled-components";
import { theme } from "@/theme/theme";
import { imgAnimation } from "@/theme/animations";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type ImagePreviewProps = {
  imageSource: string;
  title: string;
};

export default function ImagePreview({
  imageSource,
  title,
}: ImagePreviewProps) {
  return (
    <TransitionGroup component={ImagePreviewStyled}>
      <CSSTransition
        appear
        classNames="image-animation"
        key={imageSource || "empty"}
        timeout={500}
      >
        {imageSource ? (
          <img src={imageSource} alt={title} />
        ) : (
          <div className="empty-image">Aucune Image</div>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: image-preview;
  display: flex;
  justify-content: center;
  align-items: center;
  ${imgAnimation}

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    object-position: center;
  }

  .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`;
