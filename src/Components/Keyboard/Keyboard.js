import "./Keyboard.modules.css";

function Keyboard({ handleKeyClick, handleEnterClick, handleBackspaceClick }) {
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];

  return (
    <div id="keyboard">
      <div id="row-1">
        {keys.slice(0, 10).map((letter) => {
          return (
            <p onClick={handleKeyClick} className="keyboard-letter">
              {letter}
            </p>
          );
        })}
      </div>
      <div id="row-2">
        {keys.slice(10, 19).map((letter) => {
          return (
            <p onClick={handleKeyClick} className="keyboard-letter">
              {letter}
            </p>
          );
        })}
      </div>
      <div id="row-3">
        <p onClick={handleEnterClick} className="enter-button">
          ENTER
        </p>
        {keys.slice(19).map((letter) => {
          return (
            <p onClick={handleKeyClick} className="keyboard-letter">
              {letter}
            </p>
          );
        })}
        <p onClick={handleBackspaceClick} className="backspace-button">
          ⌫
        </p>
      </div>
    </div>
  );
}

export default Keyboard;
