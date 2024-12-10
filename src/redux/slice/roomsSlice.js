import { createSlice } from "@reduxjs/toolkit";
import roomsData from "../../data/roomData";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: roomsData,
  reducers: {
    toggleRoomStatus: (state, action) => {
      const { floor, roomId } = action.payload;
      const floorData = state.floors.find((f) => f.floor === floor);
      const room = floorData.rooms.find((r) => r.id === roomId);
      room.status = room.status === "available" ? "occupied" : "available";
    },
  },
});

export const { toggleRoomStatus } = roomsSlice.actions;
export default roomsSlice.reducer;
