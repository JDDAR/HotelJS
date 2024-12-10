import React, { useState } from "react";
import FloorSelector from "../componets/FloorSelector";
import RoomDetails from "../componets/RoomDetails";
import RoomMap from "../componets/RoomMap";

const Reservas = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);

  return (
    <div>
      <FloorSelector onSelectFloor={setSelectedFloor} />
      <RoomMap floor={selectedFloor} />
      <RoomDetails floor={selectedFloor} />
    </div>
  );
};

export default Reservas;
