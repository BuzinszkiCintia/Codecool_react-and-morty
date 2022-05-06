import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Characters from "./components/Characters/Characters";
import Locations from "./components/locations/Locations";
import CharacterDataDisplay from "./components/CharacterDisplay/CharacterDataDisplay";
import LocationDataDisplay from "./components/LocationDisplay/LocationDataDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="
/Codecool_react-and-morty/"
          element={<Home />}
        />
        <Route
          path="/
Codecool_react-and-morty/characters/"
          element={<Characters />}
        />
        <Route
          path="/Codecool_react-and-morty/locations/"
          element={<Locations />}
        />
        <Route
          path="/Codecool_react-and-morty/character/:id/"
          element={<CharacterDataDisplay />}
        />
        <Route
          path="/Codecool_react-and-morty/location/:id/"
          element={<LocationDataDisplay />}
        />
      </Routes>
    </Router>
  );
}

export default App;
