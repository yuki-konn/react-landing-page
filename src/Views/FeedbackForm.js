import React from "react";
import { handleSubmit } from "../controllers/handleSubmit";

export function FeedbackForm() {
  return (
    <section className="border border-3 border-primary rounded p-3 m-3">
      <form id="product-form" onSubmit={handleSubmit}>
        <h3>Sign up to be notified for discounts or similar products.</h3>
        {/* <label for="name">Name *: </label> */}
        <span>Name: *</span>

        <input type="text" id="name" placeholder="John Smith" required />
        <br />
        {/* <label for="email">Email *: </label> */}
        <span>Email: *</span>

        <input type="email" id="email" placeholder="email@email.com" required />
        <br />
        {/* <label for="phone">Phone: </label> */}
        <span>Phone: </span>

        <input
          type="tel"
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="###-###-####"
        />
        <br />
        <input type="submit" />
      </form>
      <br />
      <output id="outputTag1"></output>
      <br />
      <output id="outputTag"></output>
      <br />
    </section>
  );
}
