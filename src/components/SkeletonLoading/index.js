import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { lighten } from 'polished'
import { SkeletonContainer } from "./styles";



export function SkeletonLoading() {
  return (
    <SkeletonTheme
      baseColor="#343650"
      highlightColor={`${lighten(0.1, '#343650')}`}
    >

      <SkeletonContainer>

        <div className="skeletonTitleContainer">
          <div className="skeletonTitle">
            <Skeleton height="100%" width="100%" />
          </div>
          
          <div className="skeletonTitle">
            <Skeleton height="100%" width="100%" />
          </div>
        </div>


        <div className="skeletonCardCointainer">

          <div className="skeletonTimeCard">
            <div className="skeletonTimeCardFragmentTop">
              <Skeleton height="100%" width="100%" />
            </div>

            <div className="skeletonTimeCardFragmentBotton">
              <Skeleton height="100%" width="100%" />
            </div>

            <div className="skeletonTimeName">
              <Skeleton height="100%" width="100%" />
            </div>
          </div>

          <div className="skeletonTimeCard">
            <div className="skeletonTimeCardFragmentTop">
              <Skeleton height="100%" width="100%" />
            </div>

            <div className="skeletonTimeCardFragmentBotton">
              <Skeleton height="100%" width="100%" />
            </div>

            <div className="skeletonTimeName">
              <Skeleton height="100%" width="100%" />
            </div>
          </div>

          <div className="skeletonTimeCard">
            <div className="skeletonTimeCardFragmentTop">
              <Skeleton height="100%" width="100%" />
            </div>

            <div className="skeletonTimeCardFragmentBotton">
              <Skeleton height="100%" width="100%" />
            </div>

            <div className="skeletonTimeName">
              <Skeleton height="100%" width="100%" />
            </div>
          </div>

          <div className="skeletonTimeCard">
            <div className="skeletonTimeCardFragmentTop">
              <Skeleton height="100%" width="100%" />
            </div>

            <div className="skeletonTimeCardFragmentBotton">
              <Skeleton height="100%" width="100%" />
            </div>

            <div className="skeletonTimeName">
              <Skeleton height="100%" width="100%" />
            </div>
          </div>

         
        </div>
      </SkeletonContainer>


    </SkeletonTheme>
  );
}
