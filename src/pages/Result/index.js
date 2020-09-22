import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMAGES
import right from '../../assets/right.png';
import wrong from '../../assets/wrong.png';

// SERVICES
import api from '../../services/api';

// ACTIONS
import { SET_QUESTIONS } from '../../constants/actionsTypes'

// UI
import { Container, Title, Text, Row, Column, Image } from '../../UI';
import Button from '../../UI/Button';

function Result() {

  const history = useHistory()
  
  const dispatch = useDispatch()
  const answers = useSelector(state => state.answers)
  const score = useSelector(state => state.score)
  const questions = useSelector(state => state.questions)

  const [isLoading, setIsLoading] = useState(false)
  
  const reset = async () => {
    if (isLoading) return

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
    <Title weight="bold" align="center">
      You scored {score}/10
    </Title>

    <Column padding="0 4px" justify="flex-start" align="flex-start" height="80%" overflowY="auto">
      {answers.map((answer, i) => {
        return <Row key={i} margin="8px 0" align="flex-start">
            <Image margin="0 8px 0 0" width="16px" src={answer.isCorrect ? right : wrong} />
            <Text size="16px/18px" dangerouslySetInnerHTML={{__html: questions[i].question}} />
          </Row>
      })}
    </Column>

    <Button isLoading={isLoading} onClick={reset} width="150px">PLAY AGAIN?</Button>
  </Container>;
}

export default Result;