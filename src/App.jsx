import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataUrl from "./DataUrl";
import Card from "./Card";

export const Mydata = createContext();

function App() {
  let [userData, setUserData] = useState();
  let [mmr, setMmr] = useState();

  return (
    <Mydata.Provider value={{ userData, setUserData, mmr, setMmr }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataUrl />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </Mydata.Provider>
  );
}

export default App;
