import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { height, width } from "../../constants";
import { Shark, Jelly, Bubbles, Lives, GameOver } from "../../components";
import { Context } from "../../context";
import {
  actionCreator,
  changeSharkPosition,
  animateBubbles,
  changeRafID,
} from "../../store/events";
import { gameOver, gameScore, paused } from "../../store/selectors";

const underwater = new Image();
underwater.src = "/assets/underwater.png";

const mainTheme = new Audio("assets/track1.wav");
mainTheme.volume = 0.1;
mainTheme.load();

const NewGame = () => {
  let animation;
  let [ctx, setCxt] = useState(null);

  const ref = React.createRef(); //<HTMLCanvasElement>
  const dispatch = useDispatch();
  const pause = useSelector(paused);
  const over = useSelector(gameOver);
  const score = useSelector(gameScore);

  useLayoutEffect(() => {
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(underwater, 0, 0);

      dispatch(changeSharkPosition());
      dispatch(animateBubbles());

      animation = requestAnimationFrame(animate);
      dispatch(changeRafID(animation));
    };

    if (ctx === null) {
      underwater.onload = function () {
        ctx.drawImage(underwater, 0, 0);
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
      <span>Score: {score}</span>
      {pause && <p>PAUSED</p>}
      {over && <GameOver />}

      <style jsx>
        {`
          canvas {
            position: absolute;
            left: 50%;
            top: 20px;
            transform: translate(-50%, 0);
          }

          span {
            position: absolute;
            color: #ffffff;
            font-family: "Montserrat", sans-serif;
            top: 42px;
            right: 250px;
          }

          p {
          }
        `}
      </style>
    </Context.Provider>
  );
};

export default NewGame;
