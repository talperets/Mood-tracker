import React from "react";
import "../style.css";
export default function Home() {
  return (
    <>
      <h2>How do you feel?</h2>

      <div class="btn-container">
        <button id="happy">Happy</button>
        <button id="sad">Sad</button>
        <button id="angry">Angry</button>
        <button id="excited">Excited</button>
        <button id="nervous">Nervous</button>
        <button id="calm">Calm</button>
        <button id="bored">Bored</button>
        <button id="anxious">Anxious</button>
        <button id="confused">Confused</button>
      </div>
    </>
  );
}
