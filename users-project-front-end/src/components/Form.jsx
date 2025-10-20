import PropTypes from "prop-types";

export const Form = ({ onCreateUser }) => {
  return (
    <>
      <div className="form-container">
        <h2>Crear Nuevo Usuario</h2>
        <form onSubmit={onCreateUser} className="user-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre del Usuario"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder=" Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="age"
              placeholder=" Edad"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="address"
              name="adress"
              placeholder="Dirección"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              name="image"
              placeholder="Formato de foto URL"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Crear Usuario
          </button>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
};

Form.defaultProps = {
  onCreateUser: () => {},
};
