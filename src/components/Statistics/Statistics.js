import PropTypes from 'prop-types';
import { Ul, Li, Div } from './Statistics.styled';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return(
        <>
            <Ul>
                <Li>Good: {good}</Li>
                <Li>Neutral: {neutral}</Li>
                <Li>Bad: {bad}</Li>
            </Ul>
            <Div>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage} %</p>
            </Div>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number, 
    neutral: PropTypes.number, 
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}