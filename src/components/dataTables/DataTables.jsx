import "./dataTables.scss";
import PropTypes from 'prop-types';
import { MdDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

const DataTables = (props) => {
    const actionColumns = [
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => {
                return <div className="actions__container">
                    <Link to={`/${props.slug}/${params.row.id}`} className="view"><FaRegEdit /></Link>
                    <div className="delete" onClick={() =>(params.row.id)}><MdDeleteSweep /></div>
                </div>;
            },
            editable: true,
        },
    ];

    const columns = [...props.columns, ...actionColumns];

    return (
        <div className="tables__container">
            <DataGrid className="data__grid"
                rows={props.rows}
                columns={columns}
                pageSize={10}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                checkboxSelection
                disableSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
};

DataTables.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    slug: PropTypes.string.isRequired,
};

export default DataTables;
