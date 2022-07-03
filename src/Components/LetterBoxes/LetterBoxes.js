import "./LetterBoxes.modules.css";
import LetterRow from "../LetterRow/LetterRow";

function LetterBoxes({
  currentWord,
  rowCount,
  userAttempts,
  allColors,
  letterColors,
}) {


  // console.log(letterColors);

  return (
    <div className="letterbox-container">
      <LetterRow
        id="letter-row-1"
        userWord={rowCount === 1 ? currentWord : userAttempts[0]}
        colors={rowCount === 1 ? letterColors : allColors[0]}
      />
      <LetterRow
        id="letter-row-2"
        userWord={rowCount === 2 ? currentWord : userAttempts[1]}
        colors={rowCount === 2 ? letterColors : allColors[1]}
      />
      <LetterRow
        id="letter-row-3"
        userWord={rowCount === 3 ? currentWord : userAttempts[2]}
        colors={rowCount === 3 ? letterColors : allColors[2]}
      />
      <LetterRow
        id="letter-row-4"
        userWord={rowCount === 4 ? currentWord : userAttempts[3]}
        colors={rowCount === 4 ? letterColors : allColors[3]}
      />
      <LetterRow
        id="letter-row-5"
        userWord={rowCount === 5 ? currentWord : userAttempts[4]}
        colors={rowCount === 5 ? letterColors : allColors[4]}
      />
      <LetterRow
        id="letter-row-6"
        userWord={rowCount === 6 ? currentWord : userAttempts[5]}
        colors={rowCount === 6 ? letterColors : allColors[5]}
      />
    </div>
  );
}

export default LetterBoxes;
