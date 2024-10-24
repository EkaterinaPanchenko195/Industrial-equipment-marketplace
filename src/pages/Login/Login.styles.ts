import styled, { css } from "styled-components";
import envelope from "../../assets/imagesAdmin/envelope.svg";
import envelopeFocus from "../../assets/imagesAdmin/envelopeFocus.svg";
import lock from "../../assets/imagesAdmin/lock.svg";
import lockFocus from "../../assets/imagesAdmin/lockFocus.svg";
import eye from "../../assets/imagesAdmin/eye.svg";
import eyeFill from "../../assets/imagesAdmin/eyeFill.svg";

import { Link } from "react-router-dom";
import apple from "../../assets/imagesAdmin/apple.svg";
import facebook from "../../assets/imagesAdmin/facebook.svg";
import google from "../../assets/imagesAdmin/google.svg";

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
`;

const iconStyles = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
`;

const mediaStyles = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 41px;
  height: 41px;
  cursor: pointer;
`;

export const StyledLogin = {
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
    background-color: rgba(255, 255, 255, 1);
    padding: 120px 133px;
    height: 799px;
    border-radius: 5px;
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
    text-align: center;
  `,
  BlockSignUp: styled.div`
    margin-bottom: 48px;
  `,
  SignUPWrapper: styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
  `,
  SignUPDescription: styled.h3`
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: center;
    &:last-of-type {
      margin-right: 7px;
    }
    @media (max-width: 725px) {
      font-size: 14px;
    }
  `,
  Form: styled.form``,
  Label: styled.label`
    position: relative;
    font-weight: 500;
    line-height: 16.41px;
  `,
  InputEmail: styled.input`
    ${inputStyles};
    margin-bottom: 48px;
    &:focus + div {
      background-image: url(${envelopeFocus});
    }
  `,
  InputPassword: styled.input`
    ${inputStyles};
    margin-bottom: 8px;
    &:focus + div {
      background-image: url(${lockFocus});
    }
  `,
  IconEnvelope: styled.div`
    ${iconStyles};
    background-image: url(${envelope});
    width: 19.75px;
    height: 15.44px;
    top: 48px;
    left: 5px;
  `,
  IconLock: styled.div`
    ${iconStyles};
    background-image: url(${lock});
    width: 12.04px;
    height: 17.41px;
    top: 48px;
    left: 5px;
  `,
  IconEye: styled.div<{ $isPasswordVisible: boolean }>`
    ${({ $isPasswordVisible }) => `
     background-image: url(${$isPasswordVisible ? eye : eyeFill});
`}
    ${iconStyles};
    width: 20.7px;
    height: 13.06px;
    top: 51px;
    right: 5.65px;
    cursor: pointer;
  `,
  SignUpLink: styled(Link)`
    background-color: transparent;
    border: none;
    color: rgba(8, 7, 65, 1);
    font-weight: 600;
    font-size: 16px;
    line-height: 18.75px;
    cursor: pointer;
    text-decoration: none;
  `,
  WrapperForgotPassword: styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 21px;
  `,
  LinkForgotPassword: styled(Link)`
    text-decoration: none;
    color: rgba(162, 162, 162, 1);
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
  `,
  FormDescription: styled.p`
    color: rgba(181, 181, 181, 1);
    font-size: 16px;
    line-height: 18.75px;
    font-weight: 500;
    text-align: center;
    margin-top: 38px;
    margin-bottom: 24px;
  `,
  WrapperMedia: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  `,
  MediaFacebook: styled.div`
    ${mediaStyles};
    background-image: url(${facebook});
  `,
  MediaApple: styled.div`
    ${mediaStyles};
    background-image: url(${apple});
  `,
  MediaGoogle: styled.div`
    ${mediaStyles};
    background-image: url(${google});
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
