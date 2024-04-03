"use client";
import styles from "./TextAnimation.module.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "4 years back if someone would have told me that Megha will be one of your closest frinends to main nahi manta ,but here we are two mentally unstable backchods.The best part of being your frined has been the counsil of meghas and i have met a few of them";

export default function TextAnimation() {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top 25%`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
          className=" text-4xl md:text-7xl"
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {splitWords(phrase)}
      </div>
    </main>
  );
}
