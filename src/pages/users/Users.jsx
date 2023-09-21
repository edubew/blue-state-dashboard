import "./users.scss";
import DataTables from "../../components/dataTables/DataTables";
import { userRows } from "../../data";
import Add from "../../components/add/Add";
import { useState } from "react";

const Users = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
        field: 'title',
        headerName: 'Title',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="users__container">
      <div className="info__container">
        <h1>Users</h1>
        <button type="submit" onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTables slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users
