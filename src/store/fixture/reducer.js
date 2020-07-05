import * as actionTypes from '../actionTypes';

const initialState = {
  fixture: null,
  loading: false,
  homePlayer: {},
  awayPlayer: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FIXTURE_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    case actionTypes.FINISH_FIXTURE_LOADING: {
      return {
        ...state,
        loading: false,
      }
    }

    case actionTypes.SET_FIXTURE: {
      return {
        ...state,
        fixture: action.fixture,
      }
    }

    case actionTypes.SELECT_PLAYER: {
      let selectedPlayer = {
        homePlayer: state.homePlayer.player_id === action.player.player_id ? {} : { ...action.player },
      }

      if (action.isAway) {
        selectedPlayer = {
          awayPlayer: state.awayPlayer.player_id === action.player.player_id ? {} : { ...action.player },
        }
      }

      return {
        ...state,
        ...selectedPlayer,
      }
    }

    case actionTypes.CLEAR_FIXTURE: {
      return {
        ...initialState,
      }
    }

    default: return state;
  }
}

export default reducer;
