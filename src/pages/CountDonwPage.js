import React from "react";
import { Base } from "../components/Base";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { DateCountDown } from "../components/DateCountDown";
import { NoConfig } from "../components/NoConfig";

export function CountDonwPage({ countDown, text }) {
  return (
    <Base>
      <Title text={text} />

      {
        Object.keys(countDown).length === 0 ? (
          <NoConfig />
        )
        : (
          <DateCountDown date={countDown} />
        )
      }
      
      <Footer isEdit={false} />
    </Base>
  );
}
