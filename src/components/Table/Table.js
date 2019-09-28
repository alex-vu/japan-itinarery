import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const data = [
  {
    schedule: "8:30 am",
    location: "Leave Hotel"
    // friend: {
    //   name: "Jason Maurer",
    //   age: 23
    // }
  }
];

const columns = [
  {
    Header: "Schedule",
    accessor: "schedule" // String-based value accessors!
  },
  {
    Header: "Location",
    accessor: "location",
    Cell: props => <span className="number">{props.value}</span> // Custom cell components!
  }
];

const Table = () => {
  return <ReactTable data={data} columns={columns} />;
};

export default Table;
