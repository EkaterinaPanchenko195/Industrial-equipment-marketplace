import styled from "styled-components";

export const StyledCategories = {
  Container: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 84px - 289px);
  `,
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    gap: 10%;
    padding-top: 30px;
    width: 60%;
  `,
  Block: styled.div`
    cursor: pointer;
    background-color: rgba(217, 217, 217, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    flex-direction: column;
    color: rgba(8, 7, 65, 1);
    border: 1px solid transparent;
    &:hover {
        background-color: rgba(242, 244, 255, 1);
    }
  `,
  BackgroundImg: styled.div``,
  Img: styled.img`
    width: 112.13px;
    height: 96.95px;
  `,
  Title: styled.h2`
    font-size: 24px;
    text-align: center;
  `,
};
