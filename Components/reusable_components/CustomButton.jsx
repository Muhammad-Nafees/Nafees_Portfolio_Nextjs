const CustomButton = ({ onSubmitAction, type, extraStyle, text }) => {
  return (
    <button onSubmit={onSubmitAction} type={type} className={extraStyle}>
      {text} </button>
  );
};

export default CustomButton;
