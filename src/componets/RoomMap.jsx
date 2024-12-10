import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleRoomStatus } from "../redux/slice/roomsSlice";

const RoomMap = ({ floor }) => {
  const rooms = useSelector(
    (state) => state.rooms.floors.find((f) => f.floor === floor).rooms,
  );
  const dispatch = useDispatch();

  const handleRoomClick = (room) => {
    dispatch(toggleRoomStatus({ floor, roomId: room.id }));
  };

  return (
    <>
      <h2>Mapa del Hotel</h2>
      <div className="containerMap">
        {rooms.map((room) => (
          <div
            className="containerMap__romms"
            key={room.id}
            style={{
              border: room.status === "available" ? "3px solid #ffb82d" : "",
              background: room.status === "occupied" ? "#c1121f" : "",
              color: room.status === "occupied" ? "#e7edf6" : "",
            }}
            onClick={() => handleRoomClick(room)}
          >
            {room.id} - {room.type}
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomMap;
