import { Fragment } from "react";
import "./App.css";
import Login from "./components/Login";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComposeEmail from "./pages/ComposeEmail";
import MainNavigation from "./components/MainNavigation";
import InboxEmail from "./pages/InboxEmail";

function App() {
  return (
    <Fragment>
     <MainNavigation />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/compose" element={<ComposeEmail />} />
        <Route path="/inbox" element={<InboxEmail />} />
      </Routes>
    </Fragment>
  );
}

export default App;
