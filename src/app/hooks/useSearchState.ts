"use client";

import { useState } from "react";

const useSearchState = () => {
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

  return {
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
  };
};

export default useSearchState;
