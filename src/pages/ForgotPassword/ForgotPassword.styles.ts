import envelope from "../../assets/imagesAdmin/envelope.svg";
import envelopeFocus from "../../assets/imagesAdmin/envelopeFocus.svg";

import styled from "styled-components";

export const StyledForgotPassword = {
  Container: styled.section`
    background-color: rgba(246, 246, 246, 1);
    width: 100%;
    min-height: calc(100vh - 84px);
    color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Block: styled.div`
    width: 695px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 1);
    padding: 128px 133px;
    text-align: center;
    @media (max-width: 725px) {
      width: 90%;
      padding: 40px 40px;
    }
  `,
  Title: styled.h2`
    font-size: 30px;
    font-weight: 500;
    line-height: 35.16px;
    margin-bottom: 32px;
    @media (max-width: 725px) {
      font-size: 24px;
    }
  `,
  Description: styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    color: rgba(35, 35, 35, 1);
    margin-bottom: 45px;
    @media (max-width: 725px) {
      font-size: 14px;
    }
  `,
  Form: styled.form``,
  Label: styled.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    color: rgba(35, 35, 35, 1);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
  `,
  Input: styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(162, 162, 162, 1);
    margin-bottom: 45px;
    padding: 18.5px 0 7.5px 44px;
    outline: none;
    &:focus + div {
      background-image: url(${envelopeFocus});
    }
  `,
  IconEnvelope: styled.div`
    background-image: url(${envelope});
    width: 19.75px;
    height: 15.44px;
    top: 40px;
    left: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
  `,
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
};
