import { FaMinus, FaPlus } from "react-icons/fa";

interface GuestSelectorProps {
  tempAdults: number;
  tempChildren: number;
  setTempAdults: (value: number) => void;
  setTempChildren: (value: number) => void;
  applyGuests: () => void;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({ 
  tempAdults, 
  tempChildren, 
  setTempAdults, 
  setTempChildren, 
  applyGuests 
}) => {
  return (
    <div className="absolute bg-white shadow-lg rounded-xl p-4 w-64 mt-9">
      <div className="relative">
        <div className="absolute -left-2 -top-5 w-3 h-3 bg-white rotate-45"></div>
      </div>

      <div className="flex py-2 border-b flex-col">
        <p className="font-semibold text-text">Adultos</p>
        <div className="flex justify-between space-x-4">
          <button
            onClick={() => setTempAdults(Math.max(1, tempAdults - 1))}
            className="w-5 h-5 flex items-center justify-center bg-lightGray rounded-full text-caption hover:bg-gray"
          >
            <FaMinus size={12} />
          </button>
          <span className="font-semibold">{tempAdults}</span>
          <button
            onClick={() => setTempAdults(tempAdults + 1)}
            className="w-5 h-5 flex items-center justify-center bg-lightGray rounded-full text-caption hover:bg-gray"
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      <div className="flex py-2 border-b flex-col">
        <p className="font-semibold text-text">Crianças</p>
        <div className="flex justify-between space-x-4">
          <button
            onClick={() => setTempChildren(Math.max(0, tempChildren - 1))}
            className="w-5 h-5 flex items-center justify-center bg-lightGray rounded-full text-caption hover:bg-gray"
          >
            <FaMinus size={12} />
          </button>
          <span className="font-semibold">{tempChildren}</span>
          <button
            onClick={() => setTempChildren(tempChildren + 1)}
            className="w-5 h-5 flex items-center justify-center bg-lightGray rounded-full text-caption hover:bg-gray"
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button 
          onClick={applyGuests}
          className="px-6 py-1 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition"
        >
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default GuestSelector;
