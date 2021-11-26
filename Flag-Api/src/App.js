import React from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Country from "./components/Country";
import Error from "./components/Error";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Countries />
        </Route>
        <Route path="/:name" children={<Country />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
