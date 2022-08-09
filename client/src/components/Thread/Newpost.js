import React from "react";

const Newpost = () => {
  return (
    <div className="newpost-card">
      <img src="../img/Aria.jpg" alt="profile" className="profile-picture" />
      <textarea
        name="newpost"
        id="newpost"
        cols="30"
        rows="10"
        placeholder="Quoi de neuf ? "
      ></textarea>
      <button>Publier</button>
    </div>
  );
};

export default Newpost;
