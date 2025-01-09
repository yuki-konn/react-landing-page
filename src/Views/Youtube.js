import React from "react";

export function Youtube(props) {
  const src = props.src;
  const title = props.title;
  const captions = props.children;
  return (
    <>
      <h3>{title}</h3>
      <p>{captions}</p>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
  debugger;
}
