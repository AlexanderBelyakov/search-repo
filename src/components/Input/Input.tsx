import "./Input.css";

import { useEffect, useState } from "react";

const Input = ({
  onSearch,
  clear,
}: {
  onSearch: (input: string) => void;
  clear: boolean;
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (clear) {
      setInputValue("");
    }
  }, [clear]);

  return (
    <input
      className="input"
      type="search"
      placeholder="Search repo"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
};

export default Input;
