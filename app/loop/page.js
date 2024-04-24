"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import "../globals.css";

export default function App() {
  return (
    <>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <p className="text-top font-space_grotesk text-center text-2xl text-white mt-4 opacity-75">
          Your reward will be at the end of this roller coaster track.
        </p>
      </div>
      <Spline
        className="h-full w-full"
        scene="https://prod.spline.design/Sg6s272-SjyxTxjz/scene.splinecode"
      />
    </>
  );
}
