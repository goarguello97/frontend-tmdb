export interface Auth {
  error: any;
  errorPersist: any;
  operationOK: boolean;
  userRegister: string | null;
  userLogged: userLogged | null;
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

export interface userLogged {
  payload: Payload;
  token: string | null;
  iat: number;
  exp: number;
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
