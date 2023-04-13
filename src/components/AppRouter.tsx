import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AboutComponent from "./AboutComponent";
import LevelPage from "../pages/LevelPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<Navigate to={'/level'}/>}/>
      <Route path={'/level'} element={<AboutComponent/>}/>
      <Route path={'/level/:levelNumber'} element={<LevelPage/>}/>
    </Routes>
  );
};

export default AppRouter;