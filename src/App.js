import React from "react";
import "./App.css";
import "./style.css";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="Wrap">
      <div className="Contents">
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/detail/:week_name" exact component={Detail} />
      </div>
    </div>
  );
}

export default App;
