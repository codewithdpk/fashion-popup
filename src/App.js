import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} component={Homepage} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
