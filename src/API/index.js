import axios from "axios";
import { useState, useEffect } from "react";


// Fetch word of the day
export function OneWord() {
  const [todaysWord, setTodaysWord] = useState("");

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
        setTodaysWord(response.data.today);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return todaysWord;
}


// Fetch all words and select a random one
export function RandomWord() {
  const [randomWord, setRandomWord] = useState("");

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
        setRandomWord(randomWord);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return randomWord;
}
