import { useEffect, useState } from "react";
import { StyledSignUp as S } from "./SignUp.styles";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { TFormSignUp, TUserProfile } from "../../types/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { getDatabase, ref, set } from "firebase/database";

export const SignUp = () => {
  const [isPasswordRepeatValid, setIsPasswordRepeatValid] = useState(true);

  const navigate = useNavigate();

  const { register, handleSubmit, getValues, setFocus } = useForm<TFormSignUp>({
    progressive: true,
    defaultValues: {
      position: "",
      companyName: "",
      companyRegistrationCountry: "",
      companyRegistrationNumber: "",
      webSite: "",
      email: "",
      password: "",
      passwordRepeat: "",
      socialNetworks: "",
      phoneNumber: "",
      surname: "",
      name: "",
      patronymic: "",
    },
  });

  const submit: SubmitHandler<TFormSignUp> = (data) => {
    let valuePassword = getValues("password");
    let valuePasswordRepeat = getValues("passwordRepeat");

    if (valuePasswordRepeat !== valuePassword) {
      setIsPasswordRepeatValid(false);
      return false;
    }

    setIsPasswordRepeatValid(true);

    const db = getDatabase();
    console.log(db)

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        set(ref(db, "Users/" + auth.currentUser?.uid), {
          id: auth.currentUser?.uid,
          name: data.name,
          surname: data.surname,
          companyName: data.companyName,
          companyRegistrationCountry: data.companyRegistrationCountry,
          companyRegistrationNumber: data.companyRegistrationNumber,
          email: data.email,
          phoneNumber: data.phoneNumber,
          position: data.position,
          socialNetworks: data.socialNetworks,
          webSite: data.webSite,
          patronymic: data.patronymic,
        } as TUserProfile);
        return navigate("/login");
      })
      .catch(() => alert("данный email уже существует"));
  };

  useEffect(() => {
    setFocus("surname");
  }, []);

  return (
      <S.Container>
        <S.Block>
          <S.Title>Регистрация</S.Title>
          <S.BlockSignUp>
            <S.SignUPWrapper>
              <S.SignUPDescription>
                Если уже есть аккаунт, Вы можете
              </S.SignUPDescription>
              <S.SignUpLink to="/login">Войти !</S.SignUpLink>
            </S.SignUPWrapper>
          </S.BlockSignUp>
          <S.Form onSubmit={handleSubmit(submit)}>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Фамилия
              <br />
              <S.InputPerson
                type="text"
                {...register("surname", { required: true })}
              ></S.InputPerson>
              <S.IconPerson />
            </S.Label>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Имя
              <br />
              <S.InputPerson
                type="text"
                {...register("name", { required: true })}
              ></S.InputPerson>
              <S.IconPerson />
            </S.Label>
            <S.Label>
              Отчество (при наличии)
              <br />
              <S.InputPerson
                type="text"
                {...register("patronymic", { required: false })}
              ></S.InputPerson>
              <S.IconPerson />
            </S.Label>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Почта
              <br />
              <S.InputEmail
                placeholder="example@mail.ru"
                type="email"
                {...register("email", { required: true })}
              ></S.InputEmail>
              <S.IconEnvelope />
              <S.Label>
                <S.LabelStar>*</S.LabelStar> Телефон
                <br />
                <S.Input
                  placeholder="Введите номер"
                  type="text"
                  {...register("phoneNumber", { required: true })}
                ></S.Input>
              </S.Label>
              <S.Label>
                Мессенджер
                <br />
                <S.Input
                  placeholder="Введите телефон или никнейм"
                  type="text"
                  {...register("socialNetworks", { required: false })}
                ></S.Input>
              </S.Label>
            </S.Label>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Должность
              <br />
              <S.Input
                placeholder="пример: Директор"
                type="text"
                {...register("position", { required: true })}
              ></S.Input>
            </S.Label>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Наименование компании
              <br />
              <S.Input
                placeholder="пример: ООО “Интеграл”"
                type="text"
                {...register("companyName", { required: true })}
              ></S.Input>
            </S.Label>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Страна регистрации компании
              <br />
              <S.Input
                placeholder="пример: Россия"
                type="text"
                {...register("companyRegistrationCountry", { required: true })}
              ></S.Input>
            </S.Label>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Регистрационный номер компании
              <br />
              <S.Input
                placeholder="пример: 1234567890123"
                type="text"
                {...register("companyRegistrationNumber", { required: true })}
              ></S.Input>
            </S.Label>
            <S.Label>
              Сайт
              <br />
              <S.Input
                placeholder="https:/"
                type="text"
                {...register("webSite", { required: false })}
              ></S.Input>
            </S.Label>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Пароль
              <br />
              <S.InputPassword
                type="password"
                placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 15,
                })}
              ></S.InputPassword>
              <S.IconLock />
            </S.Label>
            <S.Label>
              <S.LabelStar>*</S.LabelStar> Подтвердите пароль
              <br />
              <S.InputPasswordRepeat
                type="password"
                placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
                {...register("passwordRepeat", {
                  required: true,
                  minLength: 6,
                  maxLength: 15,
                })}
              ></S.InputPasswordRepeat>
              <S.IconLock />
            </S.Label>
            {!isPasswordRepeatValid && (
              <>
                <S.Error>ошибка в повторе пороля</S.Error>
              </>
            )}
            <S.ButtonSignUp>Войти</S.ButtonSignUp>
            <S.FormDescription>Или войти с помощью</S.FormDescription>
            <S.WrapperMedia>
              <S.MediaFacebook />
              <S.MediaApple />
              <S.MediaGoogle />
            </S.WrapperMedia>
          </S.Form>
        </S.Block>
    </S.Container>
  );
};
