import { StyledFormTwoNewProduct as S } from "../../pages/AddNewProductFormTwo/FormTwoNewProduct.style"
import { FormTitle } from "../FormTitle/FormTitle";
import { SelectProduct } from "../SelectProduct/SelectProduct";
import { items } from "../../pages/AddNewProductFormTwo/FormTwoNewProduct";
export const Axles = () => {
  return (
    <S.FormCustomContainer>
    <S.FormCustomWrapper>
      <FormTitle title="Ось X" />
      <SelectProduct
        items={items}
        defaultValue="значение"
        defaultLabel=""
      />
    </S.FormCustomWrapper>
    <S.FormCustomWrapper>
      <FormTitle title="Ось Y" />
      <SelectProduct
        items={items}
        defaultValue="значение"
        defaultLabel=""
      />
    </S.FormCustomWrapper>

    <S.FormCustomWrapper>
      <FormTitle title="Ось Z" />
      <SelectProduct
        items={items}
        defaultValue="значение"
        defaultLabel=""
      />
    </S.FormCustomWrapper>
  </S.FormCustomContainer>
  )
}
