import React from "react";
import SigninForm from "../components/Log/SigninForm";
import Navbar from "../components/Navbar";
import Thread from "../components/Thread/Thread";

const Home = () => {
  const uid = true;
  return (
    <>
      <div className="navbar">
        <Navbar />
        test git
      </div>

      {uid ? (
        <Thread />
      ) : (
        <div className="sign-container">
          <SigninForm />
        </div>
      )}
    </>
  );
};

export default Home;
