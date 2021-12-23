import React, { useContext, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { width } from "../../constants";
import { Context } from "../../context";
import { rafID, remainingLives } from "../../store/selectors";

const life = new Image();
life.src = "/assets/hearts.png";

const Lives = () => {
  const { ctx } = useContext(Context);
  const rafId = useSelector(rafID);
  const lives = useSelector(remainingLives);

  console.log(lives);

  useLayoutEffect(() => {
    if (lives >= 7) {
      ctx?.drawImage(
        life,
        lives === 9 ? 0 : lives === 8 ? 100 : 200,
        0,
        100,
        100,
        width - 200,
        20,
        25,
        25
      );
    }

    if (lives >= 4) {
      ctx?.drawImage(
        life,
        lives >= 6 ? 0 : lives === 5 ? 100 : 200,
        0,
        100,
        100,
        width - 170,
        20,
        25,
        25
      );
    }

    if (lives >= 1) {
      ctx?.drawImage(
        life,
        lives >= 3 ? 0 : lives === 2 ? 100 : 200,
        0,
        100,
        100,
        width - 140,
        20,
        25,
        25
      );
    }
  }, [ctx, rafId, lives]);

  return <></>;
};

export default Lives;
