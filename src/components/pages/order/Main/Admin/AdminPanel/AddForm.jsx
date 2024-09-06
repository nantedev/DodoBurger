import styled from 'styled-components';

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Image URL"/>
        <input type="text" placeholder="Prix"/>
      </div>
      <div className="submit-buton">Submit button</div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
    "image-preview input-fields"
    "image-preview input-fields"
    "image-preview input-fields"
    ".             submit-buton";

  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: image-preview ;
  }
  .input-fields{
    background: blue;
    grid-area: input-fields ;
    display: grid;
  }
  .submit-buton{
    background: green;
    grid-area: submit-buton ;
  }
`; 
