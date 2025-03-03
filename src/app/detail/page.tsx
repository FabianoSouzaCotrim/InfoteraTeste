"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "../components/SearchBar";
import useSearchState from "../hooks/useSearchState";
import Image from "next/image";
import { fetchHotelById } from "../api/api";

interface Room {
  roomType: {
    name: string;
  };
  price: {
    currency: string;
    amount: number;
  };
  cancellationPolicies: {
    refundable: boolean;
  };
}

interface Hotel {
  id: number;
  name: string;
  address: string;
  stars: number;
  image: string;
  description: string;
  rooms: Room[];
}

const Detailhotel = () => {
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const searchState = useSearchState();

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      const fetchHotelDetails = async (hotelId: string) => {
        const hotelData = await fetchHotelById(Number(hotelId));

        if (hotelData) {
          const adaptedHotel: Hotel = {
            id: hotelData.id,
            name: hotelData.hotel.name,
            address: hotelData.hotel.address,
            stars: hotelData.hotel.stars,
            image: hotelData.hotel.image,
            description: hotelData.hotel.description,
            rooms: hotelData.rooms.map((room: any) => ({
              roomType: {
                name: room.roomType.name,
              },
              price: {
                currency: room.price.currency,
                amount: room.price.amount,
              },
              cancellationPolicies: {
                refundable: room.cancellationPolicies.refundable,
              },
            })),
          };

          setHotel(adaptedHotel);
          setLoading(false);
        }
      };

      fetchHotelDetails(id);
    }
  }, [searchParams]);

  if (loading) {
    return <p>Carregando os detalhes do hotel...</p>;
  }

  if (!hotel) {
    return <p>Hotel não encontrado!</p>;
  }

  const cleanDescription = hotel.description.replace(/<[^>]+>/g, "");

  return (
    <>
      <div className="flex items-center mt-24 mb-10 flex-col">
        <SearchBar {...searchState} />
        <div className="w-11/12 mt-10 p-6 bg-white shadow-lg rounded-lg">
          <div className="flex mx-4">
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={500}
              height={300}
              className="mr-4 rounded-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-text">{hotel.name}</h1>
              <div className="flex items-center">
                <img
                  className="pb-2 pr-2 text-caption"
                  src="images/home/location.svg"
                  alt=""
                />
                <p className="text-caption mb-2">{hotel.address}</p>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: hotel.stars }).map((_, index) => (
                  <Image
                    key={index}
                    src="/images/search/star.svg"
                    alt="Star"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                ))}
              </div>

              <div className="space-y-4 text-caption">
                <p>{cleanDescription}</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-text ml-4 mt-10 mb-6">
            Quartos Disponíveis
          </h2>
          {hotel.rooms.map((room, index) => (
            <div
              key={`${room.roomType.name}-${index}`}
              className="bg-lightGray flex items-center justify-between p-4 rounded-lg m-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-text">
                  {room.roomType.name}
                </h3>
                <p
                  className={`${
                    room.cancellationPolicies.refundable
                      ? "text-primary"
                      : "text-red"
                  } flex items-center mt-1`}
                >
                  <img
                    src={
                      room.cancellationPolicies.refundable
                        ? "/images/search/check.svg"
                        : "/images/search/cancel.svg"
                    }
                    alt=""
                    className="w-4 h-4 mr-1"
                  />
                  {room.cancellationPolicies.refundable
                    ? "Cancelamento gratuito"
                    : "Multa de cancelamento"}
                </p>
              </div>
              <div className="flex justify-between">
                <div className="text-center mr-4">
                  <p className="text-2xl font-bold text-primary">
                    R$ {room.price.amount}{" "}
                    <span className="text-sm font-normal">/ noite</span>
                  </p>
                  <p className="text-caption text-sm">Pagamento no hotel</p>
                </div>
                <button
                  className="bg-primary text-sm text-white px-4 rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => setModalOpen(true)}
                >
                  Reservar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out animate-fadeIn"
        >
          <div className="bg-overlay p-8 rounded-lg shadow-lg w-full h-full text-center text-white relative">
            <div className="relative w-full h-full flex flex-col justify-center items-center">
              <img src="/images/checkReserve.svg" alt="" />
              <h2 className="absolute mt-52 font-medium text-4xl">Obrigado!</h2>
              <p className="absolute mt-72 text-lg text-white">
                Reserva realizada com sucesso.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detailhotel;
