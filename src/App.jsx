import { createContext, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import ForgotPassword from "./components/ForgotPassword";
import { ToastContainer } from "react-toastify";

export const AppContext = createContext();

function App() {
  const [signUp, setSignUp] = useState(false);

  function handleSignUp() {
    setSignUp(true);
  }

  function handleLogIn() {
    setSignUp(false);
  }

  return (
    <div className="">
      <AppContext.Provider value={{ signUp, handleLogIn, handleSignUp }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Container />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
