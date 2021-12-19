import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import { jellyPosition, jellySprite } from "../../store/selectors";
import { Context } from "../NewGame/NewGame";

const Jelly = () => {
  const position = useSelector(jellyPosition);
  const sprite = useSelector(jellySprite);

  const ctx = useContext(Context);

  useEffect(() => {
    const jelly = new Image();
    jelly.src = "/assets/jelly-sprite.png";

    jelly.onload = function () {
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
    };
  }, [ctx, position, sprite]);

  return <></>;
};

export default Jelly;
