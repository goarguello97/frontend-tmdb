import Logo from "../assets/img/TMDB.svg";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import useMediaQuery from "../hooks/useMediaQuery";

const SignUp = () => {
  const { width } = useMediaQuery();
  return width > 768 ? (
    <div className="sign-up-page">
      <div className="container-fluid container-login">
        <div className="login-form">
          <RegisterForm />
        </div>
        <div className="container-logo">
          <img src={Logo} alt="Logo" className="logo-login" />
        </div>
      </div>
    </div>
  ) : (
    <div className="sign-up-page">
      <div className="register-mobile">
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignUp;
