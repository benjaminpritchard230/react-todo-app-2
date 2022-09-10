import { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import UserEntry from "./UserEntry";
import HeaderBar from "./HeaderBar";

const TodoApp = () => {
  const [mainList, setMainList] = useState([
    { name: "ben", description: "go", id: 1234 },
  ]);

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
