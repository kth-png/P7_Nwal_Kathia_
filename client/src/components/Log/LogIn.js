import React from "react";

const LogIn = () => {
  return (
    <form action="">
      <div className="input-block">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="xxxx@xxxxxx.com"
        />
        <div className="email error"></div>
      </div>

      <div className="input-block">
        <label htmlFor="password">Mot de passe:</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Votre mot de passe"
        />
        <div className="error password"></div>
      </div>
      <input type="submit" id="submit" value="Se connecter" />
    </form>
  );
};

export default LogIn;
