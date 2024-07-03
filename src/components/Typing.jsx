import * as React from "react";
import { TypeAnimation as Typical } from "react-type-animation";

const Paragraphs = () => {
    const text = process.env.REACT_APP_ABOUT_ME0 || "";
    const paragraphs = text.split('.').map(paragraph => paragraph.trim()).filter(paragraph => paragraph);

    return paragraphs;
}

export default function TypeAnimation() {
    const paragraphs = Paragraphs();
    const sequence = [];

    paragraphs.forEach(paragraph => {
        sequence.push(paragraph + '.');
        sequence.push(500); // Pause for 1 second between paragraphs
    });

    return (
        <div>
            <strong>
                <Typical
                    sequence={sequence}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontFamily: "'Open Sans', sans-serif", color: "#666" }}
                />
            </strong>
        </div>
    );
}