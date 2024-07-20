import "../assets/sass/components/task.styles.scss";
function Task(props) {
  return (
    <ul className="Task">
      <li>
        {activated(props)}
        <a href="#">
          <img src="../public/icons/check.png" alt="check" />
        </a>
        <a href="#">
          <img src="../public/icons/trash.png" alt="delete" />
        </a>
      </li>
    </ul>
  );
}

const activated = (props) => {
  if (props.activated == "true") {
    return <span className="comment">{props.task}</span>;
  } else {
    return <span className="comment subrayado">{props.task}</span>;
  }
};
export default Task;
/* import "../assets/sass/components/task.styles.scss";
const tecnologies = [{ id: 1, name: "To study React fundamentals" }];
function Task() {
  return (
    <ul className="Task">
      {tecnologies.map((value) => {
        return (
          <li key={value.id}>
            <span className="comment">{value.name}</span>
            <a href="#">
              <img src="../public/icons/check.png" alt="check" />
            </a>
            <a href="#">
              <img src="../public/icons/trash.png" alt="delete" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Task;
 */
