import React, { useState, useEffect } from 'react';
import { CardContainer } from './styles';


export function TimeCard({time, text}) {
  const [oldTime, setOldTime] = useState('');
  const [animation, setAnimation] = useState();


  useEffect((a, b)=> {
    console.log(a)
    if (time !== oldTime) {
      setAnimation(true)
      setOldTime(time);

      setTimeout(() => {
        setAnimation(false)
      }, 600);
    }
  }, [time])

  return (
    <CardContainer isAnimated={animation}>
        <div className="timeContainer">
          <div className="timeCard">
            <h1>{time}</h1>
          </div>
        </div>
        <span>
          {text}
        </span>
      </CardContainer>
  )
}