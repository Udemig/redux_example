import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_SINGLECHARACTER,
  SINGLECHARACTER_REJECT,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  singleCharacter: {},
  pending: false,
  pendingSingleCharacter: false,
  error: null,
  errorSingleCharacter: null,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case CHARACTERS_REJECT:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_SINGLECHARACTER:
      return {
        ...state,
        singleCharacter: action.payload,
        pendingSingleCharacter: false,
      };
    case PENDING_SINGLECHARACTER:
      return {
        ...state,
        pendingSingleCharacter: true,
      };
    case SINGLECHARACTER_REJECT:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: action.error,
      };
    default:
      return state;
  }
};

export default characterReducer;
