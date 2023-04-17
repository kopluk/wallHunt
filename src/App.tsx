import React, {useEffect} from 'react';
import './styles/index.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  useEffect(() => {
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    if (isMobile) {
      alert('Здравствуйте, вы зашли на этот сайт с телефона - для вас это может быть не комфортно. Вы можете включить \"версию для ПК\".')
    }
  }, [])

  return (
    <BrowserRouter basename={'/wallHunt'}>
      <div className={'app'}>
        <div className={'_container'}>
          <NavBar/>
        </div>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
