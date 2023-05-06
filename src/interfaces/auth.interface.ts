export interface Auth {
  error: any;
  operationOK: boolean;
  userLogged: userLogged;
  loading: boolean;
  isUserLogged: boolean;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  lastname: string;
  email: string;
  password: string;
  password2: string;
}

interface userLogged {
  payload: Payload;
  token: string;
}

interface Payload {
  email: string;
  name: string;
  lastname: string;
  id: string;
}

export interface ErrorRegister {
  errores: number;
  errors: Error[];
}

interface Error {
  value: string;
  msg: string;
  param: string;
  location: string;
}
