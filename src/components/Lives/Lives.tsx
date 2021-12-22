import React, { useContext, useEffect, useLayoutEffect } from "react";
import { height } from "../../constants";
import { Context } from "../../context";

const life = new Image();
life.src = "/assets/hearts.png";

const Lives = () => {
  const { ctx } = useContext(Context);

  console.log("sssss");

  useLayoutEffect(() => {
    // ctx?.drawImage(life, 0, 0, 100, 100, 650, 20, 25, 25);
    // ctx?.drawImage(life, 0, 0, 100, 100, 0, 20, 25, 25);
    // ctx?.drawImage(life, 0, 0, 100, 100, 0, 20, 25, 25);
  }, [ctx]);

  return <></>;
};

export default Lives;
