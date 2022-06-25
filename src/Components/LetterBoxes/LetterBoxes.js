import "./LetterBoxes.modules.css";

import LetterRow from "../LetterRow/LetterRow";

function LetterBoxes({ userWord }) {
  return (
    <div className="letterbox-container">
      <LetterRow id="letter-row-1" userWord={userWord.slice(0, 5)} />
      <LetterRow id="letter-row-2" userWord={userWord.slice(5, 10)} />
      <LetterRow id="letter-row-3" userWord={userWord.slice(10, 15)} />
      <LetterRow id="letter-row-4" userWord={userWord.slice(15, 20)} />
      <LetterRow id="letter-row-5" userWord={userWord.slice(20, 25)} />
      <LetterRow id="letter-row-6" userWord={userWord.slice(25, 30)} />
    </div>
  );
}

export default LetterBoxes;
