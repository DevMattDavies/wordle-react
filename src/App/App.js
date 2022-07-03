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
  const [todaysWord, setTodaysWord] = useState([]);
  const [randomWord, setRandomWord] = useState([]);
  const [gameState, setGameState] = useState(0);
  const [letterCount, setLetterCount] = useState({});

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

  const [firstAttemptColor, setFirstAttemptColor] = useState([]);
  const [secondAttemptColor, setSecondAttemptColor] = useState([]);
  const [thirdAttemptColor, setThirdAttemptColor] = useState([]);
  const [fourthAttemptColor, setFourthAttemptColor] = useState([]);
  const [fifthAttemptColor, setFifthAttemptColor] = useState([]);
  const [sixthAttemptColor, setSixthAttemptColor] = useState([]);

  // Array of all user attempts to pass down as props cleanly
  const userAttempts = [
    firstAttempt,
    secondAttempt,
    thirdAttempt,
    fourthAttempt,
    fifthAttempt,
    sixthAttempt,
  ];

  const allColors = [
    firstAttemptColor,
    secondAttemptColor,
    thirdAttemptColor,
    fourthAttemptColor,
    fifthAttemptColor,
    sixthAttemptColor,
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
        setTodaysWord(response.data.today.split(""));
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

  // Produce an object counting instance of each letter in word of the day
  // useEffect(() => {
  //   let count = {};
  //   todaysWord.forEach(function (s) {
  //     count[s] ? count[s]++ : (count[s] = 1);
  //   });
  //   console.log(count);
  //   setLetterCount(count);
  // }, [todaysWord]);

  // onClick functions for keys
  const handleKeyClick = (e) => {
    console.log(todaysWord);
    if (gameState === 0) {
      e.preventDefault();
      const letter = e.target.innerText;
      setLetter(letter);
      if (currentWord.length >= 5) {
        setCurrentWord(currentWord.slice(0, 5));
      }
      if (currentWord.length < 5) {
        setCurrentWord([...currentWord, letter]);
      }
    }
  };

  // onClick function for Enter button
  const handleEnterClick = (e) => {
    e.preventDefault();
    if (currentWord.length < 5) {
      alert("Please enter 5 letters");
    } else if (currentWord.join("") === todaysWord) {
      console.log(`${currentWord.join("")} is CORRECT!`);
      letterToCorrectColor();
      setGameState(1);
    } else {
      letterToCorrectColor();
      wordToCorrectLine();
      setRowCount(rowCount + 1);
      setCurrentWord([]);
      setLetterColors([]);
    }
  };

  // Create color array and set all to grey
  // let colors = Array(currentWord.length).fill("lightgrey");
  // Return correct color as a string to pass down as prop
  // let colors = [];
  // const letterToCorrectColor = () => {
  //   let answer = todaysWord;
  //   console.log(answer);
  //   // loop through current guess and set to green if correct
  //   for (let i = 0; i < currentWord.length; i++) {
  //     console.log(currentWord)
  //     if (currentWord[i] === answer[i]) {
  //       colors = [...colors, "green"];
  //       // remove letter from answer so it's not scored again
  //       answer[i] = " ";
  //       console.log(answer)
  //     }
  //   }
  //   // loop through current guess and set to yellow if partially correct
  //   for (let i = 0; i < currentWord.length; i++) {
  //     if (colors[i] !== "green" && answer.includes(currentWord[i])) {
  //       colors = [...colors, "yellow"];
  //       answer[i] = " ";
  //       console.log(answer)
  //     }
  //   }

  //   for (let i = 0; i < currentWord.length; i++) {
  //     if (currentWord[i] !== answer[i]) {
  //       colors = [...colors, "grey"];
  //     }
  //   }
  //   setLetterColors(colors);
  // };

  let colors = [];
  // let colors = Array(currentWord.length).fill("lightgrey");
  const letterToCorrectColor = () => {
    let answer = todaysWord.toString().replace(/,/g, "");
    let guess = currentWord;
    console.log(answer, guess);

    guess.forEach((letter, index) => {
      if (letter == answer[index]) {
        console.log('correct letter')
        colors = [...colors, "green"];
        answer = answer.replace(letter, "");
      }
    });

    guess.forEach((letter) => {
      if (todaysWord.includes(letter)) {
        colors = [...colors, "yellow"];
        answer = answer.replace(letter, "");
      }
    });

    setLetterColors(colors);
  };

  // Switch expression to match entered word to correct line
  const wordToCorrectLine = () => {
    if (currentWord.length === 5) {
      switch (currentWord.join("") !== todaysWord) {
        case rowCount === 1:
          console.log(`${currentWord.join("")} is incorrect`);
          setFirstAttemptColor(colors);
          setFirstAttempt(currentWord);
          break;

        case rowCount === 2:
          console.log(`${currentWord.join("")} is incorrect`);
          setSecondAttemptColor(colors);
          setSecondAttempt(currentWord);
          break;

        case rowCount === 3:
          console.log(`${currentWord.join("")} is incorrect`);
          setThirdAttemptColor(colors);
          setThirdAttempt(currentWord);
          break;

        case rowCount === 4:
          console.log(`${currentWord.join("")} is incorrect`);
          setFourthAttemptColor(colors);
          setFourthAttempt(currentWord);
          break;

        case rowCount === 5:
          console.log(`${currentWord.join("")} is incorrect`);
          setFifthAttemptColor(colors);
          setFifthAttempt(currentWord);
          break;

        case rowCount === 6:
          console.log(`${currentWord.join("")} is incorrect`);
          setSixthAttemptColor(colors);
          setSixthAttempt(currentWord);
          break;
      }
    }
  };

  // onClick function for delete button
  const handleBackspaceClick = (e) => {
    setCurrentWord(currentWord.slice(0, currentWord.length - 1));
    console.log(letterColors);
    // setFirstAttemptColor(letterColors);
    // console.log(firstAttemptColor);
    console.log(rowCount);
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
              allColors={allColors}
              letterColors={letterColors}
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
