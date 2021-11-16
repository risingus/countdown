import React, { useState, useLayoutEffect } from 'react';
import { CardContainer } from './styles';


export function TimeCard({time, text}) {
  const [oldTime, setOldTime] = useState('');
  const [animation, setAnimation] = useState();


  useLayoutEffect(()=> {
    if (time !== oldTime) {
      setOldTime(time);
      setAnimation(true)

      setTimeout(() => {
        setAnimation(false)
      }, 600);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return (
    <CardContainer isAnimated={animation}>
        <div className="timeContainer">
            <div className="timeCardStatic">
              <h1>{time}</h1>
            </div>
          <div className="topDiv">
            <div className="timeCard">
              <h1>{time}</h1>
            </div>
          </div>
          <div className="bottomDiv"></div>
          
        </div>
        <span>
          {text}
        </span>
      </CardContainer>
  )
}