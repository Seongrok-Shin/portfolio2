import * as React from "react";
import { TypeAnimation as Typical } from "react-type-animation";

const Paragraphs = () => {
  const text = process.env.REACT_APP_ABOUT_ME0 || "";
  return text
    .split(".")
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph);
};

export default function TypeAnimation() {
  const paragraphs = React.useMemo(() => Paragraphs(), []); // Memoize paragraphs

  // Build sequence with proper timing and finite repeat
  const sequence = React.useMemo(() => {
    const seq = [];
    paragraphs.forEach((paragraph, index) => {
      seq.push(paragraph + "."); // Add the period back
      seq.push(2000); // Longer pause between paragraphs
    });
    return seq;
  }, [paragraphs]);

  return (
    <div>
      <strong>
        <Typical
          sequence={sequence}
          wrapper="span"
          cursor={true}
          repeat={1} // Change to finite number or remove infinite repeat
          speed={50} // Add controlled speed
          style={{
            fontFamily: "'Open Sans', sans-serif",
            color: "#666",
            display: "inline-block", // Helps with layout
          }}
          className="type-text"
        />
      </strong>
    </div>
  );
}
