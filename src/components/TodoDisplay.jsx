const TodoDisplay = ({ item, mainList, setMainList }) => {
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

  const handleDoneClick = (item) => {
    let tempArray = [...mainList];
    const index = mainList.findIndex((element) => element.id === item.id);
    console.log(tempArray[index]);
    tempArray[index].done = !tempArray[index].done;
    setMainList(tempArray);
  };

  return (
    <div className="col-4 p-2">
      <div
        className="card "
        style={{
          backgroundColor: item.done ? "rgba(0, 255, 0, 0.5)" : "white",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{capitaliseFirstLetter(item.name)}</h5>
          <h6 className="card-subtitle mb-2 ">{item.date}</h6>
          <p className="card-text h-100">
            {capitaliseFirstLetter(item.description)}
          </p>
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
              handleDoneClick(item);
            }}
          >
            Done
          </button>
        </span>
      </div>
    </div>
  );
};

export default TodoDisplay;
