import { MILLISECONDS_IN_SECOND, SECONDS_IN_MINUTE } from "common/units";

export const getPercentageDifferenceBetweenTwoTexts = (
  textOne: string,
  textTwo: string
) => {
  const differentCharsCount = textOne
    .split("")
    .reduce(
      (previousValue, char, charIdx) =>
        char === textTwo[charIdx] ? previousValue : previousValue + 1,
      0
    );

  return textOne.length ? differentCharsCount / textOne.length : 0;
};

export const getCharsNumberPerMinute = (
  startTypingTimestamp: number,
  randomTextLength: number
) => {
  const trainingTimeInMinutes =
    (Date.now() - startTypingTimestamp) /
    MILLISECONDS_IN_SECOND /
    SECONDS_IN_MINUTE;

  return Math.floor(randomTextLength / trainingTimeInMinutes);
};

export const getMistakePercentageIconColor = (percentage: number) => {
  if (percentage >= 0 && percentage < 0.15) {
    return "success";
  }

  if (percentage >= 0.15 && percentage < 0.6) {
    return "warning";
  }

  return "error";
};
