import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Error404 = () => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (flag) {
        navigate("/");
      } else {
        setFlag(true);
      }
    }, 3000);
  }, [flag]);

  return (
    <div className="container-fluid error-404">
      <h1>Error404</h1>
      <p>Volveras a la página de inicio.</p>
    </div>
  );
};

export default Error404;
