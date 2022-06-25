import "./Daily.modules.css";
import LetterBoxes from "../LetterBoxes/LetterBoxes";
import Keyboard from "../Keyboard/Keyboard";

function Daily({
  handleKeyClick,
  handleEnterClick,
  handleBackspaceClick,
  userWord,
}) {
  return (
    <div id="daily">
      <LetterBoxes userWord={userWord} />
      <Keyboard
        handleKeyClick={handleKeyClick}
        handleEnterClick={handleEnterClick}
        handleBackspaceClick={handleBackspaceClick}
      />
    </div>
  );
}

export default Daily;
