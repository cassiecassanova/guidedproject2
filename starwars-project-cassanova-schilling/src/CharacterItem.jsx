import React, { useState, useEffect } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const getCharacters = function () {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(characters);
      });
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div className="page">
      <h1>Star Wars Universe Lookup</h1>
      {/* characters.map((characers)=>{
        return()

      }) */}
    </div>
  );
}
export default Characters;
