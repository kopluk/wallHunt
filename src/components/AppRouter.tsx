import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import LevelPage from "../pages/LevelPage";
import CongratulationsPage from "../pages/CongratulationsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/level'} element={<AboutPage/>}/>
      <Route path={'/congratulations'} element={<CongratulationsPage/>}/>
      <Route path={'/level/:levelNumber'} element={<LevelPage/>}/>
      <Route path={'/*'} element={<Navigate to={'/level'}/>}/>
    </Routes>
  );
};

export default AppRouter;