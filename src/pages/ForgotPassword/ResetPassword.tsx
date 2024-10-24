// не используется

// import { useNavigate } from "react-router";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { TResetPassword } from "../../types/types";
import { StyledResetPassword as S } from "./ResetPassword.styles";
// import { useEffect, useState } from "react";

export const ResetPassword = () => {
  // const [isPasswordRepeatValid, setIsPasswordRepeatValid] = useState(true);

  // const navigate = useNavigate();

  // const { register, handleSubmit, getValues, setFocus } =
  //   useForm<TResetPassword>({
  //     progressive: true,
  //     defaultValues: {
  //       passwordNew: "",
  //       passwordRepeatNew: "",
  //     },
  //   });

  // const submit: SubmitHandler<TResetPassword> = () => {
  //   let valuePassword = getValues("passwordNew");
  //   let valuePasswordRepeat = getValues("passwordRepeatNew");

  //   if (valuePasswordRepeat !== valuePassword) {
  //     setIsPasswordRepeatValid(false);
  //     return false;
  //   }

  //   setIsPasswordRepeatValid(true);
  //   // console.log(data)
  //   navigate("/login");
  // };

  // useEffect(() => {
  //   setFocus("passwordNew");
  // }, []);

  return (
    <S.Container>
      <S.Block>
        <S.Title>
          {" "}
          Письмо для сброса пароля отправлено, на Вашу электронную почту должно
          было прийти сообщение.
        </S.Title>
        <S.Description>Если вы не получили письмо:</S.Description>
        <S.Description>
          Убедитесь, что вы указали почтовый ящик, к которому сейчас привязан
          ваш аккаунт
        </S.Description>
        <S.Description>
          Проверьте папку «Спам» в вашем почтовом ящике, так как письмо могло
          быть помечено как спам
        </S.Description>
        <S.Description>
          Письмо может прийти с задержкой до 5 минут. Несмотря на то, что письма
          высылаются моментально, вы можете столкнуться с задержкой в
          зависимости от нагрузок на серверы.
        </S.Description>
        {/* <S.Form onSubmit={handleSubmit(submit)}>
          <S.Label>
            Введите новый пароль
            <br />
            <S.InputPassword
              type="password"
              placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
              {...register("passwordNew", {
                required: true,
                minLength: 6,
                maxLength: 15,
              })}
            ></S.InputPassword>
            <S.IconLock />
          </S.Label>
          <S.Label>
            Подтвердите новый пароль
            <br />
            <S.InputPasswordRepeat
              type="password"
              placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
              {...register("passwordRepeatNew", {
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
          <S.Button>Продолжить</S.Button>
        </S.Form> */}
      </S.Block>
    </S.Container>
  );
};
