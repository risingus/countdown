import React from "react";
import { Base } from "../components/Base";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { DateCountDown } from "../components/DateCountDown";
import { SkeletonLoading } from "../components/SkeletonLoading";

export function CountDonwPage({ countDown, text, isLoading }) {
  return (
    <Base>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <>
          <Title text={text} /> 
          <DateCountDown date={countDown} />
        </>
      )}

      <Footer isEdit={false} />
    </Base>
  );
}
