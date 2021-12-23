import React from "react";
import { useDispatch } from "react-redux";
import { restartGame } from "../../store/events";

const GameOver = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>GAME OVER</p>
      <button onClick={() => dispatch(restartGame())}>-restart-</button>
    </>
  );
};

export default GameOver;
