import style from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "*",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "/",
    ".",
    "0",
    "=",
    "C",
    "<X",
  ];
  return (
    <div className={style.container}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={style.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
