import React, { useState } from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import { makeRows } from "../../utils";
import { CVTableValueCell } from "../CV_Components";

export const CVTable = ({ cv }) => {
  const rows = makeRows(cv);
  const [lastClickedCellIndex, setLastClickedCellIndex] = useState(null);

  const handleCellClick = (index) => {
    setLastClickedCellIndex(index);
  };

  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{ width: 0.6, alignItems: "center" }}
    >
      <TableContainer
        align="center"
        sx={{ bgcolor: "#363636", mt: 9, mb: 5, border: "1px solid #d2d2d2" }}
      >
        <Table>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" sx={{ color: "#d2d2d2" }}>
                  {row.name}
                </TableCell>
                <CVTableValueCell
                  value={row.value}
                  index={index}
                  lastClickedCellIndex={lastClickedCellIndex}
                  onCellClick={handleCellClick}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
