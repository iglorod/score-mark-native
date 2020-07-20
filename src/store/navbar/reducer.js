import * as actionTypes from '../actionTypes';

const initialState = {
  stats: [],
  transfers: [],
  sidelined: [],
  availibleSeasons: [],
  playerClub: null,
  playerPartners: [],
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LAST_LEAGUE: {
      return {
        ...state,
        lastLeague: action.league,
      }
    }

    case actionTypes.SET_LAST_CLUB: {
      return {
        ...state,
        lastClub: action.club,
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;
