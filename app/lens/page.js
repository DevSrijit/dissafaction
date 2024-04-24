"use client";
import Spline from "@splinetool/react-spline";
import "../globals.css"

export default function Lens() {
  return (
    <div className="h-full w-full bg-transparent">
      {" "}
      <Spline
        scene="https://prod.spline.design/ea77tH-JXWWi2qsk/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
