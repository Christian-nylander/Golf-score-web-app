export default (state = 0, action) => {
  switch (action.type) {
    case 'TESTAR':
      return action.payload;
    default:
        return state;
  }
};
