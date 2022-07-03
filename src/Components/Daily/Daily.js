import "./Daily.modules.css";
import LetterBoxes from "../LetterBoxes/LetterBoxes";
import Keyboard from "../Keyboard/Keyboard";

function Daily({
  handleKeyClick,
  handleEnterClick,
  handleBackspaceClick,
  answer,
  currentWord,
  rowCount,
  userAttempts
}) {
  return (
    <div id="daily">
      <LetterBoxes
        currentWord={currentWord}
        rowCount={rowCount}
        userAttempts={userAttempts}
        answer={answer}
      />
      <Keyboard
        handleKeyClick={handleKeyClick}
        handleEnterClick={handleEnterClick}
        handleBackspaceClick={handleBackspaceClick}
      />
    </div>
  );
}

export default Daily;
