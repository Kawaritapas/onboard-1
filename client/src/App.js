import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signup from "../src/pages/Signup"
import Onboard from "../src/pages/Onboard";
function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={signup}/>
       <Route exact path="/onboard" component={Onboard}/>
        {/* <Route exact path="/sleep" component={Sleep}/> */} 
      </Switch>
    </Router>
  </div>
  );
}

export default App;
