import React from "react";
import "../style.css";
export default function Home() {
  const feelings = [
    "happy",
    "sad",
    "angry",
    "excited",
    "nervous",
    "calm",
    "bored",
    "anxious",
    "confused",
  ];
  const toCapital = (string) => {
    const firstLetter = string.charAt(0).toUpperCase();
    const rest = string.slice(1);
    return firstLetter + rest;
  };
  return (
    <>
      <h2 className="title">How do you feel?</h2>

      <div class="btn-container">
        {feelings.map((val) => {
          return <button id={val}>{toCapital(val)}</button>;
        })}
      </div>
    </>
  );
}
