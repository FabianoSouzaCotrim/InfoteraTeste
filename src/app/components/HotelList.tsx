"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchHotels } from "../api/api";

interface Hotel {
  id: number;
  hotel: {
    name: string;
    address: string;
    stars: number;
    image: string;
    description: string;
  };
  lowestPrice: {
    currency: string;
    amount: number;
  };
}

const HotelList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHotels = async () => {
      const data = await fetchHotels();
      setHotels(data);
      setLoading(false);
    };

    loadHotels();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-lg font-semibold">Carregando hotéis...</p>
    );
  }

  return (
    <div className="grid w-full justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 p-14">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
            <div className="absolute bottom-1 left-1 text-white text-xs font-semibold px-2 py-1 rounded-lg z-10">
              <span className="font-semibold text-2xl">
                R$ {hotel.lowestPrice.amount}
              </span>
              <span className="text-gray"> / noite</span>
            </div>
            <Image
              src={hotel.hotel.image}
              alt={hotel.hotel.name}
              layout="fill"
              objectFit="cover"
              className="rounded-b-lg"
            />
          </div>
          <div>
            <h1 className="text-lg px-3 pt-6 font-bold text-text">
              {hotel.hotel.name}
            </h1>

            <div className="flex px-3 pb-5 items-center justify-between">
              <div className="flex">
                {Array.from({ length: hotel.hotel.stars }).map((_, index) => (
                  <Image
                    key={index}
                    src="/images/search/star.svg"
                    alt="Star"
                    width={20}
                    height={20}
                    className={"mr-2"}
                  />
                ))}
              </div>
              <Link href={`/detail?id=${hotel.id}`} passHref>
                <button className="bg-primary text-white py-2 px-10 rounded-full hover:bg-blue-600 text-sm">
                  Ver mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
