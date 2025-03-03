const API_URL = "http://localhost:3333";


export const fetchSuggestions = async () => {
  try {
    const res = await fetch(`${API_URL}/suggestions`);
    if (!res.ok) {
      throw new Error('Erro ao buscar sugestões');
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar sugestões:", error);
    return [];
  }
};


export const fetchHotels = async () => {
  try {
    const res = await fetch(`${API_URL}/hotels`);
    if (!res.ok) {
      throw new Error('Erro ao buscar hotéis');
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar hotéis:", error);
    return [];
  }
};


export const fetchHotelById = async (id: number) => {
  try {
    const res = await fetch(`${API_URL}/hotels/${id}`);
    if (!res.ok) {
      throw new Error(`Erro ao buscar hotel com ID ${id}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Erro ao buscar hotel com ID ${id}:`, error);
    return null;
  }
};
