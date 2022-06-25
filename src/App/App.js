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
    if (userWord.length <= 4) {
      setUserWord([...userWord, letter]);
    }
  };

  // onClick function for Enter button
  const handleEnterClick = (e) => {
    // if (userWord.length < 5) {
    console.log(userWord);
    console.log("Enter clicked");
    // alert('Please enter 5 letters');
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
