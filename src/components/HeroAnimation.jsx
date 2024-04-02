"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroAnimation = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(
        ".part-1",
        {
          rotateX: "-90deg",
          rotateY: "45deg",
          opacity: 0,
          translateY: "-100%",
        },
        "<"
      );

      tl.to(
        ".part1",
        {
          rotateX: "0deg",
          rotateY: "45deg",
          opacity: 1,
          top: 0,
        },
        "<"
      );
    }, component);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={component} className=" w-full h-full bg-red-50">
      <div className=" relative w-full h-full text-left">
        <div
          style={{
            perspective: 1000,
            transformOrigin: "bottom center",
            transform: "rotateY(45deg)",
          }}
          className="part-1 w-full h-full relative top-0 left-0 text-7xl md:text-9xl text-white"
        >
          <h1>HAPPY</h1>
        </div>
        <div
          style={{
            transform: "rotateY(45deg) rotateX(90deg)",
            transformOrigin: "bottom center",
            perspective: 1000,
          }}
          className=" absolute w-full h-full left-0 part1 text-7xl md:text-9xl text-black"
        >
          <h1>HAPPY</h1>
        </div>
      </div>
      <div className=" relative w-full h-full text-left">
        <div
          style={{
            perspective: 1000,
            transformOrigin: "bottom center",
            transform: "rotateY(45deg)",
          }}
          className="part-1 w-full h-full relative top-0 left-0 text-7xl md:text-9xl text-white uppercase"
        >
          <h1>Birthday</h1>
        </div>
        <div
          style={{
            transform: "rotateY(45deg) rotateX(90deg)",
            transformOrigin: "bottom center",
            perspective: 1000,
          }}
          className=" absolute w-full h-full left-0 part1 text-7xl md:text-9xl text-black uppercase"
        >
          <h1>Birthday</h1>
        </div>
      </div>
      <div className=" relative w-full h-full text-left">
        <div
          style={{
            perspective: 1000,
            transformOrigin: "bottom center",
            transform: "rotateY(45deg)",
          }}
          className="part-1 w-full h-full relative top-0 left-0 text-7xl md:text-9xl text-white uppercase"
        >
          <h1>Miss 10</h1>
        </div>
        <div
          style={{
            transform: "rotateY(45deg) rotateX(90deg)",
            transformOrigin: "bottom center",
            perspective: 1000,
          }}
          className=" absolute  w-full h-full left-0 part1 text-7xl md:text-9xl text-black uppercase"
        >
          <h1>Megha</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
