import './LetterBoxes.modules.css'

import LetterRow from "../LetterRow/LetterRow";

function LetterBoxes() {
  return (
    <div className="letterbox-container">
      <LetterRow id="letter-row-1" />
      <LetterRow id="letter-row-2" />
      <LetterRow id="letter-row-3" />
      <LetterRow id="letter-row-4" />
      <LetterRow id="letter-row-5" />
      <LetterRow id="letter-row-6" />
    </div>
  );
}

export default LetterBoxes;
