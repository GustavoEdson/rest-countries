import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();

  return (
    <>
      <div className="shadow-md flex p-4 rounded-sm w-2xs gap-2">
        <FaSearch size={20} />
        <input
          className=""
          placeholder="Search for a country..."
          type="text"
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
};
