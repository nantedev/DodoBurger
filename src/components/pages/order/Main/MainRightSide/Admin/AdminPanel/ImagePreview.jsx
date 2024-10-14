import styled from 'styled-components';
import { theme } from '../../../../../../../theme/index';
import { imgAnimation } from '../../../../../../../theme/animations';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function ImagePreview({imageSource, title}) {
  return (
    <TransitionGroup component={ImagePreviewStyled} >
          {imageSource ? (

          <CSSTransition appear classNames="image-animation" key={title} timeout={500}>
            <img src={imageSource} alt={title} /> 
          </CSSTransition>
        
        ) :  (
        <div className='empty-image'>Aucune Image</div>
        )}
    </TransitionGroup>
  );
}

const ImagePreviewStyled = styled.div`
    grid-area: image-preview ;
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

    
`

