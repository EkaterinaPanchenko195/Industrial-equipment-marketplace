import styled from "styled-components";

export const StyledCategorieLaser = {
  Container: styled.section`
    display: flex;
    justify-content: center;
  `,
  Wrapper: styled.div`
    display: flex;
    gap: 10%;
    width: 90%;
    justify-content: center;
    flex-wrap: wrap;
  `,
  Block: styled.div`
    width: 300px;
    margin-bottom: 40px;
  `,
  Name: styled.h2`
    font-size: 25px;
    margin-bottom: 10px;
  `,
  Сharacteristics: styled.div``,
  СharacteristicsTitle: styled.h2`
    font-size: 20px;
    margin-bottom: 10Fpx;
  `,
  List: styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    list-style: none;
    gap: 5px;
    font-size: 15px;
  `,
  ItemName: styled.li``,
  ItemValue: styled.li``,
  Img: styled.div<{ $background: string | undefined }>`
    ${({ $background }) => `
    background-image: url(${$background});
    width: 100%;
    height: 200px;`}
    background-repeat: no-repeat;
    background-size: cover;
  `,
};
