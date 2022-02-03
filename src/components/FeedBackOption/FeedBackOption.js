import PropTypes from "prop-types";
function FeedBackOptions({ options, onLeaveFeedBack }) {
  return options.map((option) => (
    <button type="button" key={option} onClick={() => onLeaveFeedBack(option)}>
      {option}
    </button>
  ));
}

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedBackOptions;
