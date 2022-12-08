import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";

import Error404 from "./pages/Error404";
import Redirection from "./pages/Redirection";

import "./App.scss";
import DataProvider from "./components/Providers/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Redirection />} />

          <Route path="user/:userId" element={<Dashboard />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
