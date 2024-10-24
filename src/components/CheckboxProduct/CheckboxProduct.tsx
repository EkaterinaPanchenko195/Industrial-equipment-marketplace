import React, { useState } from 'react';
import { StyledCheckboxProduct as S } from './CheckboxProduct.style';


export const CustomCheckbox = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <S.CheckboxContainer>
      <S.Checkbox type="checkbox" checked={checked} onChange={onChange} />
      <S.CheckboxLabel>{label}</S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};

export const Checkboxes = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleCheck1 = () => {
    setChecked1(!checked1);
  };

  const handleCheck2 = () => {
    setChecked2(!checked2);
  };

  return (
    <S.CustomContainer>
      <CustomCheckbox label="новый" checked={checked1} onChange={handleCheck1} />
      <CustomCheckbox label="б/у" checked={checked2} onChange={handleCheck2} />
    </S.CustomContainer>
  );
};
