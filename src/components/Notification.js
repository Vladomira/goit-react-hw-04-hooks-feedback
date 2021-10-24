import PropTypes from "prop-types";
import "./styles/statistics.scss";

function Notification({ message }) {
  return <h3 className="title__notification">{message}</h3>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
