import styled, { css } from "styled-components";
import envelope from "../../assets/imagesAdmin/envelope.svg";
import envelopeFocus from "../../assets/imagesAdmin/envelopeFocus.svg";
import lock from "../../assets/imagesAdmin/lock.svg";
import lockFocus from "../../assets/imagesAdmin/lockFocus.svg";
import person from "../../assets/imagesAdmin/person.svg";
import personFill from "../../assets/imagesAdmin/person.fill.svg";

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
  margin-bottom: 15px;
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

export const StyledSignUp = {
  Container: styled.section`
    background-color: rgba(246, 246, 246, 1);
    width: 100%;
    min-height: calc(100vh - 84px);
    color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  `,
  Block: styled.div`
    width: 695px;
    background-color: rgba(255, 255, 255, 1);
    padding: 75px 133px;
    height: fit-content;
    border-radius: 5px;
    @media (max-width: 725px) {
      width: 90%;
      padding: 20px 10px;
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
      font-size: 13px;
      &:last-of-type {
      margin-right: 4px;
    }
    }
  `,
  Form: styled.form``,
  Label: styled.label`
    position: relative;
    font-weight: 500;
    line-height: 16.41px;
  `,
  InputPerson: styled.input`
    ${inputStyles};
    &:focus + div {
      background-image: url(${personFill});
    }
  `,
  InputEmail: styled.input`
    ${inputStyles};
    &:focus + div {
      background-image: url(${envelopeFocus});
    }
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
  Input: styled.input`
    ${inputStyles};
    padding-left: 0;
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
  IconPerson: styled.div`
    ${iconStyles};
    background-image: url(${person});
    width: 15.04px;
    height: 17.41px;
    top: 48px;
    left: 5px;
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
  ButtonSignUp: styled.button`
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
  LabelStar: styled.span`
    font-size: 21px;
    color: #d84141;
  `,
};
