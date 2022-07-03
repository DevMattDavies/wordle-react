import "./LetterBoxes.modules.css";

import LetterRow from "../LetterRow/LetterRow";

function LetterBoxes({ currentWord, rowCount, answer, userAttempts }) {
  return (
    <div className="letterbox-container">
      <LetterRow
        id="letter-row-1"
        userWord={rowCount === 1 ? currentWord : userAttempts[0]}
        answer={answer}
      />
      <LetterRow
        id="letter-row-2"
        userWord={rowCount === 2 ? currentWord : userAttempts[1]}
        answer={answer}
      />
      <LetterRow
        id="letter-row-3"
        userWord={rowCount === 3 ? currentWord : userAttempts[2]}
        answer={answer}
      />
      <LetterRow
        id="letter-row-4"
        userWord={rowCount === 4 ? currentWord : userAttempts[3]}
        answer={answer}
      />
      <LetterRow
        id="letter-row-5"
        userWord={rowCount === 5 ? currentWord : userAttempts[4]}
        answer={answer}
      />
      <LetterRow
        id="letter-row-6"
        userWord={rowCount === 6 ? currentWord : userAttempts[5]}
        answer={answer}
      />
    </div>
  );
}

export default LetterBoxes;
