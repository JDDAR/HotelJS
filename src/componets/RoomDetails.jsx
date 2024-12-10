import React from "react";
import { useSelector } from "react-redux";
import roomDetailsData from "../data/roomDetailsData"; // Ajusta la ruta según tu estructura

const RoomDetails = ({ floor }) => {
  const rooms = useSelector(
    (state) => state.rooms.floors.find((f) => f.floor === floor).rooms,
  );

  return (
    <div className="containerRoomDetails">
      <div>
        <h2>Características del Piso {floor}</h2>
      </div>
      <div className="containerRoomDetails__containerRoom">
        {rooms.map((room) => {
          const details = roomDetailsData[room.type];
          return (
            <div className="containerRoomDetails__room">
              <p key={room.id}>
                <strong>
                  Habitación {room.id} ({room.type}):
                </strong>{" "}
                {details.description} -{" "}
                <em>Precio por noche: {details.pricePerNight}</em>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomDetails;
