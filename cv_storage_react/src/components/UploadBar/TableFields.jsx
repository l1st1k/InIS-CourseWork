import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

export const TableFields = () => {
  const csv_fields = [
    "first_name",
    "last_name",
    "age",
    "major",
    "years_of_exp",
    "phone_number",
    "skills",
    "projects",
    "project_amount",
  ];

  return (
    <TableContainer
      align="center"
      sx={{
        bgcolor: "#363636",
        mb: 10,
        mt: 2,
        border: "1px solid #d2d2d2",
        width: 0.15,
        minWidth: "150px",
      }}
    >
      <Table size="small">
        <TableBody>
          {csv_fields.map((cell) => (
            <TableRow key={cell}>
              <TableCell component="th" scope="row" sx={{ color: "#d2d2d2" }}>
                {cell}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
