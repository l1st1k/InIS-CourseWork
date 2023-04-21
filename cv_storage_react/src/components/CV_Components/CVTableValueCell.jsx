import React from "react";
import { TableCell, Tooltip } from "@mui/material";

export const CVTableValueCell = ({
  value,
  index,
  lastClickedCellIndex,
  onCellClick,
}) => {
  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text).then(onCellClick(index));
  };

  const isLastClickedCell = index === lastClickedCellIndex;
  const tooltipText = isLastClickedCell ? "Copied!" : "Copy";

  return (
    <Tooltip title={tooltipText} placement={"right"}>
      <TableCell
        align="left"
        sx={{ color: "#d2d2d2" }}
        onClick={() => handleCopyClick(value)}
      >
        {value}
      </TableCell>
    </Tooltip>
  );
};
