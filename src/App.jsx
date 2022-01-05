import React from "react";
import Home from "./pages/Home";
import MeetTheMentors from "./pages/MeetTheMentors";
import Schedule from "./pages/Schedule";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/meet-the-mentors"
          exact
          element={<MeetTheMentors />}
        />
        <Route
          path="/schedule"
          exact
          element={<Schedule />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
