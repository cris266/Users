import PropTypes from 'prop-types';

export const User = ({ user = {} }) => {
  return (
    <>
      <div key={user.id} className="user-card">
        <img src={user.image} alt={user.name} className="user-image" />
        <h3 className="user-name">{user.name}</h3>
        <p className="user-phone">{user.phone}</p> 
        <span className="user-id">ID: {user.id}</span>
      </div>
    </>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

User.defaultProps = {
  user: {},
};
