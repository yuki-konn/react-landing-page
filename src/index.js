import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(window.bodyTag);
root.render(
  <>
    <main>
      <h2>Mainstays 1.7 Liter Electric Kettle</h2>
      <img src="./assets/images/kettle1.png" />
      <h3>Mainstays 1.7 Liter Electric Kettle</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Gf_SXIN80C4?si=NtX8d6iiVREk4LZ5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </main>
  </>
);
