import React from "react";
import DataTable from "./DataTable";
 
const style = () => {
  return (
    <div>
      <h3>styling with css </h3>
      <h4 style={{ color: "red" }}>List </h4>
      <hr />
      <h5 style={{ backgroundcolor: "lightblue" }}>Title</h5>
      <DataTable/>
    
    </div>
  );
};

export default style;
