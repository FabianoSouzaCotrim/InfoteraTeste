"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GuestSelector from "./GuestSelector";
import SuggestionsSelector from "./SuggestionsSelector";

type SearchBarProps = {
  checkIn: Date | null;
  setCheckIn: (date: Date | null) => void;
  checkOut: Date | null;
  setCheckOut: (date: Date | null) => void;
  adults: number;
  children: number;
  tempAdults: number;
  tempChildren: number;
  setTempAdults: (num: number) => void;
  setTempChildren: (num: number) => void;
  showGuestOptions: boolean;
  setShowGuestOptions: (show: boolean) => void;
  handleApplyGuests: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  adults,
  children,
  tempAdults,
  tempChildren,
  setTempAdults,
  setTempChildren,
  showGuestOptions,
  setShowGuestOptions,
  handleApplyGuests,
}) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-2xl shadow-md space-x-2 w-11/12">
      <div className="flex flex-col space-x-2 flex-[1.5]">
        <div className="flex space-x-2 flex-[1.5]">
          <img src="images/home/location.svg" alt="localização" />
          <p className="text-sm text-caption">Destino</p>
        </div>
        <SuggestionsSelector />
      </div>

      <div className="border-l border-gray h-8" />

      <div className="flex flex-col space-x-2 flex-1">
        <div className="flex space-x-2 flex-[1.5]">
          <img src="images/home/calender.svg" alt="calendário" />
          <p className="text-sm text-caption">Entrada</p>
        </div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date ?? new Date())}
          className="font-semibold"
        />
      </div>

      <div className="border-l border-gray h-8" />

      <div className="flex flex-col space-x-2 flex-1">
        <div className="flex space-x-2 flex-[1.5]">
          <img src="images/home/calender.svg" alt="calendário" />
          <p className="text-sm text-caption">Saída</p>
        </div>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date ?? new Date())}
          className="font-semibold"
        />
      </div>

      <div className="border-l border-gray h-8" />

      <div className="relative flex-1">
        <div
          className="flex flex-col space-x-2 cursor-pointer"
          onClick={() => setShowGuestOptions(!showGuestOptions)}
        >
          <div className="flex space-x-2 flex-[1.5]">
            <img src="images/home/user.svg" alt="hóspedes" />
            <p className="text-sm text-caption">Hóspedes</p>
          </div>
          <p className="font-semibold">
            {adults} Adultos
            {children > 0 ? (
              <>
                , {children} Crianças,
                <br />1 Quarto
              </>
            ) : (
              <> , 1 Quarto</>
            )}
          </p>
        </div>

        {showGuestOptions && (
          <GuestSelector
            tempAdults={tempAdults}
            tempChildren={tempChildren}
            setTempAdults={setTempAdults}
            setTempChildren={setTempChildren}
            applyGuests={handleApplyGuests}
          />
        )}
      </div>

      <button className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
        Pesquisar
      </button>
    </div>
  );
};

export default SearchBar;
