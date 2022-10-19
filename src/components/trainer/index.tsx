import * as React from "react";
import { Input, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks";
import { getClassNames } from "helpers";
import { setEnteredText } from "store/actions";

import "./styles.scss";

export const Trainer = () => {
  const { enteredText, randomText } = useAppSelector((state) => state.trainer);

  const dispatch = useAppDispatch();

  const typographyContent = React.useMemo(() => {
    const hasRandomText = Boolean(randomText.data);

    if (!hasRandomText) {
      return null;
    }

    return randomText.data!.split("").map((char, idx) => {
      const isEnteredChar = char === enteredText[idx];

      return (
        <span
          key={`char-${char}-${idx}`}
          className={getClassNames(isEnteredChar && "is-entered")}
        >
          {char}
        </span>
      );
    });
  }, [enteredText, randomText.data]);

  const handleInputChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setEnteredText(ev.target.value));
    },
    [dispatch]
  );

  return (
    <div className="trainer">
      <Input value={enteredText} onChange={handleInputChange} fullWidth />
      <Typography className="random-text">{typographyContent}</Typography>
    </div>
  );
};
