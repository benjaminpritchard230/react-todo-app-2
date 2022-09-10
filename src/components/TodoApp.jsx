import { useState, useEffect } from "react";
import TodoDisplay from "./TodoDisplay";
import UserEntry from "./UserEntry";
import HeaderBar from "./HeaderBar";

const TodoApp = () => {
  const [mainList, setMainList] = useState(
    JSON.parse(localStorage.getItem("mainList"))
  );

  useEffect(() => {
    localStorage.setItem("mainList", JSON.stringify(mainList));
  }, [mainList]);

  const createCards = () => {
    let cardsArray = [];
    mainList.forEach((element, index) => {
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
  return (
    <div className="container">
      <HeaderBar text="To-do App" />
      <div className="row">
        <div className="col-12">
          {" "}
          {<UserEntry mainList={mainList} setMainList={setMainList} />}
        </div>
      </div>
      <div className="row">
        <div className="col-12">{createCards()}</div>
      </div>
    </div>
  );
};

export default TodoApp;
