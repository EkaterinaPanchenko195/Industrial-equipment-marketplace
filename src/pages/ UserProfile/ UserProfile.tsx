import { onAuthStateChanged, signOut } from "firebase/auth";
import { TUserProfile } from "../../types/types";
import { StyledUserProfile as S } from "./UserProfile.styles";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

export const UserProfile = () => {
  // const { id } = useParams<string>();

  const db = getDatabase();

  const [user, setUser] = useState<TUserProfile | null>(null);
  const [isItemOffers, setIsItemOffers] = useState(true);
  const [isItemApplications, setIsItemApplications] = useState(false);
  const [isItemFavorites, setIsItemFavorites] = useState(false);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const dataUser = ref(db, "Users/" + user.uid);
  //       onValue(dataUser, (snapshot) => {
  //         const data = snapshot.val();
  //         setUser(data);
  //       });
  //       // onValue(user, (snapshot) => {
  //       //   const data = snapshot.val();
  //       //   setUser(data);
  //       // });
  //     } else {
  //       console.log("No user is signed in.");
  //     }
  //   });
  // }, []);

  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("Success sign out!");
  //     })
  //     .catch((error) => {
  //       console.log("An errorduring sign out happened.", error);
  //     });
  // };


  return (
    <S.Container>
      <S.Wrapper>
        <S.ContainerPerson>
          <S.BlockAvatar>
            <S.Avatar>{user?.name[0]}</S.Avatar>
            <S.FullName>
              {user?.surname} {user?.name} {user?.patronymic}
            </S.FullName>
          </S.BlockAvatar>
          <S.Block>
            <S.DataGeneralInformation>
              <S.BlockGeneralInformation>
                <S.Title>Компания</S.Title>
                <S.Description>{user?.companyName}</S.Description>
                <S.Title>Должность</S.Title>
                <S.Description>{user?.position}</S.Description>
                <S.Title>Почта:</S.Title>
                <S.Description>{user?.email}</S.Description>
                <S.Title>Телефон:</S.Title>
                <S.Description>{user?.phoneNumber}</S.Description>
                <S.Title>Сайт:</S.Title>
                <S.Description>{user?.webSite}</S.Description>
                <S.Title>Рег. номер:</S.Title>
                <S.Description>{user?.companyRegistrationNumber}</S.Description>
                <S.Title>Страна регистрации:</S.Title>
                <S.Description>
                  {user?.companyRegistrationCountry}
                </S.Description>
                <S.Title>Мессенджер:</S.Title>
                <S.Description>{user?.socialNetworks}</S.Description>
              </S.BlockGeneralInformation>
            </S.DataGeneralInformation>
          </S.Block>
          <S.Nav>
            <S.NavLink to={"/edit-profile"}>Изменить</S.NavLink>
            <S.NavLink to={"/"}
            //  onClick={handleLogout}
             >
              Выйти
            </S.NavLink>
          </S.Nav>
        </S.ContainerPerson>
        <S.ContainerInformation>
          <S.List>
            <S.ItemOffers
              $isItem={isItemOffers}
              onClick={() => {
                setIsItemOffers(!isItemOffers);
                if (isItemFavorites) {
                  setIsItemFavorites(!isItemFavorites);
                }
                if (isItemApplications) {
                  setIsItemApplications(!isItemApplications);
                }
              }}
            >
              Предложения
            </S.ItemOffers>
            <S.ItemApplications
              $isItemApplications={isItemApplications}
              onClick={() => {
                setIsItemApplications(!isItemApplications);
                if (isItemFavorites) {
                  setIsItemFavorites(!isItemFavorites);
                }
                if (isItemOffers) {
                  setIsItemOffers(!isItemOffers);
                }
              }}
            >
              Заявки
            </S.ItemApplications>
            <S.ItemFavorites
              $isItemFavorites={isItemFavorites}
              onClick={() => {
                setIsItemFavorites(!isItemFavorites);
                if (isItemApplications) {
                  setIsItemApplications(!isItemApplications);
                }
                if (isItemOffers) {
                  setIsItemOffers(!isItemOffers);
                }
              }}
            >
              Избранное
            </S.ItemFavorites>
          </S.List>
          {/* <S.BlockMoreInformation>
            <S.TitleMoreInformation>Ваши предложения</S.TitleMoreInformation>
            <S.SeeAllLink to={"/see-all"}> Смотреть все</S.SeeAllLink>
            <S.Offer>"Здесь будут отображаться Ваши предложения. "</S.Offer>
          </S.BlockMoreInformation>
          <S.BlockMoreInformation>
            <S.TitleMoreInformation>На рассмотрении</S.TitleMoreInformation>
            <S.SeeAllLink to={"/see-all"}> Смотреть все</S.SeeAllLink>

            <S.Review>
              "Здесь будут отображаться Ваши предложения, которые находятся на
              рассмотрении. "
            </S.Review>
          </S.BlockMoreInformation> */}
        </S.ContainerInformation>
        {/* <S.WrapperFavorites>
        <S.Favorites />
        <S.FavoritesDescription>Избранное</S.FavoritesDescription>
        <S.SeeAllLink to={"/see-all"}> Смотреть все</S.SeeAllLink>
        <S.Review>"Здесь будут отображаться избранные товары. "</S.Review>
      </S.WrapperFavorites> */}
      </S.Wrapper>
    </S.Container>
  );
};
