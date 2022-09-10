import { useState } from "react";

const TodoDisplay = ({ item, mainList, setMainList }) => {
  const [done, setDone] = useState(false);

  const capitaliseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleDeleteClick = (item) => {
    setMainList((current) =>
      current.filter((toDo) => {
        return toDo.id !== item.id;
      })
    );
  };

  return (
    <div
      className="card shadow"
      style={{
        backgroundColor: done ? "rgba(0, 255, 0, 0.5)" : "white",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{capitaliseFirstLetter(item.name)}</h5>
        <h6 className="card-subtitle mb-2 ">{item.date}</h6>
        <p className="card-text">{capitaliseFirstLetter(item.description)}</p>
        <p>{item.id}</p>
      </div>
      <span>
        <button
          className="btn btn-danger w-45 m-1"
          onClick={() => {
            handleDeleteClick(item);
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-success w-45 m-1"
          onClick={() => {
            setDone(!done);
          }}
        >
          Done
        </button>
      </span>
    </div>
  );
};

export default TodoDisplay;
