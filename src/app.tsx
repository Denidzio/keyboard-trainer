import React from "react";
import { useAppDispatch } from "hooks";
import { Actions, Keyboard, Stats, Trainer } from "components";
import { fetchTrainerText, resetTrainerState } from "store/actions";

import "keyboard-css";
import "./styles.scss";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchTrainerText());

    return () => {
      dispatch(resetTrainerState());
    };
  }, [dispatch]);

  return (
    <div className="app">
      <Stats />
      <Trainer />
      <Actions />
      <Keyboard />
    </div>
  );
}

export default App;
