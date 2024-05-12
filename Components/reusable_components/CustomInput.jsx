import { useState } from "react";

const CustomInput = ({
  placeHolder,
  onChangeInputValue,
  value,
  error,
  onBlur,
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
      <div className="w-5/12 m-auto h-16">
        <div className="border border-gray-500 py-2 rounded-lg">
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
        {error && touched && isFocused&&  <p className="text-red-600">{error}</p>}
      </div>
    </>
  );
};

export default CustomInput;
