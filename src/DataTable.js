import React, { useState } from "react";
//import "./table.css";

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
      firstName: "Linda",
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
      <div class="container">
        <h5>Student List</h5>

        <table class="table table-striped">
          <thead>
            <tr class="active">
              <th>Id </th>
              <th>FirstName </th>
              <th>LastName </th>
              <th>Age </th>
              <th>Country </th>
              <th>City </th>
              <th>Action </th>
            </tr>
          </thead>
        </table>
      </div>
    );
  };

  //Table Action component
  const TableActionComponent = (props) => {
    return (
      <>
      <button type='button' onClick={() => props.onDetailButtonClick()} className='btn btn-primary' >Details</button>
      </> 
    );
  };

  //Table Row Component
  const TableRowComponent = (props) => {
    return (
      <tr>
        <div class="container">
        <table class="table table-striped">
          
            <thead>
              <tr class="active">
                <th>{props.id}</th>
                <th>{props.firstName} </th>
                <th>{props.lastName} </th>
                <th>{props.age} </th>
                <th>{props.country} </th>
                <th>{props.city} </th>
                <th> {props.Action}</th>
                <td>
                <TableActionComponent onDetailButtonClick={props.onDetailButtonClick} />
                </td>
              </tr>
            </thead>
          </table>
        </div>
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

   // main or datatable
  const onDetailButtonClick = () => {
    setShowDetails(true);
  };
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
