import { useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { persistLogin } from "../features/user/authSlice";
import { Navigate } from "react-router-dom";

//Middleware para la limitación de acceso a rutas rutas

const PrivateRoute = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const { userLogged, loading } = useAppSelector((state) => state.auth);
  const userLog = localStorage.getItem("token");

  useEffect(() => {
    if (userLog) {
      dispatch(persistLogin());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <h1>Cargando</h1>
  ) : userLogged ? (
    children
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default PrivateRoute;
