import styled from "styled-components";

export const StyledCheckboxProduct = {

    CheckboxContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  Checkbox: styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #696E82;
    cursor: pointer;
    margin-right: 8px; 

    &:checked {
      background-color: #080741;
      border-color: #080741;
    }
  `,
  CheckboxLabel: styled.label`
    margin-left: 8px;
  `,
  CustomContainer: styled.div`
  margin-top: 20px;`,
 }