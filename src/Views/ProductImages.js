import React from "react";

export function ProductImages() {
  return (
    <section id="product-images">
      <img
        id="main-kettle"
        className="border border-3 border-primary"
        src="./assets/images/kettle1.png"
      />
      <br />
      <img className="other-kettle" src="./assets/images/kettle2.png" />
      <img className="other-kettle" src="./assets/images/kettle3.png" />
      <img className="other-kettle" src="./assets/images/kettlebox.png" />
    </section>
  );
}
