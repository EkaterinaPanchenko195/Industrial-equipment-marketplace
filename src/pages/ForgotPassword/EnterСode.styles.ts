import envelope from "../../assets/imagesAdmin/envelope.svg";

import styled from "styled-components";

export const StyledEnterСode = {
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
  `,
  Title: styled.h2`
    font-size: 30px;
    font-weight: 500;
    line-height: 35.16px;
    margin-bottom: 32px;
  `,
  Description: styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    color: rgba(35, 35, 35, 1);
    margin-bottom: 45px;
  `,
  Form: styled.form``,
  Wrapper: styled.div``,
  Input: styled.input`
    margin-bottom: 45px;
    padding: 18.5px 0 7.5px 44px;
    outline: none;
    width: 33px;
    height: 40px;
    border: 1px solid rgba(162, 162, 162, 1);
    border-radius: 5px;
    padding: 2px;
    margin-right: 8px;
    text-align: center;
    &:last-of-type {
      margin-right: 0px;
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
