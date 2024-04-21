
const CustomInput =({placeHolder}) =>{
return(
    <div className="w-5/12 border border-gray-500 py-2 rounded-lg m-auto my-4">
          <input
            placeholder={placeHolder}
            className="pl-3 bg-transparent border-none outline-none w-11/12"
          />
        </div>
)
}

export default CustomInput;