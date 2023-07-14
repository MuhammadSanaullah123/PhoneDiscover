import React from "react";

//mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createData(
  type,
  direction,
  duration,
  from,
  to,
  via,
  created,
  status,
  actions
) {
  return { type, direction, duration, from, to, via, created, status, actions };
}

const rows = [
  createData(
    12,
    159,
    6.0,
    24,
    4.0,
    5,
    1,
    9,
    <>
      <Button variant="contained">Add Note</Button>
    </>
  ),
  createData(12, 159, 6.0, 24, 4.0, 5, 1, 9, 3),
  createData(12, 159, 6.0, 24, 4.0, 5, 1, 9, 3),
  createData(12, 159, 6.0, 24, 4.0, 5, 1, 9, 3),
  createData(12, 159, 6.0, 24, 4.0, 5, 1, 9, 3),
];

const PhoneTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "rgba(128, 128, 128, 0.2) " }}>
              <TableCell className="tableheading" align="center">
                CALL TYPE
              </TableCell>
              <TableCell className="tableheading" align="center">
                DIRECTION
              </TableCell>
              <TableCell className="tableheading" align="center">
                DURATION
              </TableCell>
              <TableCell className="tableheading" align="center">
                FROM
              </TableCell>
              <TableCell className="tableheading" align="center">
                TO
              </TableCell>
              <TableCell className="tableheading" align="center">
                VIA
              </TableCell>
              <TableCell className="tableheading" align="center">
                CREATED AT
              </TableCell>
              <TableCell className="tableheading" align="center">
                STATUS
              </TableCell>
              <TableCell className="tableheading" align="center">
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.direction}</TableCell>
                <TableCell align="center">{row.duration}</TableCell>
                <TableCell align="center">{row.from}</TableCell>
                <TableCell align="center">{row.to}</TableCell>
                <TableCell align="center">{row.via}</TableCell>
                <TableCell align="center">{row.created}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PhoneTable;
