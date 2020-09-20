import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// ACTIONS
import { SET_ANSWER } from '../../constants/actionsTypes'

// UI
import { Container, Text, Button, Card } from '../../UI';

function Quiz() {

  const textHTML = useRef()

  const history = useHistory()
  
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions)

  const [question, setQuestion] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    console.log('q:', questions)
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
    <Text weight="bold" align="center">{question.category}</Text>
    <Card margin="60px auto 0" height="250px">
      <Text ref={textHTML} align="center"></Text>
    </Card>
    <Text margin="18px 0 0" weight="bold" size="16px/18px" align="center">
      {step + 1} of 10
    </Text>
    <Button onClick={() => handleAnswer('True')}>TRUE</Button>
    <Button onClick={() => handleAnswer('False')}>FALSE</Button>
  </Container>;
}

export default Quiz;