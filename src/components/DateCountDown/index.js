import React from 'react';
import { TimeCard } from '../TimeCard';
import { Container } from './styles';

export function DateCountDown({date: {days, hours, minutes, seconds}}) {
  return (
    <Container>
      <TimeCard time={days} text="DAYS"/>
      <TimeCard time={hours} text="HOURS"/>
      <TimeCard time={minutes} text="MINUTES"/>
      <TimeCard time={seconds} text="SECONDS"/>
    </Container>
  )
}