import * as React from "react";
import { Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import ErrorIcon from "@mui/icons-material/Error";
import { useAppSelector } from "hooks";
import {
  getCharsNumberPerMinute,
  getMistakePercentageIconColor,
  getPercentageDifferenceBetweenTwoTexts,
} from "./helpers";

import "./styles.scss";

export const Stats = () => {
  const { enteredText, randomText, startTypingTimestamp } = useAppSelector(
    (state) => state.trainer
  );

  const charsNumberPerMinute = React.useMemo(() => {
    const randomTextLength = randomText.data?.length ?? 0;
    const isTextFullyEntered = enteredText.length === randomTextLength;

    if (isTextFullyEntered && startTypingTimestamp) {
      return getCharsNumberPerMinute(startTypingTimestamp, randomTextLength);
    }

    return 0;
  }, [enteredText.length, randomText.data, startTypingTimestamp]);

  const mistakePercentage = React.useMemo(() => {
    return getPercentageDifferenceBetweenTwoTexts(
      enteredText ?? "",
      randomText.data ?? ""
    );
  }, [enteredText, randomText.data]);

  const mistakePercentageText = React.useMemo(() => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

    return formatter.format(mistakePercentage);
  }, [mistakePercentage]);

  const mistakePercentageIconColor = React.useMemo(() => {
    return getMistakePercentageIconColor(mistakePercentage);
  }, [mistakePercentage]);

  return (
    <div className="stats">
      <div className="stat chars-per-minute">
        <Typography>{charsNumberPerMinute}</Typography>
        <SpeedIcon color="primary" />
      </div>
      <div className="stat mistake-percentage">
        <Typography>{mistakePercentageText}</Typography>
        <ErrorIcon color={mistakePercentageIconColor} />
      </div>
    </div>
  );
};
