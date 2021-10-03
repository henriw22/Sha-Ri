import { useState } from "react";
import Modal from "../UI/Modal";
import { v4 as uuid } from "uuid";
import classes from "./EventForm.module.css";

function EventForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("sad");
  const [importance, setImportance] = useState(3);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [files, setFiles] = useState(props.event?.files || []);

  const fileUploadHandler = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setMood("");
    setImportance("");
    setDate("");
    setLocation("");
    setFiles([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newEvent = {
      id: uuid(),
      title,
      description,
      mood,
      importance,
      date,
      location,
      files,
      x: props.coordinate.x,
      y: props.coordinate.y
    };

    if (props.event) {
    }

    props.onSubmit(newEvent);
    props.onClose();
    reset();
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={props.event?.title || title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          value={props.event?.description || description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="mood">Select a mood</label>
        <select
          name="mood"
          id="mood"
          value={props.event?.mood || mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="happy">Happy</option>
          <option value="delighted">Delighted</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
        </select>
        <label htmlFor="importance">How important is this event for you?</label>
        <input
          type="number"
          step="1"
          max="5"
          min="1"
          name="importance"
          id="importance"
          value={props.event?.importance || importance}
          onChange={(e) => {
            setImportance(e.target.value);
          }}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={props.event?.date || date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="location">Where is the event held?</label>
        <input
          type="text"
          name="location"
          value={props.event?.location || location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="file">Photo or Video</label>
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          accept=".png,.jpeg,.jpg"
          onChange={fileUploadHandler}
        />
        {files && (
          <div className={classes.fileUploader}>
            {files.map((file) => (
              <img src={URL.createObjectURL(file)} alt="" />
            ))}
          </div>
        )}
      </form>
      <div>
        <button onClick={props.onClose}>Cancel</button>
        <button onClick={submitHandler}>
          {props.event ? "Update" : "Submit"}
        </button>
      </div>
    </Modal>
  );
}

export default EventForm;
