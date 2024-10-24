import { TItem } from "../../types/types";
import { StyledSelectProduct as S } from "./SelectProduct.style";

export const SelectProduct = ({ items, defaultValue, defaultLabel }: { items: TItem[]; defaultValue: string; defaultLabel: string }) => {
    return (
      <S.DropdownContainer>
        <S.DropdownLabel>{defaultLabel}</S.DropdownLabel>
        <S.DropdownSelect defaultValue={defaultValue}>
          <S.DropdownOption value="">{defaultLabel}</S.DropdownOption>
          {items.map((item) => (
            <S.DropdownOption key={item.value} value={item.value}>
              {item.label}
            </S.DropdownOption>
          ))}
        </S.DropdownSelect>
      </S.DropdownContainer>
    );
  };