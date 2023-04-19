import React from "react";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import { makeRows } from "../../utils";

export const CVTable = ({ cv }) => {
  const rows = makeRows(cv);
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{ width: 0.6, alignItems: "center" }}
    >
      <TableContainer
        component={Paper}
        align="center"
        sx={{ bgcolor: "#363636", mt: 9, mb: 5 }}
      >
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" sx={{ color: "#d2d2d2" }}>
                  {row.name}
                </TableCell>
                <TableCell align="left" sx={{ color: "#d2d2d2" }}>
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
