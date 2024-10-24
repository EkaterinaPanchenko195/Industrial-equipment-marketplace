import { useMemo } from "react";
import { StyledFormNewProduct as S } from "./AddNewProduct.style";
import { useForm } from "react-hook-form";
// import defFoto from "../../assets/imagesPageAddNewProduct//defaultfoto.svg";
import { useDispatch } from "react-redux";
import { fetchNewProduct } from "../../redux/slice/addNewProduct";

export const AddNewProduct = () => {
  // const [defaultfoto, setDefaultfoto] = useState<string | undefined>(defFoto);

  const dispatch = useDispatch()<any>;

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      tableX: 0,
      tableY: 0,
      z: 0,
      power: "",
      thicknessInSteel: 0,
      thicknessInInoxSteel: 0,
      id: 0,
      idAptint: 0,
      seller: "",
      model: "",
      type: "",
      manufacturer: "",
      manufacturerCountry: "",
      machineCondition: "",
      machineLocation: "",
      machineDimensions: "",
      cnc: "",
      machineWeight: "",
      yearOfProduction: "",
      url: "",
      isNew: true,
      isPublished: true,
      isSold: true,
      description: "",
      createdDate: new Date().toISOString(),
      category: {
        id: 11,
        name: "DEFAULT",
      },
    },
  });
  const categoryName = watch("category.name");

  // const readFile = (e: any) => {
  //   let target = e.target;
  //   let fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     setDefaultfoto(fileReader?.result as string);
  //   };
  //   fileReader.readAsDataURL(target.files[0]);
  // };

  const isLaser = useMemo(
    () => categoryName === "Лазерные станки",
    [categoryName]
  );

  const submit = (data: any) => {
    const newData = {
      ...data,
      url: "url/",
      isNew: data.isNew === "true",
      tableX: Number(data.tableX),
      tableY: Number(data.tableY),
      yearOfProduction: Number(data.yearOfProduction),
    };
    dispatch(fetchNewProduct(newData));
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Новый товар</S.Title>
        <S.Form onSubmit={handleSubmit(submit)}>
          {/* <S.FileProduct
            type="file"
            accept="image/*"
            {...register("url", {
              required: true,
              onChange: (e) => readFile(e),
            })}
          />
          <S.ImgProduct src={defaultfoto}/> */}
          <S.Label>
            Наименование
            <S.Input
              type="text"
              placeholder="текст"
              {...register("model", { required: true })}
            />
          </S.Label>
          <S.Label>
            <S.Select {...register("category.name", { required: true })}>
              <S.Option value="DEFAULT" disabled hidden>
                Выберите категорию
              </S.Option>
              <S.Option value="Фрезерные вертикальные станки">
                Фрезерные вертикальные станки
              </S.Option>
              <S.Option value="Фрезерные горизонтальные станки">
                Фрезерные горизонтальные станки
              </S.Option>
              <S.Option value="Токарные станки с ЧПУ">
                Токарные станки с ЧПУ
              </S.Option>
              <S.Option value="Pipe Bender">Pipe Bender</S.Option>
              <S.Option value={"Лазерные станки"}>Лазерные станки</S.Option>
              <S.Option value="Guillotine">Guillotine</S.Option>
              <S.Option value="Bending Machine Filter">
                Bending Machine Filter
              </S.Option>
            </S.Select>
          </S.Label>
          {isLaser && (
            <>
              <S.Label>
                Размер стола по X
                <S.Input
                  type="text"
                  placeholder="текст"
                  {...register("tableX", { required: true })}
                />
              </S.Label>
              <S.Label>
                Размер стола по Y
                <S.Input
                  type="text"
                  placeholder="текст"
                  {...register("tableY", { required: true })}
                />
              </S.Label>
              <S.Label>
                Система ЧПУ
                <S.Input
                  type="text"
                  placeholder="текст"
                  {...register("cnc", { required: true })}
                />
              </S.Label>
              <S.Label>
                Год производства
                <S.Input
                  type="text"
                  placeholder="текст"
                  {...register("yearOfProduction", { required: true })}
                />
              </S.Label>
              <S.LabelRadio>
                Состояние
                <S.Label>
                  <S.InputRadio
                    value="новое"
                    type="radio"
                    {...register("machineCondition", { required: true })}
                  />
                  новый
                </S.Label>
                <S.Label>
                  <S.InputRadio
                    value="б/у"
                    type="radio"
                    {...register("machineCondition", { required: true })}
                  />
                  б/у
                </S.Label>
              </S.LabelRadio>
              <S.Button>Отправить</S.Button>
            </>
          )}
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};
