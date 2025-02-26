"use client"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GuestSelector from "./GuestSelector";

const Search = () => {
  const [destination, setDestination] = useState("São Paulo");
  const [checkIn, setCheckIn] = useState<Date | null>(new Date("2022-12-22"));
  const [checkOut, setCheckOut] = useState<Date | null>(new Date("2022-12-28"));
  const [guests, setGuests] = useState("2 Adultos, 1 Quarto");
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <>
      <div className="flex items-center p-60 min-h-screen flex-col">
        <h1 className="text-center font-poppins font-semibold text-5xl tracking-normal text-text mb-12">
          Os melhores <span className="text-primary">Hotéis</span> e{" "}
          <span className="text-primary">Destinos</span>
          <br /> para sua viagem
        </h1>

        <div className="flex items-center bg-white p-4 rounded-2xl shadow-md space-x-2 w-[87%]">


  <div className="flex items-center space-x-2 flex-[1.5]">
    <img src="images/home/location.svg" alt="localização" />
    <div>
      <p className="text-sm text-caption">Destino</p>
      <p className="font-semibold">{destination}</p>
    </div>
  </div>

  <div className="border-l border-gray-300 h-8" />


  <div className="flex items-center space-x-2 flex-1">
  <img src="images/home/calender.svg" alt="calendário" />
    <div>
      <p className="text-sm text-caption">Entrada</p>
      <DatePicker 
        selected={checkIn} 
        onChange={(date) => setCheckIn(date ?? new Date())} 
        className="font-semibold" 
      />
    </div>
  </div>

  <div className="border-l border-gray-300 h-8" />


  <div className="flex items-center space-x-2 flex-1">
  <img src="images/home/calender.svg" alt="calendário" />
    <div>
      <p className="text-sm text-caption">Saída</p>
      <DatePicker 
        selected={checkOut} 
        onChange={(date) => setCheckOut(date ?? new Date())} 
        className="font-semibold" 
      />
    </div>
  </div>

  <div className="border-l border-gray-300 h-8" />

  <div className="relative flex-1">
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowGuestOptions(!showGuestOptions)}>
    <img src="images/home/user.svg" alt="hóspedes" />
      <div>
        <p className="text-sm text-caption">Hóspedes</p>
        <p className="font-semibold">{adults} Adultos, {children} Crianças</p>
      </div>
    </div>
    {showGuestOptions && (<GuestSelector/>)}
  </div>

  <button className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
    Pesquisar
  </button>
</div>

      </div>
    </>
  );
};

export default Search;
