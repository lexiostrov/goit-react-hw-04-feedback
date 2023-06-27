import PropTypes from 'prop-types';
import { List, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(btn => (
        <div key={btn}>
          <Btn type="button" onClick={onLeaveFeedback}>
            {btn}
          </Btn>
        </div>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
