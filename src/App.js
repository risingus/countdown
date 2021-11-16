import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import moment from 'moment';
import {useNavigate} from "react-router";
import { CountDonwPage } from "./pages/CountDonwPage";
import {Routes, Route} from 'react-router-dom';
import { EditCountDownPage } from "./pages/EditCountDownPage";
import { GlobalStyle } from "./GlobalStyles/globalTheme";
import { webTheme } from "./GlobalStyles/theme";
import { InitialPage } from "./pages/InitialPage";

function App() {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState({});
  const [text, setText] = useState("");
  const [dateToCount, setDateToCount] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  

  function getRemainingTime(date) {
    const {year, month, day, hour, minute, second} = date;
    const endDate = new Date(year, month, day, hour, minute, second).getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;
    const daysLeft  = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft < 0) {
      navigate('/');
    }


    const dateLeft = {
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft
    }

    return dateLeft;
  }

  function handleSaveForm({text, date, time}) {
    setIsLoading(true)
    const day = moment(date).get('date');
    const month = moment(date).get('month');
    const year = moment(date).get('year');
    const hour = moment(time).get('hour');
    const minute = moment(time).get('minute');
    const second = moment(time).get('second');

    const dateConfig = {
      year,
      month,
      day,
      hour,
      minute,
      second,
      text
    }

    const savedData = {
      date,
      time
    }

    setDateToCount(savedData) 

    localStorage.setItem('countDownConfig', JSON.stringify(dateConfig))

    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
    return;
  }

  useEffect(() => {

    if (localStorage.getItem('countDownConfig') === null) {
      setCountDown({})

      setTimeout(() => {
        navigate('/')
        setIsLoading(false);
      }, 1000)
      return;
    }

    const {
        day, 
        month, 
        year, 
        hour, 
        minute, 
        second, 
        text
      } = JSON.parse(localStorage.getItem('countDownConfig'))


    const dateConfig = {
      year,
      month,
      day,
      hour,
      minute,
      second
    }


    const currentFunction = setInterval(() => {
      const dateLeft = getRemainingTime(dateConfig)
      setCountDown(dateLeft)
      setText(text)
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
    

    return () => clearInterval(currentFunction);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },  [dateToCount])

  return (
      <ThemeProvider theme={webTheme}>
        <Routes> 
          <Route 
            path="/" 
            element={
              <InitialPage isConfigured={localStorage.getItem('countDownConfig') !== null} />
            } 
          />
          <Route 
            path="/countDown" 
            element={
              <CountDonwPage 
                countDown={countDown} 
                text={text} 
                isLoading={isLoading} 
              />
            } 
          />
          <Route 
            path="/edit" 
            element={
              <EditCountDownPage 
                handleSaveForm={handleSaveForm} 
              />
            } 
          />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;
