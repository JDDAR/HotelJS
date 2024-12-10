import React from "react";

const FloorSelector = ({ onSelectFloor }) => {
  return (
    <div className="containerButtons">
      <div className="containerButtons__butons">
        {[1, 2, 3, 4, 5].map((floor) => (
          <button key={floor} onClick={() => onSelectFloor(floor)}>
            Piso {floor}
          </button>
        ))}
      </div>
      <h2>RESERVAS</h2>
    </div>
  );
};

export default FloorSelector;
