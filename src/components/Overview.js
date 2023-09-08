// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './Overview.css'

// export const Overview = ({props}) => {
//     const { state } = useLocation();
//     console.log(state)
//     return (
//         <div className='infoContainer'>
//             <tr>
//             <td className="label">connectionNumber</td>
//             <td className="value">12345</td>
//             </tr>
//         </div>
//     )
// }

// -------------------------------------------

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Connection Number',54321),
  createData('Customer Name','John'),
  createData('Address', 'Streets of California, California'),
  createData('Images Uploaded on', '08/12/2023'),
  createData('Number of images',3),
];

export default function Overview() {
  return (
    <div>
    <span className='meter-info'> Meter Information</span>
    <TableContainer component={Paper} sx={{
        padding: "0px 0px",
        borderRight: "2px solid black",
        backgroundColor: "lightblue",
        fontSize: "1.1rem"
      }}>
      <Table sx={{ minWidth: 400, height: '60vh' }} aria-label="simple table">
      <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell aligh="justify">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
