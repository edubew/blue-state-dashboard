import { useState } from "react";
import "./products.scss";
import DataTables from "../../components/dataTables/DataTables";
import Add from "../../components/add/Add";
import { productRows } from "../../data";

const Products = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Image',
      width: 0,
      renderCell: ((params) => {
        return <img src={params.row.img} alt="product" />
      }),
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      type: 'string',
      width: 250,
      editable: true,
    },
    {
      field: 'location',
      headerName: 'Location',
      type: 'string',
      width: 150,
      editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'available',
      headerName: 'Available',
      type: 'boolean',
      width: 110,
      editable: true,
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="products__container">
      <div className="info__container">
        <h1>Products</h1>
        <button type="submit" onClick={()=>setOpen(true)}>Add New Product</button>
      </div>
      <DataTables slug="products" columns={columns} rows={productRows} />
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products
