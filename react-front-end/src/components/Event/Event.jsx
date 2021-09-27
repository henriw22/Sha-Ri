function Event(props) {
  const { x, y, title } = props.event;
  return <div style={{ position: "absolute", top: y, left: x }}>{title}</div>;
}

export default Event;
