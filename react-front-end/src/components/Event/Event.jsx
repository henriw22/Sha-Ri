import StarBorderIcon from "@mui/icons-material/StarBorder";

function Event(props) {
  const { id, x, y } = props.event;

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: "25px",
        height: "25px",
        cursor: "pointer"
      }}
      onClick={() => props.onEdit(id)}
    >
      <StarBorderIcon />
    </div>
  );
}

export default Event;
