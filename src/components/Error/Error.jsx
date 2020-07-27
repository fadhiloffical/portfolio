import React from "react";
import { useDencrypt } from "use-dencrypt-effect";
import {NavLink} from 'react-router-dom';

	

import "./Error.css";

const values = ["Error 404", "Return Back Home"];

const Error = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2200);

    return () => clearInterval(action);
  }, []);

  return (
      <React.Fragment>
          <div className="mainPageContainer">
            <h1>{result}</h1>
            <li><NavLink exact to="/" >Back to Home</NavLink></li>
          </div>
      </React.Fragment>
        );
};
export default Error;