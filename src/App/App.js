import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Daily from "../Components/Daily/Daily";
import Continuous from "../Components/Continuous/Continuous";

import "./App.css";

function App() {
  // States
  const [todaysWord, setTodaysWord] = useState("");
  const [randomWord, setRandomWord] = useState("");

  const [letter, setLetter] = useState("");
  const [userWord, setUserWord] = useState([]);
  const [userGuess, setUserGuess] = useState([]);
  const [userWordOne, setUserWordOne] = useState([]);
  const [userWordTwo, setUserWordTwo] = useState([]);
  const [userWordThree, setUserWordThree] = useState([]);
  const [userWordFour, setUserWordFour] = useState([]);
  const [userWordFive, setUserWordFive] = useState([]);
  const [userWordSix, setUserWordSix] = useState([]);
  const [rowCount, setRowCount] = useState(1);

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
    setUserWord([...userWord, letter]);
    if (userWord.length <= 4) {
      setUserWordOne([...userWordOne, letter]);
      setUserGuess([...userWordOne, letter]);
    } else if (userWord.length > 4 && userWord.length <= 9 && rowCount === 2) {
      setUserWordTwo([...userWordTwo, letter]);
      setUserGuess([...userWordTwo, letter]);
    } else if (userWord.length > 9 && userWord.length <= 14 && rowCount === 3) {
      setUserWordThree([...userWordThree, letter]);
      setUserGuess([...userWordThree, letter]);
    } else if (
      userWord.length > 14 &&
      userWord.length <= 19 &&
      rowCount === 4
    ) {
      setUserWordFour([...userWordFour, letter]);
      setUserGuess([...userWordFour, letter]);
    } else if (
      userWord.length > 19 &&
      userWord.length <= 24 &&
      rowCount === 5
    ) {
      setUserWordFive([...userWordFive, letter]);
      setUserGuess([...userWordFive, letter]);
    } else if (
      userWord.length > 24 &&
      userWord.length <= 29 &&
      rowCount === 6
    ) {
      setUserWordSix([...userWordSix, letter]);
      setUserGuess([...userWordSix, letter]);
    }
  };

  // onClick function for Enter button
  const handleEnterClick = (e) => {
    // if (userWord.length < 5) {
    // alert('Please enter 5 letters');
    console.log(userGuess);
    if (userGuess.join("") !== todaysWord) {
      console.log("wrong");
      setRowCount(rowCount + 1);
    } else {
      console.log("right");
    }
    // }
  };

  // onClick function for delete button
  const handleBackspaceClick = (e) => {
    console.log("backspace clicked");
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
              userWord={userWord}
              // userWordTwo={userWord}
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
