import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AllUser from "./Component/AllUser";
import AddNew from "./Component/AddNew";
import PageNotFound from "./Component/PageNotFound";
import Navbar from "./Component/Navbar";
import Profile from "./Component/Profile";
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/allusers" element={<AllUser />}></Route>
          <Route path="/addnew" element={<AddNew />}></Route>
          <Route path="/profile/id=:id" element={<Profile />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
