import {ButtonUl,Button,SpanTitle} from './FeedbackOptionsStyled'


const FeedbackOptions = ({onLeaveFeedback,options}) =>{
   return (
    <>
    <SpanTitle>Please leave feedback</SpanTitle>
        <ButtonUl >
            {options.map(
                option =>  
                <Button key={option} onClick={onLeaveFeedback}>{option}</Button>)}
        </ButtonUl>
        </>
   )
}

export default FeedbackOptions