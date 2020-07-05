import * as actionTypes from '../actionTypes';

const initialState = {
  club: null,
  players: [],
  loading: false,
  stats: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_CLUB_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    case actionTypes.FINISH_CLUB_LOADING: {
      return {
        ...state,
        loading: false,
      }
    }

    case actionTypes.SET_CLUB: {
      return {
        ...state,
        club: { ...action.club },
      }
    }

    case actionTypes.SET_CLUB_STATS: {
      return {
        ...state,
        stats: { ...action.stats },
      }
    }

    case actionTypes.SET_CLUB_SQUAD: {
      return {
        ...state,
        players: { ...action.players },
      }
    }

    case actionTypes.CLEAR_CLUB_DATA: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default reducer;
