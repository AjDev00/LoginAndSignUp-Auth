import { createContext, useState } from "react";
import "./App.css";
import Container from "./components/Container";
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
        <Container />
      </AppContext.Provider>
    </div>
  );
}

export default App;
