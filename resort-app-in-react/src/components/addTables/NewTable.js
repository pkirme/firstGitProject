import TableForm from "./TableForm";

const NewTable = (props) => {
  const onSaveTableHandler = (data) => {
    
    const addNewTable = {...data };
    localStorage.setItem(addNewTable.id,JSON.stringify(addNewTable));
    props.onAddTable(addNewTable);
  };
  return (
    <>
      <TableForm onSaveTable={onSaveTableHandler}/>
    </>
  );
};
export default NewTable;
