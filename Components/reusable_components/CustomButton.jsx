const CustomButton = ({ onSubmitAction, type, extraStyle, text }) => {
  return (
    <button type={type} onClick={onSubmitAction} className={extraStyle}>
      {text}
    </button>
  );
};

export default CustomButton;
