import "./LetterRow.modules.css";

function LetterRow({ userWord }) {
  return (
    <div className="letter-row">
      <p className="letter-box">{userWord[0]}</p>
      <p className="letter-box">{userWord[1]}</p>
      <p className="letter-box">{userWord[2]}</p>
      <p className="letter-box">{userWord[3]}</p>
      <p className="letter-box">{userWord[4]}</p>
    </div>
  );
}

export default LetterRow;
