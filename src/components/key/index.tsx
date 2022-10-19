import { getClassNames } from "helpers";

export type KeyProps = {
  mainTitle: string;
  subTitle?: string;
  size?: "xxs" | "xs" | "sm" | "m" | "lg";
  isHovered?: boolean;
  isFocused?: boolean;
  isActivated?: boolean;
  isDisabled?: boolean;
  className?: string;
};

export const Key = ({
  mainTitle,
  subTitle,
  size = "m",
  isHovered,
  isFocused,
  isActivated,
  isDisabled,
  className,
}: KeyProps) => {
  const hasSubTitle = Boolean(subTitle?.trim());

  return (
    <button
      className={getClassNames(
        "kbc-button",
        "no-container",
        className,
        isHovered && "hover",
        isFocused && "focus",
        isActivated && "active",
        isDisabled && "disabled",
        size !== "m" && `kbc-button-${size}`
      )}
    >
      {mainTitle}
      {hasSubTitle && <sup className="sub-title">{subTitle}</sup>}
    </button>
  );
};
