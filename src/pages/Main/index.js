import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// SERVICES
import api from '../../services/api';

// ACTIONS
import { SET_QUESTIONS } from '../../constants/actionsTypes';

// UI
import { Container, Text, Button, Card } from '../../UI';

function Main() {

  const dispatch = useDispatch()
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(false)
  
  const getQuestions = async () => {
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
    <Text weight="bold" align="center" width="180px">
        Welcome to the Trivia Challenge!
    </Text>
    <Text align="center" width="220px">
       You will be presented with 10 True or False questions.
    </Text>
    <Text align="center" width="220px">
        Can you score 100%?
    </Text>
    <Button onClick={() => getQuestions()}>     
      BEGIN
    </Button>
  </Container>;
}

export default Main;