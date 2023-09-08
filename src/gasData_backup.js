// import React, { useState } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// // import styled from '@emotion/styled'

// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// export const GasData = () => {
//     const [rowData] = useState([
//         {customerName: "Jack", connectionNumber: "12345", phoneNumber: 35000},
//         {customerName: "Benz>", connectionNumber: "54321", phoneNumber: 32000},
//         {customerName: "Porsche", connectionNumber: "Boxster", phoneNumber: 72000}
//     ]);

//     // const LinkToMeter = styled.div`
//     //     cursor:pointer;
//     //     &:hover {
//     //         color: blue;
//     //     }`
    

//     const handleClick = cell => {
//         console.log(cell.value)
//     }

//     const conectionLink = cell => {
//        console.log('click',cell)
//         // return <LinkToMeter onClick={() => handleClick(cell)}>{cell.value}</LinkToMeter>
//     }
    
//     const [columnDefs] = useState([
//         { field: 'customerName' },
//         { field: 'connectionNumber', cellRenderer: conectionLink },
//         { field: 'phoneNumber' }
//     ]);

    

//     return (
//         <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
//             <AgGridReact
//                 rowData={rowData}
//                 columnDefs={columnDefs}
//                 frameworkComponents={{conectionLink}}
//             >
//             </AgGridReact>
//         </div>
//     );
// };
