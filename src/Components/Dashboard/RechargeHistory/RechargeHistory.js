import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/UseAuth/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RechargeHistory = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(
      `https://rocky-atoll-33019.herokuapp.com/recharges?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, textAlign: "center" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Operator</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">+88{row.phone}</TableCell>
              <TableCell align="left">{row.network}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.price}TK</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RechargeHistory;
