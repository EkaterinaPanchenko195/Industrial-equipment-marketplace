import favorite from "../../assets/imagesHeader/colocol.svg";
import user from "../../assets/imagesHeader/person.svg";
import ru from "../../assets/imagesHeader/flag.svg";
import plus from "../../assets/imagesHeader/plus.svg";
import categories from "../../assets/imagesHeader/categories.svg";
import { useNavigate } from "react-router-dom";

import { StyledHeader as S } from "./Header.styles";
import { useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "@firebase/auth";

function Header() {
  const [ishandleProfileClick, setishandleProfileClick] = useState(false);

  const navigate = useNavigate();

  const handleProfileClick = () => {
    setishandleProfileClick(!ishandleProfileClick);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleProductsClick = () => {
    navigate("/post-an-offer");
  };

  const handleProfileClickLogin = () => {
    setishandleProfileClick(!ishandleProfileClick);
    if (auth.currentUser?.uid) {
      navigate("/user-profile/:id");
    } else {
      navigate("/login");
    }
  };

  const handleProfileClickExit = () => {
    if (auth.currentUser?.uid) {
      signOut(auth)
        .then(() => {
          console.log("Success sign out!");
        })
        .catch((error) => {
          console.log("An errorduring sign out happened.", error);
        });
    }
    setishandleProfileClick(!ishandleProfileClick);
    navigate("/");
  };

  const handleCategoriesClick = () => {
    navigate("/categories");
  };
  return (
    <S.HeaderContainer>
      <S.Logo onClick={handleHomeClick}>
        <h1>VMCCNC</h1>
      </S.Logo>
      <S.Button onClick={handleCategoriesClick} className="header-category">
        <S.IconButton src={categories} alt="" />
        Категории
      </S.Button>
      <S.HeaderInput type="text" placeholder="Поиск" />
      <S.ButtonAddProduct onClick={handleProductsClick}>
        <S.IconButton src={plus} alt="" />
        Выложить объявления
      </S.ButtonAddProduct>
      <S.HeaderSection onClick={handleProfileClick}>
        <S.Icon src={user} alt="" className="user" />
        <S.Text>Профиль</S.Text>
      </S.HeaderSection>
      <S.HeaderSection>
        <S.Icon src={favorite} alt="" className="favorits" />
        <S.Text>Уведомления </S.Text>
      </S.HeaderSection>
      <S.LanguageButton>
        <S.LanguageDiv>
          RU <S.LanguageImage src={ru} alt="Language Image" />
        </S.LanguageDiv>
      </S.LanguageButton>
      {ishandleProfileClick && (
        <S.Container>
          <S.FormContainer>
            <S.ButtonLogin onClick={handleProfileClickLogin}>
              Войти в профиль
            </S.ButtonLogin>
            <S.ButtonExit onClick={handleProfileClickExit}>Выйти</S.ButtonExit>
          </S.FormContainer>
        </S.Container>
      )}
    </S.HeaderContainer>
  );
}

export default Header;
