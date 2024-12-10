const roomsData = {
  floors: [
    {
      floor: 1,
      rooms: [
        { id: 101, type: "Individual", status: "available" },
        { id: 102, type: "Twin", status: "available" },
        { id: 103, type: "Individual", status: "occupied" },
        { id: 104, type: "Estudio", status: "available" },
        { id: 105, type: "Twin", status: "occupied" },
      ],
    },
    {
      floor: 2,
      rooms: [
        { id: 201, type: "Queen", status: "available" },
        { id: 202, type: "Queen", status: "occupied" },
        { id: 203, type: "Junior Suite", status: "available" },
        { id: 204, type: "Queen", status: "available" },
        { id: 205, type: "Junior Suite", status: "occupied" },
      ],
    },
    {
      floor: 3,
      rooms: [
        { id: 301, type: "Deluxe", status: "occupied" },
        { id: 302, type: "Suite", status: "available" },
        { id: 303, type: "Deluxe", status: "available" },
        { id: 304, type: "Suite Nupcial", status: "occupied" },
        { id: 305, type: "Suite Ejecutiva", status: "available" },
      ],
    },
    {
      floor: 4,
      rooms: [
        { id: 401, type: "Suite Presidencial", status: "occupied" },
        { id: 402, type: "Deluxe", status: "available" },
        { id: 403, type: "Suite", status: "occupied" },
        { id: 404, type: "Suite Nupcial", status: "available" },
        { id: 405, type: "Deluxe", status: "available" },
      ],
    },
    {
      floor: 5,
      rooms: [
        { id: 501, type: "Suite Presidencial", status: "available" },
        { id: 502, type: "Junior Suite", status: "occupied" },
        { id: 503, type: "Suite Ejecutiva", status: "available" },
        { id: 504, type: "Estudio", status: "occupied" },
        { id: 505, type: "Twin", status: "available" },
      ],
    },
  ],
};

export default roomsData;
