import LoginForm from "../components/LoginForm/LoginForm";
import Logo from "../assets/img/TMDB.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const SignIn = () => {
  const { width } = useMediaQuery();

  return width > 768 ? (
    <div className="sign-in-page">
      <div className="container-fluid container-login">
        <div className="container-logo">
          <img src={Logo} alt="Logo" className="logo-login" />
        </div>
        <div className="login-form">
          <LoginForm />
        </div>
      </div>
    </div>
  ) : (
    <div className="sign-in-page">
      <div className="login-mobile">
        <LoginForm/>
      </div>
    </div>
  );
};

export default SignIn;
