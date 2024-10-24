import styled from 'styled-components';

export const StyleFooter = {

  Container: styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #202e42;
  `,

  Footer: styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  FooterContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Logo: styled.div`
    font-family: "Space Grotesk", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    cursor: pointer;
  `,
  Rectangle: styled.div`
    flex-grow: 1;
    width: 224px;
    height: 81px;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    background-color: #080741;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  BlockText: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 80%;
    gap: 8.75rem;
    padding-left: 2.75rem;
    padding-top: 2rem;
  `,
  TextContainer: styled.div`
  `,
  TextTitle: styled.p`
    padding: 8px 0px;
    font-size: 16px;
    font-weight: 500;
  `,
  TextParagraph: styled.p`
    padding: 4px 0px;
    color: #A2a2a2;
    font-size: 12px;
    font-weight: 500;
  `,
  RectangleInfo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 233px;
    height: 314px;
    border-radius: 8px;
    background-color: #F6F6F6;
    flex-grow: 1;
    margin: 20px;
    align-items: center;
  `,
  TextRectangle: styled.div`
    display: flex;
  `,
  IconQRCode: styled.img`
    width: auto;
    height: auto;
  `,
  TextQR: styled.p`
    color: #6B6A8D;
    font-size: 12px;
    max-width: 220px;
    text-align: center;
  `,
  ImgCon: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    font-size: 12px;
    max-width: 220px;
    text-align: center;
    gap: 8px;
  `,
  FormIcon: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    gap: 8px;
    width: 36px;
    height: 36px;
    background-color: #393967;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
  `,
  LitleText: styled.p`
    text-align: center;
    padding: 1rem 0;
    font-size: 12px;
    color: #A2a2a2;
    width: 100%;
  `,
};
