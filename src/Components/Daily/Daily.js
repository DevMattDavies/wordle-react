import "./Daily.modules.css";
import LetterBoxes from "../LetterBoxes/LetterBoxes";
import Keyboard from "../Keyboard/Keyboard";

function Daily({
  handleKeyClick,
  handleEnterClick,
  handleBackspaceClick,
  currentWord,
  rowCount,
  userAttempts,
  allColors,
  letterColors
}) {

  // console.log(currentColors)
  return (
    <div id="daily">
      <LetterBoxes
        currentWord={currentWord}
        rowCount={rowCount}
        userAttempts={userAttempts}
        allColors={allColors}
        letterColors={letterColors}
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
