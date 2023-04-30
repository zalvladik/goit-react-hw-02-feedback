import {ButtonUl,Button,SpanTitle} from './FeedbackOptionsStyled'


const FeedbackOptions = ({onLeaveFeedback}) =>{
   return (
    <>
    <SpanTitle>Please leave feedback</SpanTitle>
        <ButtonUl >
            <Button onClick={onLeaveFeedback}>Good</Button>
            <Button onClick={onLeaveFeedback}>Neutral</Button>
            <Button onClick={onLeaveFeedback}>Bad</Button>
        </ButtonUl>
        </>
   )
}

export default FeedbackOptions