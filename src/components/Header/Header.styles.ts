import styled from "styled-components";
import search from "../../assets/imagesHeader/search.svg";

export const StyledHeader = {
  HeaderContainer: styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    background-color: #080741;
    gap: 16px;
    height: 84px;
  `,
  Logo: styled.div`
    font-family: "Space Grotesk", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    cursor: pointer;
  `,
  Button: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 161px;
    height: 36px;
    border-radius: 17px;
    padding: 4px 16px;
    gap: 8px;
    background-color: #6b6a8d;
    color: white;
    cursor: pointer;
  `,
  HeaderInput: styled.input`
    width: 452px;
    height: 36px;
    padding: 10px 30px;
    gap: 8px;
    border-radius: 17px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: left center;
  `,
  HeaderSection: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 84px;
    border: 0;
    background-color: transparent;
    color: white;
    cursor: pointer;
  `,
  Text: styled.div`
    font-size: 12px;
  `,
  Icon: styled.img`
    width: 32px;
    height: 32px;
  `,
  IconButton: styled.img``,
  LanguageButton: styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;
  `,
  LanguageImage: styled.img`
    margin-left: 8px;
  `,
  LanguageDiv: styled.div`
    color: white;
    display: flex;
    align-items: center;
  `,
  ButtonAddProduct: styled.button`
    width: 267px;
    height: 36px;
    border-radius: 17px;
    padding: 8px;

    background-color: #6b6a8d;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  `,
  Container: styled.section`
    position: absolute;
    top: 73px;
    right: 88px;
    width: 300px;
    margin: 0 auto;
    z-index: 1;
  `,
  FormContainer: styled.div`
    padding: 10px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background-color: rgba(246, 246, 246, 1);
    border-radius: 5px;
  `,
  ButtonLogin: styled.button`
    width: 100%;
    height: 58px;
    color: #ffffff;
    border: 2px solid #080741;
    border-radius: 30px;
    cursor: pointer;
    background-color: #6b6a8d;
  `,

  ButtonExit: styled.button`
    width: 100%;
    height: 58px;
    color: #ffffff;
    border: 2px solid #080741;
    border-radius: 30px;
    cursor: pointer;
    background-color: #6b6a8d;
  `,
};
