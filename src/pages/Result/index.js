import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// SERVICES
import api from '../../services/api';

// ACTIONS
import { SET_QUESTIONS } from '../../constants/actionsTypes'

// UI
import { Container, Text, Row, Column, Button } from '../../UI';

function Result() {

  const textHTML = useRef()

  const history = useHistory()
  
  const dispatch = useDispatch()
  const answers = useSelector(state => state.answers)
  const score = useSelector(state => state.score)
  const questions = useSelector(state => state.questions)

  const [isLoading, setIsLoading] = useState(false)
  
  const reset = async () => {
    setIsLoading(true)

    try {
      let fetch = await api.get()
  
      dispatch({type: SET_QUESTIONS, payload: fetch.data.results})
    } catch (error) {
      alert('An error ocurred, please try again or contact the support team.')
    }

    setIsLoading(false)
    history.push('/quiz')
  }

  return <Container justify="space-between">
    <Text weight="bold" align="center">
      You scored {score}/10
    </Text>

    <Column justify="flex-start" height="400px" overflowY="auto">
      {answers.map((answer, i) => {
        return <Row margin="8px 0" align="flex-start">
            <Text width="28px" size="24px/17px" key={i}>{answer.isCorrect ? '+' : '-'}</Text>
            <Text size="16px/18px" key={i} dangerouslySetInnerHTML={{__html: questions[i].question}} />
          </Row>
      })}
    </Column>
    <Button onClick={reset} width="150px">PLAY AGAIN?</Button>
  </Container>;
}

export default Result;