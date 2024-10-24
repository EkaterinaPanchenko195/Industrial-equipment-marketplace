import { TTitle } from "../../types/types";
import { StyledFormTitle as S } from "./FormTitle.style";

export const FormTitle = ({ title }: TTitle) => (
    <S.TitleH3>{title}</S.TitleH3>
)