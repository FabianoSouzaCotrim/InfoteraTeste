import { useEffect, useState } from "react";
import axios from "axios";

interface Hotel {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export default function HotelList() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3333/hotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar hotéis:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando hotéis...</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover rounded-md" />
          <div className="mt-2">
            <h3 className="text-lg font-bold">{hotel.name}</h3>
            <p className="text-gray-600">R$ {hotel.price} / noite</p>
            <p className="text-yellow-500">{"★".repeat(hotel.rating)}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Ver mais</button>
          </div>
        </div>
      ))}
    </div>
  );
}
