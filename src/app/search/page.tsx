"use client"

import { useState } from "react";
import SearchBar from "../components/SearchBar";


const Search: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(new Date("2022-12-22"));
  const [checkOut, setCheckOut] = useState<Date | null>(new Date("2022-12-28"));
  const [showGuestOptions, setShowGuestOptions] = useState<boolean>(false);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [tempAdults, setTempAdults] = useState<number>(adults);
  const [tempChildren, setTempChildren] = useState<number>(children);

  const handleApplyGuests = () => {
    setAdults(tempAdults);
    setChildren(tempChildren);
    setShowGuestOptions(false);
  };

  return (
    <>
    <div className="flex items-center p-60 min-h-screen flex-col">
      <SearchBar
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        adults={adults}
        children={children}
        tempAdults={tempAdults}
        tempChildren={tempChildren}
        setTempAdults={setTempAdults}
        setTempChildren={setTempChildren}
        showGuestOptions={showGuestOptions}
        setShowGuestOptions={setShowGuestOptions}
        handleApplyGuests={handleApplyGuests}
      />
    </div>
    </>
    
  );
};

export default Search;