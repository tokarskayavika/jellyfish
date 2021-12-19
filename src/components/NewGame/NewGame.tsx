import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { height, width } from "../../constants";

import { Shark, Jelly } from "../../components";

export const Context = React.createContext(null);

const NewGame = () => {
  const ref = React.createRef(); //<HTMLCanvasElement>

  const dispatch = useDispatch();
  let [ctx, SetCxt] = useState(null);

  useLayoutEffect(() => {
    ctx = ref.current.getContext("2d");
    SetCxt(ctx);

    const underwater = new Image();
    underwater.src = "/assets/underwater.png";

    underwater.onload = function () {
      ctx.drawImage(underwater, 0, 0);
    };
  }, [ctx]);

  return (
    <Context.Provider value={ctx}>
      <canvas
        width={width}
        height={height}
        ref={ref}
        onKeyDown={({ code }) =>
          dispatch({ type: "CHANGE_JELLY_POSITION", payload: code })
        }
        tabIndex={0}
      />
      <Jelly />
      <Shark />
      <span>Score: {0}</span>
    </Context.Provider>
  );
};

export default NewGame;
