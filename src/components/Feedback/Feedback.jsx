import s from './Feedback.module.css';
import PropTypes from 'prop-types';

function Feedback({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
      {options.map(option => (
        <button
          className={s.button}
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
