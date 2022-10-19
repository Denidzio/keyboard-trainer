import * as React from "react";
import { IconButton } from "@mui/material";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAppDispatch, useAppSelector } from "hooks";
import { toggleKeyboardFilling, toggleKeyboardVisibility } from "store/actions";

import "./styles.scss";

export const Actions = () => {
  const { isKeyboardFilled, isKeyboardVisible } = useAppSelector(
    (state) => state.keyboard
  );

  const dispatch = useAppDispatch();

  const handleToggleKeyboardFilling = React.useCallback(() => {
    dispatch(toggleKeyboardFilling());
  }, [dispatch]);

  const handleToggleKeyboardVisibility = React.useCallback(() => {
    dispatch(toggleKeyboardVisibility());
  }, [dispatch]);

  return (
    <div className="actions">
      <IconButton
        color={isKeyboardFilled ? "primary" : "default"}
        disabled={!isKeyboardVisible}
        onClick={handleToggleKeyboardFilling}
      >
        <FormatColorFillIcon />
      </IconButton>
      <IconButton
        color={isKeyboardVisible ? "primary" : "default"}
        onClick={handleToggleKeyboardVisibility}
      >
        <VisibilityIcon />
      </IconButton>
    </div>
  );
};
