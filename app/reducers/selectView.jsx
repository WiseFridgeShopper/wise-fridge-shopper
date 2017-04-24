
export const SET_HOME_VIEW = 'SET_HOME_VIEW'

const initialState = {
  selectedTab: 'speakers'
}

const selectViewReducer = (state=initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case (SET_HOME_VIEW):
    return newState.selectedTab = action.selectedTab
  default:
    return state
  }
}

export const setView = (selectedTab) => {
  return {
    type: SET_HOME_VIEW,
    selectedTab
  }
}

export default selectViewReducer
