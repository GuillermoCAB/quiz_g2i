import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMAGES
import quizBG from '../../assets/quizBack.png';

// SERVICES
import api from '../../services/api';

// ACTIONS
import { SET_QUESTIONS } from '../../constants/actionsTypes';

// UI
import { Container, Title, Text, Image } from '../../UI';
import Button from '../../UI/Button';

function Main() {

  const dispatch = useDispatch()
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(false)
  
  const getQuestions = async () => {
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

    <Title align="center">
        Welcome to the Trivia Challenge!
    </Title>

    <Image src={quizBG} alt="background_image_g2i_quiz" width="80%" />

    <Text size="18px/18px" align="center" width="220px">
       You will be presented with 10 True or False questions.
    </Text>

    <Text size="18px/18px" align="center" width="220px">
        Can you score 100%?
    </Text>

    <Button isLoading={isLoading} onClick={() => getQuestions()}>     
      BEGIN
    </Button>

  </Container>;
}

export default Main;