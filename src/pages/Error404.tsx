import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TabTitle } from "../utils";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

TabTitle("Error 404")

  return (
    <div className="container-fluid error-404">
      <h1>Error404</h1>
      <p>Volveras a la página de inicio.</p>
    </div>
  );
};

export default Error404;
