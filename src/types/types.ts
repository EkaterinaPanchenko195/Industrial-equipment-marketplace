export type TTitle = {
  title: string;
};

export type TFileChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type TItem = {
  label: string;
  value: number;
};

export type TUserProfile = {
  companyName: string;
  companyRegistrationCountry: string;
  companyRegistrationNumber: string;
  email: string;
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  position: string;
  socialNetworks?: string;
  webSite?: string;
  patronymic?: string;
};

export type TFormSignUp = {
  email: string;
  password: string;
  passwordRepeat: string;
  position: string;
  companyName: string;
  country: string;
  companyRegistrationNumber: string;
  companyRegistrationCountry: string;
  webSite?: string;
  socialNetworks: string;
  phoneNumber?: string;
  surname: string;
  name: string;
  patronymic?: string;
};

export type TFormLogin = {
  email: string;
  password: string;
};

export type TFormEnterСode = {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;
  num6: string;
};

export type TResetPassword = {
  passwordNew?: string;
  passwordRepeatNew?: string;
  email: string;
};

export type TCategorie = {
  tableX?: number;
  tableY?: number;
  z?: number;
  power?: string;
  thicknessInSteel?: number;
  thicknessInInoxSteel?: number;
  id?: number;
  idAptint?: number;
  seller?: string;
  model?: string;
  type?: string;
  manufacturer?: string;
  manufacturerCountry?: string;
  machineCondition?: string;
  machineLocation?: string;
  machineDimensions?: string;
  cnc?: string;
  machineWeight?: string;
  yearOfProduction?: string;
  url?: string;
  isNew?: boolean;
  isPublished?: boolean;
  isSold?: boolean;
  description?: string;
  createdDate?: string | number;
  category: {
    id?: number;
    name?: string;
  };
};
