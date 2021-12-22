import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { height, width } from "../../constants";
import { Shark, Jelly, Bubbles, Lives } from "../../components";
import { Context } from "../../context";
import {
  actionCreator,
  changeSharkPosition,
  animateBubbles,
} from "../../store/events";
import { paused } from "../../store/selectors";

const underwater = new Image();
underwater.src = "/assets/underwater.png";

const mainTheme = new Audio("assets/track1.wav");
mainTheme.volume = 0.1;

const NewGame = () => {
  let animation;
  const ref = React.createRef(); //<HTMLCanvasElement>

  const dispatch = useDispatch();
  let [ctx, setCxt] = useState(null);
  let [rafId, setRafId] = useState(null);
  const pause = useSelector(paused);

  useLayoutEffect(() => {
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(underwater, 0, 0);

      dispatch(changeSharkPosition());
      dispatch(animateBubbles());

      animation = requestAnimationFrame(animate);
      setRafId(animation);
    };

    const life = new Image();
    life.src = "/assets/hearts.png";

    if (ctx === null) {
      underwater.onload = function () {
        ctx.drawImage(underwater, 0, 0);
        ctx?.drawImage(life, 0, 0, 100, 100, 650, 20, 25, 25);
        mainTheme.load();
        mainTheme.play();
      };
      requestAnimationFrame(animate);
    }

    ctx = ref.current.getContext("2d");
    ref.current.focus();
    setCxt(ctx);
  }, [ctx]);

  return (
    <Context.Provider value={{ ctx }}>
      <canvas
        width={width}
        height={height}
        ref={ref}
        onKeyDown={({ code }) =>
          setTimeout(() => dispatch(actionCreator(code)))
        }
        tabIndex={0}
      />
      <Shark />
      <Jelly />
      <Bubbles />
      <Lives />
      <span>Score: {0}</span>
      {pause && <p>PAUSED</p>}
    </Context.Provider>
  );
};

export default NewGame;
