import React from "react";

function Animals() {
  let animals = ["Cat", "Dog", "Horse"];
  return (
    <div>
     <ol>
      {animals.map((animal) => (
          <li>{animal}</li>
      ))}
      </ol>
    </div>
  );
}

export default Animals;
