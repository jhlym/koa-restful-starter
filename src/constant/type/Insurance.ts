export type Company = {
  name: string;
  code: string;
  insuType: string;
  faxNumber: string;
  emailAddr: string;
  phoneNumber: string;
};

export type GetCompanyResponse = {
  RESULT: string;
  errCode: string;
  errMsg: string;
  list: Company[];
};
