import { useState } from "react";
import Modal from "../UI/Modal";
import { v4 as uuid } from "uuid";

function EventForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newEvent = {
      id: uuid(),
      title,
      description,
      x: props.coordinate.x,
      y: props.coordinate.y
    };

    props.onSubmit(newEvent);
    props.onClose();
  };
  
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </Modal>
  );
}

export default EventForm;
