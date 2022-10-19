import React from "react";
import { Actions, Keyboard, Trainer } from "components";
import { useAppDispatch } from "hooks";
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
      <Trainer />
      <Actions />
      <Keyboard />
    </div>
  );
}

export default App;
