import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

	

import "./MainPage.css";

const values = ["Full Stack Developer", "App Developer", "Front-end Developer" , "Web Developer" , "Back-end Developer" , "Web Designer", "IOS Developer", "Android Developer"];

const MainPage = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, []);

  return (
      <React.Fragment>
          <div className="mainPageContainer">
          <h5>Hello World!</h5>
          <h2>I'm Fadhil Asharaf</h2>
          <h1>{result}</h1>
          </div>
      </React.Fragment>
        );
};
export default MainPage;