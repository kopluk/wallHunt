import React, {useEffect, useState} from 'react';
import './App.css'
import {BrowserRouter, useParams} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
