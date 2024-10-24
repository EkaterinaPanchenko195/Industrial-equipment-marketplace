import { useNavigate } from "react-router";
import { StyledForgotPassword as S } from "./ForgotPassword.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { TResetPassword } from "../../types/types";
import { useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, setFocus } = useForm<TResetPassword>({
    progressive: true,
    defaultValues: {
      email: "",
    },
  });

  // const submit: SubmitHandler<TResetPassword> = (data) => {
  //   const auth = getAuth();
  //   sendPasswordResetEmail(auth, data.email)
  //     .then(() => {
  //       console.log("Password reset email sent!");
  //       navigate("/reset-password");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage, errorCode);
  //     });
  //   return;
  // };

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <S.Container>
      <S.Block>
        <S.Title>Забыли пароль?</S.Title>
        <S.Description>Введите почту, привязанную к аккаунту</S.Description>
        <S.Form 
        // onSubmit={handleSubmit(submit)}
        >
          <S.Label>
            Почта <br />
            <S.Input
              type="email"
              placeholder="example@mail.ru"
              {...register(`email`, {
                required: true,
              })}
            />
            <S.IconEnvelope />
          </S.Label>
          <S.Button>Продолжить</S.Button>
        </S.Form>
      </S.Block>
    </S.Container>
  );
};
