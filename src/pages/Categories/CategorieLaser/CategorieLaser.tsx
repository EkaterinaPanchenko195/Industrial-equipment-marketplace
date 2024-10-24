import { StyledCategorieLaser as S } from "./CategorieLaser.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorieLaser } from "../../../redux/slice/getCategorieLaser";
import { useEffect } from "react";
import { IRootState } from "../../../redux/store";
import { TCategorie } from "../../../types/types";

export const CategorieLaser = () => {
  const dispatch = useDispatch()<any>;

  const data = useSelector(
    (state: IRootState) => state.CategorieLaser.data
  ) as any;

  useEffect(() => {
    dispatch(fetchCategorieLaser());
  }, []);

  if (!data.length) {
    return null;
  }

  return (
    <S.Container>
      <S.Wrapper>
        {data.map((elem: TCategorie) => (
          <S.Block key={elem.id}>
            <S.Img $background={elem.url}></S.Img>
            <S.Name>{elem.model}</S.Name>
            <S.Сharacteristics>
              <S.СharacteristicsTitle>Характеристики</S.СharacteristicsTitle>
              <S.List>
                <S.ItemName> Наименование</S.ItemName>
                <S.ItemValue>{elem.model}</S.ItemValue>
                <S.ItemName> Год производства</S.ItemName>
                <S.ItemValue>{elem.yearOfProduction}</S.ItemValue>
                <S.ItemName>Состояние</S.ItemName>
                <S.ItemValue>{elem.machineCondition}</S.ItemValue>
                <S.ItemName>Система ЧПУ</S.ItemName>
                <S.ItemValue>{elem.cnc}</S.ItemValue>
                <S.ItemName>Размер стола по X</S.ItemName>
                <S.ItemValue>{elem.tableX}</S.ItemValue>
                <S.ItemName> Размер стола по Y</S.ItemName>
                <S.ItemValue>{elem.tableY}</S.ItemValue>
              </S.List>
            </S.Сharacteristics>
          </S.Block>
        ))}
      </S.Wrapper>
    </S.Container>
  );
};
