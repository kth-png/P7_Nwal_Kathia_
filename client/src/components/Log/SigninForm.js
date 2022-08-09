import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Toggle from "./Toggle";

const SigninForm = () => {
  return (
    <section className="homeSection">
      <div className="bckgrd">
        <img src="../img/icon.png" alt="" />
      </div>
      <div className="pageTitle">
        <h1>Le réseau social d'entreprise</h1>
      </div>
      <div className="formBlock">
        <Toggle
          newState={({ signIn, signUp, modalStateChanger }) => (
            <>
              <ul>
                <li
                  id="login"
                  className={signIn ? "active-btn" : null}
                  onClick={modalStateChanger}
                >
                  Connexion
                </li>
                <li
                  id="register"
                  className={signUp ? "active-btn" : null}
                  onClick={modalStateChanger}
                >
                  Inscription
                </li>
              </ul>
              {signIn && <LogIn />}
              {signUp && <SignUp />}
            </>
          )}
        />
      </div>
    </section>
  );
};

export default SigninForm;
