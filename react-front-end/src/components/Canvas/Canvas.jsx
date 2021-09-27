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

  const clickHandler = (e) => {
    setShowPopUp(true);
    setX(e.clientX);
    setY(e.clientY);
  };

  const CloseHandler = () => {
    setShowPopUp(false);
  };

  const allEvents = eventCtx.events.map((event) => {
    return <Event key={event.id} event={event} />;
  });

  return (
    <Fragment>
      {showPopUp && (
        <EventForm
          onSubmit={eventCtx.addEvent}
          coordinate={{ x, y }}
          onClose={CloseHandler}
        />
      )}
      <div onClick={clickHandler} className={classes.container}>
        <img src={aurora} alt="aurora" />
        {allEvents}
      </div>
    </Fragment>
  );
}

export default Canvas;
