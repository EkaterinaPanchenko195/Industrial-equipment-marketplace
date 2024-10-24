import { useEffect, useState } from "react";
import { StyledLogin as S } from "./Login.styles";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { TFormLogin } from "../../types/types";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/slice/login";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const submit: SubmitHandler<TFormLogin> = (data) => {
  //   setPersistence(auth, browserLocalPersistence).then(() =>
  //     signInWithEmailAndPassword(auth, data.email, data.password)
  //       .then(() => {
  //         dispatch(setUserId(auth.currentUser?.uid));
  //         navigate(`/user-profile/${auth.currentUser?.uid}`);
  //       })
  //       .catch((error) => console.log(error))
  //   );
  // };

  const { register, handleSubmit, setFocus } = useForm<TFormLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <S.Container>
      <S.Block>
        <S.Title>Войти</S.Title>
        <S.BlockSignUp>
          <S.SignUPDescription>
            Если нет зарегистрированного аккаунта
          </S.SignUPDescription>
          <S.SignUPWrapper>
            <S.SignUPDescription>Вы можете </S.SignUPDescription>
            <S.SignUpLink to="/sign-up">Зарегистрироваться !</S.SignUpLink>
          </S.SignUPWrapper>
        </S.BlockSignUp>
        <S.Form 
        // onSubmit={handleSubmit(submit)}
        >
          <S.Label>
            Почта
            <br />
            <S.InputEmail
              placeholder="example@mail.ru"
              type="email"
              {...register("email", { required: true })}
            ></S.InputEmail>
            <S.IconEnvelope />
          </S.Label>
          <S.Label>
            Пароль
            <br />
            <S.InputPassword
              placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
              type={isPasswordVisible ? "password" : "text"}
              {...register("password", { required: true })}
            />
            <S.IconLock />
            <S.IconEye
              $isPasswordVisible={isPasswordVisible}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </S.Label>
          <S.WrapperForgotPassword>
            <S.LinkForgotPassword to="/forgot-password">
              Забыли пароль?
            </S.LinkForgotPassword>
          </S.WrapperForgotPassword>
          <S.Button>Войти</S.Button>
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
