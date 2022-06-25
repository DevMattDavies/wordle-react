import "./Daily.modules.css";
import LetterBoxes from "../LetterBoxes/LetterBoxes";
import Keyboard from "../Keyboard/Keyboard";

function Daily({ handleKeyClick, handleEnterClick, handleBackspaceClick }) {
  return (
    <div id="daily">
      <LetterBoxes />
      <Keyboard
        handleKeyClick={handleKeyClick}
        handleEnterCLick={handleEnterClick}
        handleBackspaceClick={handleBackspaceClick}
      />
    </div>
  );
}

export default Daily;
