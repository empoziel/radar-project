export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.812898",
    bl_lng: "27.59446",
    tr_lat: "41.582989",
    tr_lng: "44.816771",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "fd41214671msh539f29d77f4dc34p1789dejsn984ed01ba79c",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailopt = {
  headers: {
    "X-RapidAPI-Key": "fd41214671msh539f29d77f4dc34p1789dejsn984ed01ba79c",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
