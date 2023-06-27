import PropTypes from 'prop-types';
export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p> neutral: {neutral}</p>
      <p> bad: {bad}</p>
      <p>total: {total}</p>
      <p>
        {!Number.isNaN(positivePercentage)
          ? ` positivePercentage: ${positivePercentage}%`
          : 'Statistics not available'}
      </p>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
