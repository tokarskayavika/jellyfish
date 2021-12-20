import React, { useContext, useEffect } from "react";
import { height } from "../../constants";
import { Context } from "../../context";

const Bubbles = () => {
  const ctx = useContext(Context);

  useEffect(() => {
    const bubble = new Image();
    bubble.src = "/assets/bubble.png";

    bubble.onload = function () {};
  }, [ctx]);

  return <></>;
};

export default Bubbles;
