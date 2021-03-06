import React, { useContext, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../context";

import { jellyPosition, jellySprite, rafID } from "../../store/selectors";

const jelly = new Image();
jelly.src = "/assets/jelly-sprite.png";

const Jelly = () => {
  const position = useSelector(jellyPosition);
  const sprite = useSelector(jellySprite);
  const rafId = useSelector(rafID);

  const { ctx } = useContext(Context);

  useLayoutEffect(() => {
    ctx?.drawImage(
      jelly,
      sprite.x,
      sprite.y,
      70,
      70,
      position.x,
      position.y,
      60,
      60
    );
  }, [ctx, rafId]);

  return <></>;
};

export default Jelly;
