// ACTIONS
import { 
  SET_QUESTIONS,
  SET_ANSWER 
} from '../constants/actionsTypes';

const INITIAL_STATE = {
  questions: [],
  score: 0,
  answers: []
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        score: 0,
        answers: []
      };
    case SET_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
        score: action.payload.isCorrect ? state.score + 1 : state.score
      };
    default:
      return state;
  }
};

export default users;
