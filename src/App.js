import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/globalTheme";
import { webTheme } from "./GlobalStyles/theme";
import {Base} from './components/Base';
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";
import moment from 'moment';
import { DateCountDown } from "./components/DateCountDown";



function App() {
  const [countDown, setCountDown] = useState({});

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

  useEffect(() => {
    const day = 15;
    const month = 11;
    const year = 2021;
    const hour = 11;
    const minute = 0;
    const date = {
      year,
      month: month -1,
      day,
      hour,
      minute,
      second: 0
    }

    setInterval(() => {
      const dateLeft = getRemainingTime(date)
      setCountDown(dateLeft)
    }, 1000);
   
  },  [])

  return (
    <>
      <ThemeProvider theme={webTheme}>
        <Base>
          <Title text="WE’RE LAUNCHING SOON" />
          <Footer />
          <DateCountDown date={countDown} />
        </Base>
        
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
