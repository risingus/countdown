import React, { useState, useEffect } from 'react';
import { CardContainer } from './styles';


export function TimeCard({time, text}) {
  const [oldTime, setOldTime] = useState('');
  const [animation, setAnimation] = useState();


  useEffect(()=> {
    if (time !== oldTime) {
      setAnimation(true)
      setOldTime(time);

      setTimeout(() => {
        setAnimation(false)
      }, 600);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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