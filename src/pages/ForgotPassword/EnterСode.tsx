import { useNavigate } from "react-router";
import { StyledEnterСode as S } from "./EnterСode.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { TFormEnterСode } from "../../types/types";
import { useEffect } from "react";

export const EnterСode = () => {
  const navigate = useNavigate();

  const arrInputs: {
    inputName: keyof TFormEnterСode;
    focus: keyof TFormEnterСode;
  }[] = [
    {
      inputName: "num1",
      focus: "num2",
    },
    {
      inputName: "num2",
      focus: "num3",
    },
    {
      inputName: "num3",
      focus: "num4",
    },
    {
      inputName: "num4",
      focus: "num5",
    },
    {
      inputName: "num5",
      focus: "num6",
    },
    {
      inputName: "num6",
      focus: "num6",
    },
  ];

  const { register, handleSubmit, setFocus } = useForm<TFormEnterСode>({
    progressive: true,
    defaultValues: {
      num1: "",
      num2: "",
      num3: "",
      num4: "",
      num5: "",
      num6: "",
    },
  });

  const submit: SubmitHandler<TFormEnterСode> = () => {
    // console.log(data);
    return navigate("/reset-password");
  };

  useEffect(() => {
    setFocus("num1");
  }, []);

  const handleChange = (value: string, inputName: keyof TFormEnterСode) => {
    if (value) {
      setFocus(inputName);
    }
  };
  let keyMap = 0;

  return (
    <S.Container>
      <S.Block>
        <S.Title>Забыли пароль ?</S.Title>
        <S.Description>
          Введите код из письма, высланного Вам на почту
        </S.Description>
        <S.Form onSubmit={handleSubmit(submit)}>
          <S.Wrapper>
            {arrInputs.map((input) => (
              <S.Input key={keyMap++}
                type="text"
                {...register(`${input.inputName}`, {
                  required: true,
                  maxLength: 1,
                  minLength: 1,
                  onChange: (event) =>
                    handleChange(event.target.value, `${input.focus}`),
                })}
              />
            ))}
          </S.Wrapper>
          <S.Button>Продолжить</S.Button>
        </S.Form>
      </S.Block>
    </S.Container>
  );
};
