import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../context";
import { bubbleList } from "../../store/selectors";

const bubble = new Image();
bubble.src = "/assets/bubble.png";

const Bubbles = () => {
  const { ctx } = useContext(Context);
  const bubbles = useSelector(bubbleList);

  useLayoutEffect(() => {
    ctx && bubbles.forEach(({ x, y }) => ctx.drawImage(bubble, x, y, 35, 35));
  }, [ctx, bubbles]);

  return <></>;
};

export default Bubbles;
