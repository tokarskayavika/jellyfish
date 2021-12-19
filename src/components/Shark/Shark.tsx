import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../NewGame/NewGame";

const Shark = () => {
  const ctx = useContext(Context);

  useEffect(() => {
    const shark = new Image();
    shark.src = "/assets/shark.png";

    shark.onload = function () {
      ctx.drawImage(shark, 0, 0);
    };
  }, [ctx]);

  return <></>;
};

export default Shark;
