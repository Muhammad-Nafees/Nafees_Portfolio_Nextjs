import { useState } from "react";
import Fixheight from "../shared-components/Fixheight"

const CustomInput = ({
  placeHolder,
  onChangeInputValue,
  value,
  error,
  touched,
  id,
}) => {

  const [isFocused, setIsFocused] = useState(false);


  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };


  return (
    <>
      <div className=" w-5/12 m-auto">
        <div className="border border-gray-500 py-2 rounded-lg ">
          <input
            value={value}
            id={id}
            autoComplete="off"
            onChange={(e) => onChangeInputValue(e.target.value)}
            placeholder={placeHolder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className="pl-3 bg-transparent border-none outline-none w-11/12"
          />
        </div>
        <div className="py-1">
        {error && ((touched && !value) || (error && value) || isFocused) ? (
            <p className="text-red-600 text-sm">{error}</p>
          ) : (
            <Fixheight/>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomInput;