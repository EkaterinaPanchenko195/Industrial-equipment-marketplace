import { StyleFooter as S } from "./Footer.styles";
import QRCode from "../../assets/imagesFooter/QRCode.svg";
import apple from "../../assets/imagesFooter/apple.svg";
import googleplay from "../../assets/imagesFooter/googleplay.svg";

export const Footer = () => {

  return (
  <S.Footer>
  <S.Container>
  <S.FooterContainer>
      <S.Rectangle>
        <S.Logo>
          <h1>VMCCNC</h1>
        </S.Logo>
      </S.Rectangle>

      <S.TextRectangle>
        <S.BlockText>
          <S.TextContainer>
            <S.TextTitle>Покупателям</S.TextTitle>
            <S.TextParagraph>Юридическая информация</S.TextParagraph>
          </S.TextContainer>

          <S.TextContainer>
            <S.TextTitle>Продавцам и партнёрам</S.TextTitle>
            <S.TextParagraph>Текст</S.TextParagraph>
            <S.TextParagraph>Текст</S.TextParagraph>
            <S.TextParagraph>Текст</S.TextParagraph>
          </S.TextContainer>

          <S.TextContainer>
            <S.TextTitle>Компания</S.TextTitle>
            <S.TextParagraph>О нас</S.TextParagraph>
            <S.TextParagraph>Контакты</S.TextParagraph>
            <S.TextParagraph>Вакансии</S.TextParagraph>
          </S.TextContainer>

          <S.TextContainer>
            <S.TextTitle>Текст</S.TextTitle>
            <S.TextParagraph>Текст</S.TextParagraph>
            <S.TextParagraph>Текст</S.TextParagraph>
            <S.TextParagraph>Текст</S.TextParagraph>
          </S.TextContainer>
        </S.BlockText>

        <S.RectangleInfo>
          <S.IconQRCode src={QRCode} alt="" />
          <S.TextQR>
            Наведите камеру и скачайте бесплатное мобильное приложение{" "}
          </S.TextQR>
          <S.ImgCon>
            <S.FormIcon>
              <S.IconQRCode src={apple} alt="" />
            </S.FormIcon>
            <S.FormIcon>
              <S.IconQRCode src={googleplay} alt="" />
            </S.FormIcon>
          </S.ImgCon>
        </S.RectangleInfo>
      </S.TextRectangle>

      <S.LitleText>VMCCNC 2000 – 2024. Все права защищены.</S.LitleText>
    </S.FooterContainer>
  </S.Container>
  </S.Footer>
  );
};

export default Footer;
