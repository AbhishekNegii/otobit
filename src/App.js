import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
            <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/homepage" exact>
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
