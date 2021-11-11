import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/globalTheme";
import { webTheme } from "./GlobalStyles/theme";
import {useNavigate} from "react-router";
import moment from 'moment';
import { CountDonwPage } from "./pages/CountDonwPage";
import {Routes, Route} from 'react-router-dom';
import { EditCountDownPage } from "./pages/EditCountDownPage";

function App() {
  const [countDown, setCountDown] = useState({});
  const [text, setText] = useState("No configuration found 😓");
  let navigate = useNavigate();

  function getRemainingTime(date) {
    const {year, month, day, hour, minute, second} = date
    const endDate = new Date(year, month, day, hour, minute, second)
    const now = new Date();
    const timeLeft = moment(endDate).diff(now)
    const daysLeft  = moment(timeLeft).get('date')
    const hoursLeft = moment(timeLeft).get('hour')
    const minutesLeft = moment(timeLeft).get('minute')
    const secondsLeft = moment(timeLeft).get('second')

    const dateLeft = {
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft
    }
    return dateLeft;
  }

  function handleSaveForm({text, date, time}) {
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

    localStorage.setItem('countDownConfig', JSON.stringify(dateConfig))
    setInterval(() => {
      const dateLeft = getRemainingTime(dateConfig)
      setCountDown(dateLeft)
      setText(text)
    }, 1000);

    
    navigate('/')
    document.location.reload()

  }

  function handleCancelForm() {
    navigate('/')
  }

  useEffect(() => {

    if (localStorage.getItem('countDownConfig') === null) {
      setCountDown({})
      setText("No configuration found 😓")
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
      month: month -1,
      day,
      hour,
      minute,
      second
    }

    setInterval(() => {
      const dateLeft = getRemainingTime(dateConfig)
      setCountDown(dateLeft)
      setText(text)
    }, 1000);
   
  },  [])

  return (
    <>
      <ThemeProvider theme={webTheme}>
        <Routes> 
          <Route path="/" element={<CountDonwPage countDown={countDown} text={text} />} />
          <Route 
            path="/editCountDown" 
            element={
              <EditCountDownPage 
                handleSaveForm={handleSaveForm} 
                handleCancelForm={handleCancelForm} 
              />
            } 
          />
        </Routes>
        
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
