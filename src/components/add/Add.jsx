import "./add.scss";
import PropTypes from 'prop-types';

const Add = (props) => {
    const handleSubmit =(e) => {
        e.preventDefault();
    } 
  return (
    <div className="add__container">
      <div className="modal__container">
        <span className="close__btn" onClick={() =>props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
            {props.columns
            .filter((item) => item.field !== "id")
            .map((column) => (
                <div className="item" key={column.field}>
                    <label>{column.headerName}</label>
                    <input type={column.type} placeholder={column.field} required />
                </div>
            ))}
            <button type="button">Send</button>
        </form>
      </div>
    </div>
  )
}

Add.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    slug: PropTypes.string.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default Add
