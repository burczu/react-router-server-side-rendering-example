function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { ...state, initialText: 'changed in the browser!' };
    default:
      return { ...state };
  }
}

export default reducer;
