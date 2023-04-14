import React from 'react'
import { ButtonUl,StatisticsUl,Button,Span,StatisticLi,Container } from './CounterStyled';

const FeedbackContainer = ({good,neutral,bad,handleIncrement,total,percentage}) =>{ 
    return (
        <Container>
        <Span>Please leave feedback</Span>
        <ButtonUl >
            <Button onClick={handleIncrement}>Good</Button>
            <Button onClick={handleIncrement}>Neutral</Button>
            <Button onClick={handleIncrement}>Bad</Button>
        </ButtonUl>
        <Span>Statistics</Span>
        <StatisticsUl >
            <StatisticLi>Good:{good}</StatisticLi>
            <StatisticLi>Neutral:{neutral}</StatisticLi>
            <StatisticLi>Bad:{bad}</StatisticLi>
            {good+neutral+bad === 0 ? (<p>There is no feedback</p>) : (
            <div>
            <p>Total:{total}</p>
            <p>Positive feedback:{percentage}</p>
            </div>
        )}
        </StatisticsUl>
        </Container>
    ) 
};



export default FeedbackContainer