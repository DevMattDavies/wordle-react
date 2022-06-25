import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { OneWord } from "../API";
import { RandomWord } from "../API";
import Navbar from "../Components/Navbar/Navbar";
import Daily from "../Components/Daily/Daily";

import "./App.css";

function App() {
  const todaysWord = OneWord();
  console.log(`TODAYS WORD: ${todaysWord}`);
  const randomWord = RandomWord();
  console.log(`RANDOM WORD: ${randomWord}`);

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Daily />
          </Route>
          <Route path="/continuous">{/* <Continuous /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
