import React from 'react';
import { CardContainer, Container } from './styles';

export function DateCountDown({date: {days, hours, minutes, seconds}}) {
  return (
    <Container>
      <CardContainer>
        <div className="timeContainer">
          <div className="timeCard">
            <h1>{days}</h1>
          </div>
        </div>
        <span>
          DAYS
        </span>
      </CardContainer>

      <CardContainer>
        <div className="timeContainer">
          <div className="timeCard">
            <h1>{hours}</h1>
          </div>
        </div>
        <span>
          HOURS
        </span>
      </CardContainer>
      
      <CardContainer>
        <div className="timeContainer">
          <div className="timeCard">
            <h1>{minutes}</h1>
          </div>
        </div>
        <span>
          MINUTES
        </span>
      </CardContainer>

      <CardContainer>
        <div className="timeContainer">
          <div className="timeCard">
            <h1>{seconds}</h1>
          </div>
        </div>
        <span>
          SECONDS
        </span>
      </CardContainer>
    </Container>
  )
}