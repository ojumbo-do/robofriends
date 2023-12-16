import React from "react";

// destructure props in the parimeters
const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa2 ma2 grow bw3 shadow tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
