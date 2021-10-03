import { createContext, useReducer } from "react";
import eventReducer from "./eventReducer";

const initial_state = {
  events: [],
  isFetching: false,
  error: false,
  beginFetching: () => {},
  reportError: () => {},
  completeFetching: (events) => {},
  addEvent: (event) => {},
  updateEvent: (event) => {},
  removeEvent: (id) => {}
};

export const eventContext = createContext(initial_state);

const EventContextProvider = ({ children }) => {
  const [eventState, dispatchEventAction] = useReducer(
    eventReducer,
    initial_state
  );

  const beginFetching = () => {
    dispatchEventAction({
      type: "BEGGIN_FETCHING"
    });
  };

  const reportError = () => {
    dispatchEventAction({
      type: "ERROR"
    });
  };

  const completeFetching = (events) => {
    dispatchEventAction({
      type: "COMPLETE_FETCHING",
      payload: events
    });
  };

  const addEvent = (event) => {
    dispatchEventAction({
      type: "ADD",
      payload: event
    });
  };

  const updateEvent = (event) => {
    dispatchEventAction({
      type: "UPDATE",
      payload: event
    });
  };

  const removeEvent = (id) => {
    dispatchEventAction({
      type: "REMOVE",
      payload: id
    });
  };

  return (
    <eventContext.Provider
      value={{
        events: eventState.events,
        isFetching: eventState.isFetching,
        error: eventState.error,
        beginFetching,
        reportError,
        completeFetching,
        addEvent,
        updateEvent,
        removeEvent
      }}
    >
      {children}
    </eventContext.Provider>
  );
};

export default EventContextProvider;
