import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// ACTIONS
import { SET_ANSWER } from '../../constants/actionsTypes'

// UI
import { Container, Title, Text, Card, Row, RoundButton } from '../../UI';

function Quiz() {

  const textHTML = useRef()

  const history = useHistory()
  
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions)

  const [question, setQuestion] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    setQuestion(questions[step])
    textRender(questions[step])
  }, [questions, step])

  const textRender = (target) => {
    textHTML.current.innerHTML = target.question
  }

  const handleAnswer = (answer) => {
    let isCorrect = answer.toLowerCase() === question.correct_answer.toLowerCase()

    let payload = {
      answer,
      correctAnswer: question.correct_answer,
      isCorrect,
      questionNumber: step + 1 
    }

    dispatch({type: SET_ANSWER, payload})
    nextQuestion()
  }

  const nextQuestion = () => {
    if(step < 9) {
      setStep(s => s + 1)
    } else {
      history.push('/result')
    }
  }

  return <Container>
    <Title align="center" height="50px">{question.category}</Title>
    
    <Card margin="25% auto 0" height="250px">
      <Text ref={textHTML} align="center"></Text>
    </Card>

    <Text margin="18px 0 20px" size="16px/18px" align="center">
      {step + 1} of 10
    </Text>

    <Row width="300px" justify="space-around">
      <RoundButton onClick={() => handleAnswer('True')}>True</RoundButton>
      <RoundButton onClick={() => handleAnswer('False')}>False</RoundButton>
    </Row>

  </Container>;
}

export default Quiz;