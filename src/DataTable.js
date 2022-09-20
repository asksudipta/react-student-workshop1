import React, { useState } from "react";
import "./table.css";

const DataTable = () => {
  // arrow function
  // define js variable through useState
  const [student, setStudentList] = useState([
    {
      id: 1,
      firstName: "Sudipta",
      lastName: "Mishra",
      age: 25,
      country: "Sweden",
      city: "Helsingborg",
    },
    {
      id: 2,
      firstName: "Sandy",
      lastName: "Svensson",
      age: 30,
      country: "Sweden",
      city: "Malmö",
    },
  ]);
  const [showDetails, setShowDetails] = useState(false);

  // table header component
  const TableHeaderComponent = () => {
    return (
      <thead>
        <tr>
          <th>Id </th>
          <th>FirstName </th>
          <th>LastName </th>
          <th>Age </th>
          <th>Country </th>
          <th>City </th>
          <th>Action </th>
        </tr>
      </thead>
    );
  };

  //Table Action component
  const TableActionComponent = (props) => {
    return (
      <>
        <button
          onClick={() => props.onDetailButtonClick()}
          type="button"
          className="btn btn-primery"
        >
          Details{" "}
        </button>
      </>
    );
  };

  //Table Row Component
  const TableRowComponent = (props) => {
    return (
      <tr>
        <th>{props.id}</th>
        <th>{props.firstName} </th>
        <th>{props.lastName} </th>
        <th>{props.age} </th>
        <th>{props.country} </th>
        <th>{props.city} </th>
        <th>
          <TableActionComponent
            onDetailButtonClick={props.onDetailButtonClick}
          />
        </th>
      </tr>
    );
  };
  //Show Details Component

  const ShowStudentDetails = (props) => {
    return (
      <>
        <button onClick={() => setShowDetails(false)}>hide </button>
      </>
    );
  };
  const onDetailButtonClick = () => {
    setShowDetails(true);
  };
  // main or datatable
  return (
    <div>
      <table className="table table-dark" border="1"></table>
      <TableHeaderComponent />
      <tbody>
        {student &&
          student.map((s) => {
            return (
              <TableRowComponent
                id={s.id}
                firstName={s.firstName}
                lastName={s.lastName}
                age={s.age}
                country={s.country}
                city={s.city}
                onDetailButtonClick={onDetailButtonClick}
              />
            );
          })}
      </tbody>

      {showDetails && <ShowStudentDetails />}
    </div>
  );
};

export default DataTable;
