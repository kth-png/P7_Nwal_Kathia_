import React from "react";

const SignUp = () => {
  return (
    <form action="">
      <div className="input-block ">
        <label htmlFor="firstname">Prénom:</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Votre prénom"
        />
        <div className="email error"></div>
      </div>
      <div className="input-block ">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="xxxx@xxxxxx.com"
        />
        <div className="email error"></div>
      </div>

      <div className="input-block password">
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Votre mot de passe"
        />
        <div className="error password"></div>
      </div>

      <input type="submit" id="submit" value="S'inscrire" />
    </form>
  );
};

export default SignUp;
