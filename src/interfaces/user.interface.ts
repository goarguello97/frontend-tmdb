export interface User {
  error: any;
  operationOK: boolean;
  user: UserData | null;
  loading: boolean;
}

interface UserData {
  id: string;
  name: string;
  lastname: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  moviesId: any;
  favorites: any[];
}
