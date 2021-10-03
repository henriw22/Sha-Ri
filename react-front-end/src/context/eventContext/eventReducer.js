const eventReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newEvents = [...state.events, action.payload];
      return {
        ...state,
        events: newEvents
      };
    default:
      return state;
  }
};

export default eventReducer;
