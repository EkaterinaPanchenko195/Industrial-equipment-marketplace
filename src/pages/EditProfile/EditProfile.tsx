import { useEffect, useMemo, useState } from "react";
import { StyledEditProfile as S } from "./EditProfile.styles";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { TFormSignUp, TUserProfile } from "../../types/types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { getDatabase, onValue, ref, set } from "firebase/database";

export const EditProfile = () => {
  const [user, setUser] = useState<TUserProfile | null>(null);

  const db = getDatabase();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<TFormSignUp>({
    progressive: true,

    defaultValues: useMemo(
      () => ({
        position: user?.position,
        companyName: user?.companyName,
        companyRegistrationCountry: user?.companyRegistrationCountry,
        webSite: user?.webSite,
        email: user?.email,
        socialNetworks: user?.socialNetworks,
        phoneNumber: user?.phoneNumber,
        surname: user?.surname,
        name: user?.name,
        patronymic: user?.patronymic,
        companyRegistrationNumber: user?.companyRegistrationNumber,
      }),
      [user]
    ),
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user]);

  // const submit: SubmitHandler<TFormSignUp> = (data) => {
  //   if (auth.currentUser) {
  //     set(ref(db, "Users/" + auth.currentUser?.uid), {
  //       name: data.name,
  //       surname: data.surname,
  //       companyName: data.companyName,
  //       companyRegistrationCountry: data.companyRegistrationCountry,
  //       companyRegistrationNumber: data.companyRegistrationNumber,
  //       email: data.email,
  //       phoneNumber: data.phoneNumber,
  //       position: data.position,
  //       socialNetworks: data.socialNetworks,
  //       webSite: data.webSite,
  //       patronymic: data.patronymic,
  //     } as TUserProfile)
  //       .then(() => {
  //         return navigate(`/user-profile/${auth.currentUser?.uid}`);
  //       })
  //       .catch(() => alert("данный email уже существует"));
  //   }
  // };

  useEffect(() => {
    const db = getDatabase();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const dataUser = ref(db, "Users/" + user.uid);
        onValue(dataUser, (snapshot) => {
          const data = snapshot.val();
          setUser(data);
        });
        // onValue(user, (snapshot) => {
        //   const data = snapshot.val();
        //   setUser(data);
        // });
      } else {
        console.log("No user is signed in.");
      }
    });
  }, []);
  return (
    <S.Container>
      <S.Block>
        <S.Title>Редактирование сведений</S.Title>
        <S.BlockSignUp></S.BlockSignUp>
        <S.Form
        //  onSubmit={handleSubmit(submit)}
         >
          <S.Label>
            <S.LabelStar>*</S.LabelStar> Фамилия
            <br />
            <S.Input type="text" {...register("surname", { required: true })} />
            <S.IconPerson />
          </S.Label>
          <S.Label>
            <S.LabelStar>*</S.LabelStar> Имя
            <br />
            <S.Input type="text" {...register("name", { required: true })} />
            <S.IconPerson />
          </S.Label>
          <S.Label>
            Отчество (при наличии)
            <br />
            <S.Input
              type="text"
              {...register("patronymic", { required: false })}
            />
            <S.IconPerson />
          </S.Label>
          <S.Label>
            <S.LabelStar>*</S.LabelStar> Почта
            <br />
            <S.Input type="email" {...register("email", { required: true })} />
            <S.IconEnvelope />
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Телефон
              <br />
              <S.Input
                type="text"
                {...register("phoneNumber", { required: true })}
              />
            </S.Label>
            <S.Label>
              Мессенджер
              <br />
              <S.Input
                placeholder="Введите телефон или никнейм"
                type="text"
                {...register("socialNetworks", { required: false })}
              />
            </S.Label>
          </S.Label>
          <S.Label>
            <S.LabelStar>*</S.LabelStar> Должность
            <br />
            <S.Input
              type="text"
              {...register("position", { required: true })}
            />
          </S.Label>
          <S.Label>
            <S.LabelStar>*</S.LabelStar> Наименование компании
            <br />
            <S.Input
              type="text"
              {...register("companyName", { required: true })}
            />
          </S.Label>
          <S.Label>
            <S.LabelStar>*</S.LabelStar> Страна регистрации компании
            <br />
            <S.Input
              type="text"
              {...register("companyRegistrationCountry", { required: true })}
            />
          </S.Label>
          <S.Label>
            <S.LabelStar>*</S.LabelStar> Регистрационный номер компании
            <br />
            <S.Input
              type="text"
              {...register("companyRegistrationNumber", { required: true })}
            />
          </S.Label>
          <S.Label>
            Сайт
            <br />
            <S.Input
              placeholder="https:/"
              type="text"
              {...register("webSite", { required: false })}
            />
          </S.Label>
          <S.ButtonSignUp>сохранить изменения</S.ButtonSignUp>
        </S.Form>
      </S.Block>
    </S.Container>
  );
};
