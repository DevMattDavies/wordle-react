import './LetterBoxes.modules.css'

import LetterRow from "../LetterRow/LetterRow";

function LetterBoxes() {
  return (
    <div className="letterbox-container">
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
    </div>
  );
}

export default LetterBoxes;
