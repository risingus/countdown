import React, { useEffect, useState } from "react";
import { Base } from "../components/Base";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { DateCountDown } from "../components/DateCountDown";
import { SkeletonLoading } from "../components/SkeletonLoading";

export function CountDonwPage({ countDown, text, isLoading }) {
  const [isRender, setIsRender] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsRender(false)
    }, 1000);
  }, [])

  return (
    <Base>
      {isLoading || isRender ? (
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
