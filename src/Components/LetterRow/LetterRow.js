import "./LetterRow.modules.css";

function LetterRow({ userWord, colors }) {
  // console.log(colors)

  return (
    <div className="letter-row">
      <p style={{backgroundColor: colors[0]}} className="letter-box">{userWord[0]}</p>
      <p style={{backgroundColor: colors[1]}} className="letter-box">{userWord[1]}</p>
      <p style={{backgroundColor: colors[2]}} className="letter-box">{userWord[2]}</p>
      <p style={{backgroundColor: colors[3]}} className="letter-box">{userWord[3]}</p>
      <p style={{backgroundColor: colors[4]}} className="letter-box">{userWord[4]}</p>
    </div>
  );
}

export default LetterRow;
