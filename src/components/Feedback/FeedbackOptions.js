import PropTypes from "prop-types";
// [option]: state[option] + 1,
import "../styles/statistics.scss";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="btn__block">
      {options.map((el) => (
        <button
          type="button"
          className="btn__item"
          id={el}
          key={el}
          onClick={onLeaveFeedback}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
