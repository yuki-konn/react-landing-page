import { createRoot } from "react-dom/client";
import React from "react";
import { Youtube } from "./Views/Youtube";
import { ProductImages } from "./Views/ProductImages";
import { ProductDescription } from "./Views/ProductDescription";
import { SiteMap } from "./Views/SiteMap";
import { ProductFeatures } from "./Views/ProductFeatures";
import { FeedbackForm } from "./Views/FeedbackForm";
import { PersonalReview } from "./Views/PersonalReview";

const root = createRoot(window.bodyTag);
root.render(
  <>
    <header></header>
    <main className="container">
      <ProductImages />
      <ProductDescription />
      <ProductFeatures />
      <hr />
      <Youtube
        title="Mainstays Electric Kettle"
        src="https://www.youtube.com/embed/Gf_SXIN80C4?si=NtX8d6iiVREk4LZ5"
      >
        Review and Unboxing from Youtube
      </Youtube>
      <PersonalReview />
      <FeedbackForm />
    </main>
    <footer>
      <SiteMap />
      <div id="copyright">
        <p>Copyright 2025</p>
        <p>
          Created by <i>Yuki Konishi</i>
        </p>
      </div>
    </footer>
  </>
);
