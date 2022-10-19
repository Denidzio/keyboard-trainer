import { shiftCombinationChars } from "./config";

type GetIsNextCharFlagConfig = {
  randomText: string | null;
  enteredText: string;
  mainKeyTitle: string;
  subKeyTitle?: string;
};

export const getIsNextCharFlag = ({
  randomText,
  enteredText,
  mainKeyTitle,
  subKeyTitle,
}: GetIsNextCharFlagConfig) => {
  if (!randomText) {
    return false;
  }

  const isShiftKey = mainKeyTitle === "Shift";

  if (isShiftKey && subKeyTitle) {
    return shiftCombinationChars.includes(subKeyTitle);
  }

  return (
    mainKeyTitle.toLowerCase() === randomText[enteredText.length]?.toLowerCase()
  );
};
