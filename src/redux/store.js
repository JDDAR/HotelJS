import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./slice/roomsSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
