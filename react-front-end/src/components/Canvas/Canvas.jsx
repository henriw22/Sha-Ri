import { Fragment, useState, useContext } from "react";
import { eventContext } from "../../context/eventContext/eventContext";

import aurora from "../../images/aurora.jpg";
import Event from "../Event/Event";
import EventForm from "../Event/EventForm";
import classes from "./Canvas.module.css";

function Canvas(props) {
  const eventCtx = useContext(eventContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [event, setEvent] = useState();

  const addEventHandler = (e) => {
    setShowPopUp(true);
    setX(e.clientX);
    setY(e.clientY);
  };

  const editEventHandler = (eventId) => {
    const event = eventCtx.events.find((event) => event.id === eventId);
    setShowPopUp(true);
    setEvent(event);
  };

  const CloseHandler = () => {
    setShowPopUp(false);
    setEvent();
  };

  const allEvents = eventCtx.events.map((event) => {
    return <Event key={event.id} event={event} onEdit={editEventHandler} />;
  });

  return (
    <Fragment>
      {showPopUp && (
        <EventForm
          onSubmit={eventCtx.addEvent}
          onUpdate={eventCtx.updateEvent}
          coordinate={{ x, y }}
          onClose={CloseHandler}
          event={event}
        />
      )}
      <div className={classes.container}>
        <img src={aurora} alt="aurora" onClick={addEventHandler} />
        {allEvents}
      </div>
    </Fragment>
  );
}

export default Canvas;
