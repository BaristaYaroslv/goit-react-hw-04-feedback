import { useState } from "react";
import { Section } from "./Section/section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from './Notification/Notification';

const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = event => {
        switch (event.target.textContent) {
            case "good":
                setGood(value => value + 1);
                break;
            case "neutral":
                setNeutral(value => value + 1);
                break;
            case "bad":
                setBad(value => value + 1);
                break;
            default:
                return;
        };
    };

    const total = good + neutral + bad;
    const positivePercentage = Math.round(good / total * 100);
    const buttonsFeedback = ['good', 'neutral', 'bad'];

    return (
        <>
            <Section name="feedback" title="Please, leave feedback &#128517;">
                <FeedbackOptions 
                    options={buttonsFeedback}
                    onLeaveFeedback={onLeaveFeedback}
                />                
            </Section>
            <Section name="statistics" title="Statistics">
                
                    <Notification message="There is no feedback &#128521;" />
                    <Statistics 
                        good={good} 
                        neutral={neutral} 
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                
            </Section>
        </>
    );
};
export default App;
// export class App extends Component {

//     static defaultProps = {
//         initialGood: 0,
//         initialNeutral: 0,
//         initialBad: 0,
//     };

//     static propTypes = {
//         initialGood: PropTypes.number,
//         initialNeutral: PropTypes.number,
//         initialBad: PropTypes.number,
//     };

//     state = {
//         good: this.props.initialGood,
//         neutral: this.props.initialNeutral,
//         bad: this.props.initialBad,
//     };
  
//     onLeaveFeedback = key => {
//       this.setState(prevState => {
//         return { [key]: prevState[key] + 1 };
//       });
//     };

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return (good + neutral + bad);
           
//     };

//     countPositiveFeedbackPercentage = () => {
//         const { good, neutral, bad } = this.state;
//         return Math.round((good / (good + neutral + bad)) * 100);
        
//     };

//     render() {
//         const total = this.countTotalFeedback();
//         const { good, neutral, bad } = this.state;
//         return (
//             <>
//                 <Section name="feedback" title="Please, leave feedback &#128517;">
//                     <FeedbackOptions 
//                         options={Object.keys(this.state)}
//                         onLeaveFeedback={this.onLeaveFeedback}
//                     />                
//                 </Section>
//                 <Section name="statistics" title="Statistics">
//                     {total === 0 ?
//                     (<Notification message="There is no feedback &#128521;" />) :
//                     (
//                         <Statistics 
//                             good={good} 
//                             neutral={neutral} 
//                             bad={bad}
//                             total={this.countTotalFeedback()}
//                             positivePercentage={this.countPositiveFeedbackPercentage()}
//                         />
//                     )}
//                 </Section>
//             </>
//         );
//     };
// };
