import React, { useState ,useEffect} from "react";

import Tables from "./components/showTables/Tables";
import NewTable from "./components/addTables/NewTable";

const table =Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));

function App() {
  //console.log(table);
  
  const [updateTable, setTable] = useState(table);
  // useEffect(() => {
  //   const data = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
  //   console.log(data);
  //   setTable(data);
  // }, []);

  const onAddTableHandler = (data) => {
    console.log(updateTable);
    setTable((prevData) => {
      return [data, ...prevData];
    });
  };

  const onDeleteItemHandler=(id)=>{
    localStorage.removeItem(id);
    const updatedTable=Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
    setTable(updatedTable);
  }

  return (
    <>
      <NewTable onAddTable={onAddTableHandler}  />
      <h2>Table 1:</h2>
      <Tables data={updateTable} id="table1" onDelete={onDeleteItemHandler}/>
      <h2>Table 2:</h2>
      <Tables data={updateTable} id="table2" onDelete={onDeleteItemHandler}/>
      <h2>Table 3:</h2>
      <Tables data={updateTable} id="table3" onDelete={onDeleteItemHandler}/>
    </>
  );
}

export default App;
