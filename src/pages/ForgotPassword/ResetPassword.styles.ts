// не используется

import styled, { css } from "styled-components";
import lock from "../../assets/imagesAdmin/lock.svg";
import lockFocus from "../../assets/imagesAdmin/lockFocus.svg";

const inputStyles = css`
  width: 100%;
  height: 64px;
  border: none;
  border-bottom: 1px solid rgba(162, 162, 162, 1);
  padding: 13px 0 13px 34px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  outline: none;
  margin-bottom: 32px;
`;

const iconStyles = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
`;

export const StyledResetPassword = {
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
      padding: 20px 20px;
    }
  `,
  Title: styled.h2`
    font-size: 30px;
    font-weight: 500;
    line-height: 35.16px;
    margin-bottom: 32px;
    @media (max-width: 725px) {
      font-size: 20px;
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
    position: relative;
    font-weight: 500;
    line-height: 16.41px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `,

  InputPassword: styled.input`
    ${inputStyles};
    &:focus + div {
      background-image: url(${lockFocus});
    }
    &::placeholder {
      font-size: 20px;
      position: absolute;
    }
  `,
  InputPasswordRepeat: styled.input`
    ${inputStyles};
    &:focus + div {
      background-image: url(${lockFocus});
    }
    margin-bottom: 45px;
    &::placeholder {
      font-size: 20px;
      position: absolute;
    }
  `,
  IconLock: styled.div`
    ${iconStyles};
    background-image: url(${lock});
    width: 12.04px;
    height: 17.41px;
    top: 40px;
    left: 5px;
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
  Error: styled.h2`
    color: #ec4435;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 45px;
  `,
};
