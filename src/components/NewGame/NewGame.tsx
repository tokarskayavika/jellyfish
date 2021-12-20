import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { height, width } from "../../constants";
import { Shark, Jelly, Bubbles } from "../../components";
import { Context } from "../../context";
import {
  actionCreator,
  changeSharkPosition,
  animateBubbles,
} from "../../store/events";
import { paused } from "../../store/selectors";

const underwater = new Image();
underwater.src = "/assets/underwater.png";

const NewGame = () => {
  let animation;
  const ref = React.createRef(); //<HTMLCanvasElement>

  const dispatch = useDispatch();
  let [ctx, SetCxt] = useState(null);
  const pause = useSelector(paused);

  useLayoutEffect(() => {
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(underwater, 0, 0);

      dispatch(changeSharkPosition());
      //   dispatch(animateJelly());
      dispatch(animateBubbles());

      animation = requestAnimationFrame(animate);
    };

    if (ctx === null) {
      underwater.onload = function () {
        ctx.drawImage(underwater, 0, 0);
      };
      requestAnimationFrame(animate);
    }

    ctx = ref.current.getContext("2d");
    ref.current.focus();
    SetCxt(ctx);
  }, [ctx]);

  return (
    <Context.Provider value={{ ctx }}>
      <canvas
        width={width}
        height={height}
        ref={ref}
        onKeyDown={({ code }) => dispatch(actionCreator(code))}
        tabIndex={0}
      />
      <Shark />
      <Bubbles />
      <Jelly />
      <span>Score: {0}</span>
      {pause && <p>PAUSED</p>}
    </Context.Provider>
  );
};

export default NewGame;
