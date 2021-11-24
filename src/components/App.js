import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Router exact path="/"/>
        </Switch>
      </Router>
    </>

  );
}
 
export default App;