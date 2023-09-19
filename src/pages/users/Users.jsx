import "./users.scss";
import DataTables from "../../components/dataTables/DataTables";
import { userRows } from "../../data";

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
  {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 150,
      editable: true,
  },
];

const Users = () => {
  return (
    <div className="users__container">
      <div className="info__container">
        <h1>Users</h1>
        <button type="submit">Add New User</button>
      </div>
      <DataTables slug="users" columns={columns} rows={userRows} />
    </div>
  )
}

export default Users
