import * as actionTypes from '../actionTypes';

export const openCommentsActionCreator = (url, identifier, title) => {
  return {
    type: actionTypes.OPEN_COMMENTS,
    url,
    identifier,
    title,
  }
}

export const closeCommentsActionCreator = () => {
  return {
    type: actionTypes.CLOSE_COMMENTS,
  }
}
