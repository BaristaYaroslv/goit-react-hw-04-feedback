import PropTypes from 'prop-types';
import { Ul, Button } from './FeedbackOptions.styled';


export function FeedbackOptions({options, onLeaveFeedback}) {
    return (  
        <Ul>
            {options.map(option => {
                return (
                    <li key={option}>
                        <Button  type="button" name={option} onClick={() => {onLeaveFeedback(option);}}>
                            {option}
                        </Button>
                    </li>
                );
            })}
        </Ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};