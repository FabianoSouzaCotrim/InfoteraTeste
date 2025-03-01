import axios from "axios";

const API_URL = "http://localhost:3333";

export const api = axios.create({
  baseURL: API_URL,
});


export const fetchSuggestions = async () => {
  try {
    const res = await api.get("/suggestions");
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar sugestões:", error);
    return [];
  }
};


export const fetchHotels = async () => {
  try {
    const res = await api.get("/hotels");
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar hotéis:", error);
    return [];
  }
};


export const fetchHotelById = async (id: number) => {
  try {
    const res = await api.get(`/hotels/${id}`);
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.error(`Erro ao buscar hotel com ID ${id}:`, error);
    return null;
  }
};
