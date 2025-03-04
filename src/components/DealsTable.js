import React, { useMemo } from "react";
import { useTable } from "react-table";
import applewatchc from "../assets/applewatchc.png";

// DealsTable Component
const DealsTable = () => {
  // Define the data using useMemo hook to optimize performance
  const data = useMemo(
    () => [
      {
        productName: "Apple Watch",
        productImage: applewatchc,  // Example image URL
        location: "6096 Marjolaine Landing",
        dateTime: "12.09.2019 - 12:53 PM",
        pieces: 423,
        amount: "$34,295",
        status: "Delivered", // Status
      },
     
      // Add more rows as needed
    ],
    []
  );

  // Define the columns using useMemo hook
  const columns = useMemo(
    () => [
      {
        Header: "Product Name",
        accessor: "productName",
        Cell: ({ row }) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={row.original.productImage} alt={row.original.productName} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
            <span style={{ marginLeft: "10px" }}>{row.original.productName}</span>
          </div>
        ),
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Date - Time",
        accessor: "dateTime",
      },
      {
        Header: "Piece",
        accessor: "pieces",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            style={{
              backgroundColor: value === "Delivered" ? "#10B981" : "#F59E0B",
              color: "white",
              padding: "5px 12px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            {value}
          </span>
        ),
      },
    ],
    []
  );

  // Get the table props and other hooks for table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="deals-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DealsTable;
