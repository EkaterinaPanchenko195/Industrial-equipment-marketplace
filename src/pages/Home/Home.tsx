import { StyledHome as S } from "./Home.style";
import wave from "../../assets/imagesHome/wave.svg";
import example from "../../assets/imagesHome/example.svg";
import klient from "../../assets/imagesHome/klient.png";
import admin from "../../assets/imagesHome/admin.png";
export const Home = () => {

  return (
    <>
      <S.Section>
        <S.Image src={wave} alt="Wave Background" />
        <S.ContainerHome>
          <S.Block>
            <S.Title>
              Соединяем будущее круговой экономики для индустриальных машин
            </S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </S.Description>
            <S.Button>О нас</S.Button>
          </S.Block>

          <S.BlockRektangles>
            <S.BlockRectangle>
              <S.RectangleData>Июль 24, 2024</S.RectangleData>
              <S.RectangleDescription>
                Отзыв клиента о положительной работе сайта
              </S.RectangleDescription>
            </S.BlockRectangle>
            <S.BlockRectangle>
              <S.RectangleData>Июнь 10, 2024</S.RectangleData>
              <S.RectangleDescription>
                Отзыв клиента о положительной работе сайта
              </S.RectangleDescription>
            </S.BlockRectangle>
            <S.BlockRectangle>
              <S.RectangleData>Май 28, 2024</S.RectangleData>
              <S.RectangleDescription>
                Отзыв клиента о положительной работе сайта
              </S.RectangleDescription>
            </S.BlockRectangle>
            <S.BlockRectangle>
              <S.RectangleData>Октябрь 17, 2023</S.RectangleData>
              <S.RectangleDescription>
                Отзыв клиента о положительной работе сайта
              </S.RectangleDescription>
            </S.BlockRectangle>
          </S.BlockRektangles>
        </S.ContainerHome>
      </S.Section>

      <S.Section>
        <S.ContainerInfo>
          <S.BlockInfo>
            <S.TitleInfo>Мы предоставляем отличный сервис</S.TitleInfo>
            <S.DescriptionInfo>
              Разрешение на профессиональное движение – одна из самых важных
              вещей в компании.
            </S.DescriptionInfo>
            <S.DescriptionInfo>
              При осуществлении грузовых перевозок. Фактически, это обязательное
              условие для ведения делового трафика.
            </S.DescriptionInfo>
          </S.BlockInfo>

          <S.BlockInfoWrapper>
            <S.ImageIngfo src={example} alt="Example" />
            <S.TitleInfo>Packaging</S.TitleInfo>
            <S.DescriptionInfo>
              Consistency in packaging matter a lot. Give your attention match
              design elements
            </S.DescriptionInfo>
          </S.BlockInfoWrapper>

          <S.BlockInfoWrapper>
            <S.ImageIngfo src={example} alt="Example" />
            <S.TitleInfo>Packaging</S.TitleInfo>
            <S.DescriptionInfo>
              Consistency in packaging matter a lot. Give your attention match
              design elements
            </S.DescriptionInfo>
          </S.BlockInfoWrapper>

          <S.BlockInfoWrapper>
            <S.ImageIngfo src={example} alt="Example" />
            <S.TitleInfo>Packaging</S.TitleInfo>
            <S.DescriptionInfo>
              Consistency in packaging matter a lot. Give your attention match
              design elements
            </S.DescriptionInfo>
          </S.BlockInfoWrapper>

          <S.BlockInfoWrapper>
            <S.ImageIngfo src={example} alt="Example" />
            <S.TitleInfo>Packaging</S.TitleInfo>
            <S.DescriptionInfo>
              Consistency in packaging matter a lot. Give your attention match
              design elements
            </S.DescriptionInfo>
          </S.BlockInfoWrapper>
        </S.ContainerInfo>
      </S.Section>

      <S.Section>
        <S.ContainerBlocks>
          <S.BlockBlock>
            <S.ImageBlock src={klient} />
            <S.TitleBlock>Клиент</S.TitleBlock>
            <S.DescriptionInfo>
              The occupational traffic permit is one things in the company How
              do you a commercial traffic permit for freight transport to your
              business?
            </S.DescriptionInfo>
            <S.ButtonBlock>Читать больше</S.ButtonBlock>
          </S.BlockBlock>

          <S.BlockBlock>
            <S.ImageBlock src={admin} />
            <S.TitleBlock>Администратор</S.TitleBlock>
            <S.DescriptionInfo>
              The occupational traffic permit is one things in the company How
              do you a commercial traffic permit for freight transport to your
              business?
            </S.DescriptionInfo>
            <S.ButtonBlock>Читать больше</S.ButtonBlock>
          </S.BlockBlock>
        </S.ContainerBlocks>
      </S.Section>

      <S.Section>
        <S.ContainerToText>
          <S.TitleToText>
          We are a
          <S.TextBlue>proposed exchange</S.TextBlue>
            proposed exchange We are a company on a mission to protect the
            planet from the cost of clothing.
          </S.TitleToText>
        </S.ContainerToText>
      </S.Section>
    </>
  );
};
