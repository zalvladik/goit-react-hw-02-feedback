import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import React from 'react'
import {Container,Notification,Section} from './AppStyled'

class App extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  onLeaveFeedback = (event) => {
    const value = event.currentTarget.textContent.toLowerCase();
  this.setState(prevState => ({
    [value]:prevState[value] + 1,
        })
      )
  }

  totalFeedback(){
    const {good,bad,neutral} = this.state
    const total = good+bad+neutral
    return total
  }

  positivePercentageFeedback(){
    const {good,bad,neutral} = this.state
    const percentage = Math.round(good/(good+neutral+bad)*100)
    return percentage
  }

  render(){
    const{good,neutral,bad} = this.state
    return (
  <Container>
    <Section title="Please leave feedback">
          <FeedbackOptions 
                options={Object.keys(this.state)}
                onLeaveFeedback={this.onLeaveFeedback}
          />
    </Section>


    {this.totalFeedback() > 0 ? (
      <Section title='Statistics'>
      <Statistics  
      good={good} 
      neutral={neutral}
      bad={bad}
      total={good+bad+neutral}
      positivePercentage={this.positivePercentageFeedback()}
      />
</Section>
    ) : (
      <Notification>There is no feedback</Notification>
    )}
    
  </Container>
  );
}
};

export default App