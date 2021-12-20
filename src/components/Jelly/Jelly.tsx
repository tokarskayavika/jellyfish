import React, { useContext, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../context";

import { jellyPosition, jellySprite } from "../../store/selectors";

const jelly = new Image();
jelly.src = "/assets/jelly-sprite.png";

const Jelly = () => {
  const position = useSelector(jellyPosition);
  const sprite = useSelector(jellySprite);

  const { ctx } = useContext(Context);
  const { x, y } = position;

  useLayoutEffect(() => {
    console.log("x", sprite);
    ctx?.drawImage(jelly, sprite.x, sprite.y, 70, 70, x, y, 60, 60);
  }, [ctx, x, y]);

  return <></>;
};

export default Jelly;
