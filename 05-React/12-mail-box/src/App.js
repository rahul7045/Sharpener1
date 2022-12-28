import { Fragment } from "react";
import "./App.css";
import Login from "./components/Login";
import MailPage from "./components/MailPage";

import { Routes, Route , Outlet } from "react-router-dom";
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
        <Route path="/inbox/*" element={<InboxEmail />}  />
        {/* <Route path='/inbox/page' element={<MailPage  />} /> */}
        <Route path="/inbox/:id" element={<MailPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
