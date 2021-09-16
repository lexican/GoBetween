import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/home"
import Login from "./pages/Auth/Login/index"
function App() {
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} />}
        />
         <Route
          exact
          path="/login"
          render={(props) => <Login {...props} />}
        />
      </Router>
    </>
  );
}

export default App;
