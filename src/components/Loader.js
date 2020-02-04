import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

const Loader = () => {
  const pink = useRef(null);
  const red = useRef(null);
  const blue = useRef(null);
  const black = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      [pink.current, blue.current],
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    TweenMax.fromTo(
      [red.current, black.current],
      0.5,
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <svg viewBox="0 0 150 33.2" width="180" height="150">
      <circle ref={pink} cx="16.1" cy="16.6" r="16.1" fill="#ec9697" />
      <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#eb6548" />
      <circle ref={blue} cx="94.3" cy="16.6" r="16.1" fill="#53c3c5" />
      <circle ref={black} cx="133.4" cy="16.6" r="16.1" fill="#000000" />
    </svg>
  );
};

export default Loader;
