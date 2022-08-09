import React from "react";

const Navbar = () => {
  const uid = false;
  const user = { name: "Kathia" };
  return (
    <>
      <div>
        <header>
          <img src="../img/logo-red-cut-rsz-1.png" alt="logo groupomania" />
          {uid ? (
            <div className="nav">
              <p>
                Bonjour <span>{user.name}</span>
              </p>
              <a href="https://www.google.com">
                <i class="fa-solid fa-right-from-bracket"></i>
              </a>
            </div>
          ) : (
            <></>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;
