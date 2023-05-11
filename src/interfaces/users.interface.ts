export interface Users {
  error: any;
  operationOK: boolean;
  users: [] | null;
  loading: boolean;
}

export interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  moviesId: any;
  favorites: any[];
}
