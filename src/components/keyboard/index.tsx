import * as React from "react";
import { Key } from "components";
import { getClassNames } from "helpers";
import { useAppSelector } from "hooks";
import { getIsNextCharFlag } from "./helpers";
import { keyboardConfig } from "./config";

import "./styles.scss";

export const Keyboard = () => {
  const { keyboard, trainer } = useAppSelector((state) => state);

  const { isKeyboardFilled, isKeyboardVisible } = keyboard;
  const { enteredText, randomText } = trainer;

  const keyboardContent = React.useMemo(() => {
    return keyboardConfig.map((row, idx) => (
      <div key={`keyboard-row-${idx}`} className="keyboard-row">
        {row.map((key) => {
          const isNextChar = getIsNextCharFlag({
            enteredText,
            mainKeyTitle: key.mainTitle,
            subKeyTitle: key.subTitle,
            randomText: randomText.data,
          });

          return (
            <Key
              key={key.code}
              className={key.code}
              mainTitle={key.mainTitle}
              subTitle={key.subTitle}
              isHovered={isNextChar}
              isFocused={isNextChar}
              isDisabled={isNextChar}
            />
          );
        })}
      </div>
    ));
  }, [enteredText, randomText.data]);

  return (
    <div
      className={getClassNames(
        "keyboard",
        !isKeyboardVisible && "is-hidden",
        !isKeyboardFilled && "hide-filling"
      )}
    >
      {keyboardContent}
    </div>
  );
};
