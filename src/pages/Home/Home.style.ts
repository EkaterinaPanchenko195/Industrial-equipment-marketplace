import styled from "styled-components";

export const StyledHome = {
//   Section -- 1
  Section: styled.section`
    display: flex;
    height: 100vh;
    padding: 40px;
    position: relative;
    
  `,
  
  ContainerHome: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 100px;
    position: relative;
  `,
  
  Block: styled.div`
    flex: 0 0 55%;
  `,
  
  Title: styled.div`
    font-size: 74px;
    color: black;
    margin-bottom: 10px;
  `,
  
  Description: styled.p`
    font-size: 18px;
    color: #626780;
    margin-bottom: 16px;
  `,
  
  Button: styled.button`
    background-color: transparent;
    border: 2px dashed #000;
    color: #000;
    border-radius: 11px;
    padding: 10px 40px;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `,
  
  Image: styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    object-fit: contain; 
    object-position: center bottom; 
    z-index: -1; 
  `,

  BlockRektangles: styled.div`
    position: absolute;
    top : 20%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    `,
  BlockRectangle: styled.div`
    display: flex;
    width: 298px;
    height: 75px;
    display: flex;
    background-color: #080741;
    flex-direction: column;
    border-radius: 4px;
    padding: 10px;
  `,

  RectangleData: styled.div`
  padding-bottom: 10px;
  font-weight: 700;
  font-size: 11px;
  color: #4940F4;`,

  RectangleDescription: styled.div`
  font-size: 10px;
  color: #FFFFFF;`,

//   Section -- 2

  BlockInfo: styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 100%; 
    padding: 20px;
    box-sizing: border-box;
    `,

  ContainerInfo: styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 20px; 
    padding: 60px;
      `,
  
  TitleInfo: styled.div`
    font-size: 26px;
    color: #626780;
    margin: 10px;
  `,
  
  DescriptionInfo: styled.p`
    font-size: 18px;
    color: #626780;
  `,
  
  ImageIngfo: styled.img`
    width: 65px;
    height: 65px;
    margin: 10%;
  `,
  BlockInfoWrapper: styled.div`
  padding-top: 40px;
  box-sizing: border-box;
  flex: 1 1 calc(10% - 20px); 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    border: 2px solid #080741; 
    border-radius: 4px;
    border-bottom: 4px solid #080741;
    cursor: pointer;
  }
`,

//   Section -- 3

  ContainerBlocks: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  `,

  BlockBlock: styled.div`
  display: flex;
   position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   text-align: center;
  padding: 40px;
  box-sizing: border-box;
  flex:0 0 440px;
  height: 560px;    
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);`,

  ImageBlock: styled.img`
  margin: 10px;`,

  TitleBlock: styled.div`
  font-size: 26px;
  color: black;
  margin: 10px;`,

  ButtonBlock: styled.button`
   position: absolute;
  bottom: -10px; 
  background-color: #080741;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  padding: 15px 50px;
  border: none;
  cursor: pointer;`,

//   Section -- 4

ContainerToText: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  `,   

TitleToText: styled.div`
  font-size: 50px;
  color: #626780;
  margin: 10px;
  width: 40%;
`,

TextBlue: styled.div`
  color: #337BCE;
`,

}

