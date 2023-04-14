import FeedbackContainer from './Counter/Counter'
import React from 'react'

class App extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncrement = (event) => {
    console.log(event.currentTarget.textContent.toLowerCase());
    const value = event.currentTarget.textContent.toLowerCase();
  this.setState(prevState => ({
    [value]:prevState[value] + 1,
  }))
  this.countTotalFeedback(event)
  }
  countTotalFeedback = () =>{
    const total = this.state.good+this.state.neutral+this.state.bad;
    return total;
}

  countPositiveFeedbackPercentage = () =>{
    const total = this.state.good+this.state.neutral+this.state.bad;
    const result = this.state.good/total*100;
    return Math.round(result)+'%';
} 
  render(){
    return (
    <FeedbackContainer 
    handleIncrement={this.handleIncrement}
    good={this.state.good} 
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={this.countTotalFeedback()}
    percentage={this.countPositiveFeedbackPercentage()}
    />
  );
}
};

export default App