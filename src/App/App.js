/* eslint-disable default-case */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Daily from "../Components/Daily/Daily";
import Continuous from "../Components/Continuous/Continuous";

import "./App.css";

function App() {
  // States for setting API returns
  const [todaysWord, setTodaysWord] = useState("");
  const [randomWord, setRandomWord] = useState("");

  // States for setting current letters and rows
  const [letter, setLetter] = useState("");
  const [letterColors, setLetterColors] = useState([]);
  const [currentWord, setCurrentWord] = useState([]);
  const [rowCount, setRowCount] = useState(1);

  // States for setting words to correct line on enter press
  const [firstAttempt, setFirstAttempt] = useState([]);
  const [secondAttempt, setSecondAttempt] = useState([]);
  const [thirdAttempt, setThirdAttempt] = useState([]);
  const [fourthAttempt, setFourthAttempt] = useState([]);
  const [fifthAttempt, setFifthAttempt] = useState([]);
  const [sixthAttempt, setSixthAttempt] = useState([]);

  // Array of all user attempts to pass down as props cleanly
  const userAttempts = [
    firstAttempt,
    secondAttempt,
    thirdAttempt,
    fourthAttempt,
    fifthAttempt,
    sixthAttempt,
  ];

  // --- API Req for words ---
  // Todays word API Req
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://wordle-answers-solutions.p.rapidapi.com/today",
      headers: {
        "X-RapidAPI-Key": "8baf515165mshc8c59c32ea2d82dp150e4ajsn871cb1384926",
        "X-RapidAPI-Host": "wordle-answers-solutions.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(`Todays word is: ${response.data.today}`);
        setTodaysWord(response.data.today);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Random word API Req
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://wordle-answers-solutions.p.rapidapi.com/answers",
      headers: {
        "X-RapidAPI-Key": "8baf515165mshc8c59c32ea2d82dp150e4ajsn871cb1384926",
        "X-RapidAPI-Host": "wordle-answers-solutions.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const allWords = response.data.data;
        const randomNum = Math.floor(Math.random() * allWords.length);
        const randomWord = allWords[randomNum].answer;
        console.log(`Random word is: ${randomWord}`);
        setRandomWord(randomWord);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // onClick functions for keys
  const handleKeyClick = (e) => {
    e.preventDefault();
    const letter = e.target.innerText;
    setLetter(letter);
    if (currentWord.length >= 5) {
      setCurrentWord(currentWord.slice(0, 5));
    }
    if (currentWord.length < 5) {
      setCurrentWord([...currentWord, letter]);
    }
  };

  // onClick function for Enter button
  const handleEnterClick = (e) => {
    if (currentWord.length < 5) {
      alert("Please enter 5 letters");
    } else if (currentWord.join("") === todaysWord) {
      console.log(`${currentWord.join("")} is CORRECT!`);
    } else {
      wordToCorrectLine();
      // letterToCorrectColor();
    }
  };

  // Switch expression to match entered word to correct line
  const wordToCorrectLine = () => {
    if (currentWord.length === 5) {
      switch (currentWord.join("") !== todaysWord) {
        case rowCount === 1:
          console.log(`${currentWord.join("")} is incorrect`);
          setFirstAttempt(currentWord);
          setRowCount(rowCount + 1);
          setCurrentWord([]);
          break;

        case rowCount === 2:
          console.log(`${currentWord.join("")} is incorrect`);
          setSecondAttempt(currentWord);
          setRowCount(rowCount + 1);
          setCurrentWord([]);
          break;

        case rowCount === 3:
          console.log(`${currentWord.join("")} is incorrect`);
          setThirdAttempt(currentWord);
          setRowCount(rowCount + 1);
          setCurrentWord([]);
          break;

        case rowCount === 4:
          console.log(`${currentWord.join("")} is incorrect`);
          setFourthAttempt(currentWord);
          setRowCount(rowCount + 1);
          setCurrentWord([]);
          break;

        case rowCount === 5:
          console.log(`${currentWord.join("")} is incorrect`);
          setFifthAttempt(currentWord);
          setRowCount(rowCount + 1);
          setCurrentWord([]);
          break;

        case rowCount === 6:
          console.log(`${currentWord.join("")} is incorrect`);
          setSixthAttempt(currentWord);
          setRowCount(rowCount + 1);
          setCurrentWord([]);
          break;
      }
    }
  };

  // Return correct color as a string to pass down as prop
  // const letterToCorrectColor = () => {
  //   const colors = currentWord.map((letter, index) => () => {
  //     // for (let i = 0; i < currentWord.length; i++) {
  //     if (letter === todaysWord[index]) {
  //       // setLetterColors([...letterColors, "green"]);
  //      return colors[index] = "green";
  //     } else {
  //       // setLetterColors([...letterColors, "grey"]);
  //       return colors[index] = "grey";
  //     }
  //   });
  //   console.log(currentWord)
  // };



  // onClick function for delete button
  const handleBackspaceClick = (e) => {
    // console.log("backspace clicked");
    // console.log(rowCount);
    // console.log(userAttempts);
    console.log(letterColors);
  };

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Daily
              handleKeyClick={handleKeyClick}
              handleEnterClick={handleEnterClick}
              handleBackspaceClick={handleBackspaceClick}
              answer={todaysWord}
              currentWord={currentWord}
              rowCount={rowCount}
              userAttempts={userAttempts}
            />
          </Route>
          <Route path="/continuous">
            <Continuous />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
