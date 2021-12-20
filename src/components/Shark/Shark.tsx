import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { height } from "../../constants";
import { Context } from "../../context";
import { sharkPosition } from "../../store/selectors";

const shark = new Image();
shark.src = "/assets/shark.png";

const Shark = () => {
  const { ctx } = useContext(Context);
  const { x, y } = useSelector(sharkPosition);

  useLayoutEffect(() => {
    ctx?.drawImage(shark, x, y, 390, 150);
  }, [ctx, x, y]);

  return <></>;
};

export default Shark;
