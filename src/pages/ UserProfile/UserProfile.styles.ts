import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledUserProfile = {
  Container: styled.section`
    background-color: rgb(255 255 255);
    min-height: calc(100vh - 84px - 489px - 40px - 54px);
    padding: 20px 0;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 24px;
    margin-bottom: 50px;
    @media (max-width: 825px) {
      flex-direction: column;
    }
  `,
  ContainerPerson: styled.div`
    background-color: rgba(255, 255, 255, 1);
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  BlockAvatar: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 32px;
    width: 100%;
  `,
  Block: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  `,
  BlockGeneralInformation: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-columns: repeat(8, 60зч);

    margin-bottom: 92px;
  `,
  Avatar: styled.div`
    background-color: rgba(246, 246, 246, 1);
    width: 112px;
    height: 112px;
    border-radius: 50%;
    margin-right: 32px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    font-size: 80px;
    color: rgba(162, 162, 162, 1);
  `,
  DataGeneralInformation: styled.div`
    width: 100%;
  `,
  FullName: styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 28.13px;
    margin-bottom: 22px;
  `,
  Title: styled.h2`
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    color: rgba(77, 77, 77, 1);
    margin-bottom: 8px;
    margin-right: 10px;
  `,
  Description: styled.h3`
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
  `,
  WrapperFavorites: styled.div`
    width: 100%;
    background-color: rgb(255 255 255);
    padding: 24px;
  `,
  Favorites: styled.div``,
  FavoritesDescription: styled.p`
    font-size: 24px;
    font-weight: 600;
    line-height: 28.13px;
    margin-bottom: 25px;
  `,
  Nav: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.63px;
  `,
  NavLink: styled(Link)`
    color: rgba(119, 119, 119, 1);
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
  `,
  BlockMoreInformation: styled.div`
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    padding: 24px;
    height: 199.5px;
  `,
  TitleMoreInformation: styled.h2`
    font-size: 24px;
    font-weight: 600;
    line-height: 28.13px;
    margin-bottom: 10px;
  `,
  ContainerInformation: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
    gap: 20px;
    width: 80%;
    /* background-color: #f6f6f6; */
  `,
  List: styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
    padding-top: 32px;
    padding-left: 16px;
    justify-content: flex-start;
    @media (max-width: 825px) {
      gap: 5px;
    }
  `,
  ItemOffers: styled.li<{ $isItem: boolean }>`
    ${({ $isItem }) => `
     background-color: ${
       $isItem ? "rgba(8, 7, 65, 1)" : "rgba(255, 255, 255, 255)"
     };
     color: ${$isItem ? "rgba(255, 255, 255, 255)" : "rgba(8, 7, 65, 1)"};
`}
    padding: 15px;
    border-radius: 32px;
    font-size: 20px;
    cursor: pointer;
    @media (max-width: 825px) {
      font-size: 14px;
      padding: 14px;
    }
  `,
  ItemApplications: styled.li<{ $isItemApplications: boolean }>`
    ${({ $isItemApplications }) => `
   background-color: ${
     $isItemApplications ? "rgba(8, 7, 65, 1)" : "rgba(255, 255, 255, 255)"
   };
   color: ${
     $isItemApplications ? "rgba(255, 255, 255, 255)" : "rgba(8, 7, 65, 1)"
   };
`}
    padding: 15px;
    border-radius: 32px;
    font-size: 20px;
    cursor: pointer;
    @media (max-width: 825px) {
      font-size: 14px;
      padding: 14px;
    }
  `,
  ItemFavorites: styled.li<{ $isItemFavorites: boolean }>`
    ${({ $isItemFavorites }) => `
background-color: ${
      $isItemFavorites ? "rgba(8, 7, 65, 1)" : "rgba(255, 255, 255, 255)"
    };
color: ${$isItemFavorites ? "rgba(255, 255, 255, 255)" : "rgba(8, 7, 65, 1)"};
`}
    padding: 15px;
    border-radius: 32px;
    font-size: 20px;
    cursor: pointer;
    @media (max-width: 825px) {
      font-size: 14px;
      padding: 14px;
    }
  `,
  Offer: styled.div`
    color: rgba(107, 106, 141, 1);
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  `,
  Review: styled.div`
    color: rgba(107, 106, 141, 1);
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  `,
  SeeAllLink: styled(Link)`
    color: rgba(119, 119, 119, 1);
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    margin-bottom: 24px;
  `,
};
