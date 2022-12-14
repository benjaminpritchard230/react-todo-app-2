import { useState, useEffect } from "react";
import TodoDisplay from "./TodoDisplay";
import UserEntry from "./UserEntry";
import HeaderBar from "./HeaderBar";

const TodoApp = () => {
  const [searchText, setSearchText] = useState("");

  const [mainList, setMainList] = useState(
    JSON.parse(localStorage.getItem("mainList")) || []
  );

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    localStorage.setItem("mainList", JSON.stringify(mainList));
  }, [mainList]);

  useEffect(() => {
    const filtered = mainList.filter((task) => {
      return task.name.includes(searchText);
    });

    setFilteredList(filtered);
    console.log(`Search text: ${searchText}`);
  }, [searchText]);

  const createFilteredCards = () => {
    let cardsArray = [];
    filteredList.forEach((element, index) => {
      cardsArray.push(
        <TodoDisplay
          key={index}
          item={element}
          mainList={mainList}
          setMainList={setMainList}
        />
      );
    });
    return cardsArray;
  };

  const handleDeleteDoneClick = () => {
    setMainList((current) =>
      current.filter((toDo) => {
        return toDo.done === false;
      })
    );
  };

  const handleDeleteAllClick = () => {
    setMainList([]);
  };

  return (
    <div className="container">
      <HeaderBar text="To-do App" setSearchText={setSearchText} />
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          {<UserEntry mainList={mainList} setMainList={setMainList} />}
        </div>
        <div className="col-4 p-3 flex-column-reverse align-items-right justify-content-right">
          <button
            className="btn btn-warning w-50 m-1"
            onClick={() => {
              handleDeleteDoneClick();
            }}
          >
            Delete done
          </button>
          <button
            className="btn btn-danger w-50 m-1"
            data-bs-toggle="modal"
            data-bs-target="#deleteAllModal"
          >
            Delete all
          </button>
          <div
            className="modal fade"
            id="deleteAllModal"
            tabindex="-1"
            aria-labelledby="deleteAllModal"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {mainList.length > 0
                      ? "Delete all tasks?"
                      : "You do not have any tasks."}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {mainList.length > 0
                    ? "Cannot be undone."
                    : "Add some tasks and then you can delete them."}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  {mainList.length > 0 ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDeleteAllClick();
                      }}
                      data-bs-dismiss="modal"
                    >
                      Delete all tasks
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">{createFilteredCards()}</div>
    </div>
  );
};

export default TodoApp;
