import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { OneWord } from "../API";
import { RandomWord } from "../API";
import Navbar from "../Components/Navbar/Navbar";
import Daily from "../Components/Daily/Daily";
import Continuous from "../Components/Continuous/Continuous";

import "./App.css";

function App() {
  const [todaysWord, setTodaysWord] = useState("");

  // Call APIs and set words
  const oneWord = OneWord();
  console.log(`TODAYS WORD: ${todaysWord}`);
  const randomWord = RandomWord();
  console.log(`RANDOM WORD: ${randomWord}`);

  // onClick functions for keys

  const handleKeyClick = (e) => {};

  const handleEnterClick = (e) => {};

  const handleBackspaceClick = (e) => {};

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
