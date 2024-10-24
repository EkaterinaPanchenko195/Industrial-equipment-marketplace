import styled from "styled-components";

export const StyledFormNewProduct = {
  Container: styled.section`
    background-color: rgba(246, 246, 246, 1);
    width: 100%;
    min-height: calc(100vh - 84px);
    color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Wrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 695px;
    background-color: rgba(255, 255, 255, 1);
    padding: 75px 133px;
    height: fit-content;
    border-radius: 5px;
    @media (max-width: 725px) {
      width: 90%;
      padding: 30px 30px;
    }
  `,
  Title: styled.h2`
    margin-bottom: 26px;
  `,
  // FileProduct: styled.input`
  //   position: relative;
  //   opacity: 0;
  //   width: 200px;
  //   height: 200px;
  //   z-index: 1;
  //   cursor: pointer;
  //   margin-bottom: 45px;
  // `,
  // ImgProduct: styled.img
  // <{ $setDefFoto: string | undefined }>`
  /* ${({ $setDefFoto }) => `
    background-image: url(${$setDefFoto});
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid rgba(105, 110, 130, 1);
    border-radius: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size:auto;
    background-size: ${
      $setDefFoto === "/src/assets/imagesPageAddNewProduct/defaultfoto.svg"
        ? "auto"
        : "contain"
    }  */
  // `}
  // ``,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border-radius: 5px;
  `,
  Label: styled.label`
    color: rgba(105, 110, 130, 1);
    margin-bottom: 45px;
    width: 100%;
  `,
  Input: styled.input`
    width: 100%;
    border: none;
    border-bottom: 0.1px solid rgba(105, 110, 130, 1);
    outline: none;
    padding: 20px 10px 5px 0px;
    font-size: 18px;
    cursor: pointer;
  `,
  Select: styled.select`
    outline: none;
    width: 100%;
    height: 51px;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    line-height: 18.75px;
    font-weight: 500;
    background-color: #6b6a8d;
    border: none;
    border-radius: 32px;
    cursor: pointer;
    text-align: center;

    & {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  `,
  Option: styled.option``,
  Button: styled.button`
    width: 100%;
    height: 51px;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    line-height: 18.75px;
    font-weight: 500;
    background-color: rgba(8, 7, 65, 1);
    border: none;
    border-radius: 32px;
    cursor: pointer;
  `,
  InputRadio: styled.input`
    display: flex;
    margin-bottom: 5px;
  `,
  LabelRadio: styled.label`
    width: 100%;
    display: flex;
    flex-direction: initial;
    gap: 10%;
  `,
};
