import "../assets/sass/components/addtask.styles.scss";
function Task(props) {
  return (
    <layout className="AddTask">
      <div className="especial">
        <span className="comment">{props.addtext}</span>
      </div>
      <div>
        <a className="a-plus" href="#">
          <img src="../public/icons/plus.png" alt="plus" />
        </a>
      </div>
    </layout>
  );
}

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
