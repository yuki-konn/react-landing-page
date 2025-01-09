import React from "react";

export function SiteMap() {
  return (
    <nav id="siteMap">
      <h5>Site Map</h5>
      <ul className="list-group text-center">
        <li className="list-group-item list-group-item-info">
          <a href="#product-images">Product Images</a>
        </li>
        <li className="list-group-item list-group-item-info">
          <a href="#product-description">Description</a>
        </li>
        <li className="list-group-item list-group-item-info">
          <a href="#product-features">Features</a>
        </li>
        <li className="list-group-item list-group-item-info">
          <a href="#product-review">Personal Review</a>
        </li>
        <li className="list-group-item list-group-item-info">
          <a href="#product-form">Sign up</a>
        </li>
      </ul>
    </nav>
  );
  debugger;
}
