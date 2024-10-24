import { StyledCategories as S } from "./Categories.styles";
import img from "../../assets/imagesCategories/cnc.svg";
import { useNavigate } from "react-router";

export const Categories = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Wrapper>
      <S.Block>
        <S.BackgroundImg>
          <S.Img src={img} />
        </S.BackgroundImg>
        <S.Title>Фрезерные вертикальные станки</S.Title>
      </S.Block>
      <S.Block>
        <S.BackgroundImg>
          <S.Img src={img} />
        </S.BackgroundImg>
        <S.Title>Фрезерные горизонтальные станки</S.Title>
      </S.Block>
      <S.Block>
        <S.BackgroundImg>
          <S.Img src={img} />
        </S.BackgroundImg>
        <S.Title>Токарные станки с ЧПУ</S.Title>
      </S.Block>
      <S.Block>
        <S.BackgroundImg>
          <S.Img src={img} />
        </S.BackgroundImg>
        <S.Title>Pipe Bender</S.Title>
      </S.Block>
      <S.Block onClick={()=>navigate("/categorieLaser")}>
        <S.BackgroundImg>
          <S.Img src={img} />
        </S.BackgroundImg>
        <S.Title>Лазерные станки</S.Title>
      </S.Block>
      <S.Block>
        <S.BackgroundImg>
          <S.Img src={img} />
        </S.BackgroundImg>
        <S.Title>Guillotine</S.Title>
      </S.Block>
      <S.Block>
        <S.BackgroundImg>
          <S.Img src={img} />
        </S.BackgroundImg>
        <S.Title>Bending Machine Filter</S.Title>
      </S.Block>
      </S.Wrapper>
    </S.Container>
  );
};
