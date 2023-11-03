import { useState, useEffect } from "react";

export default function Subheader({millis, headerText}) {

  const [headerIndex, setHeaderIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeaderIndex((prevIndex) => (prevIndex + 1) % headerText.length);
    }, millis);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="subHeader">
      <h2>{headerText[headerIndex]}</h2>
    </div>
  );
}
