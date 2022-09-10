import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserEntry = ({ mainList, setMainList }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);
  const date = new Date().toISOString().slice(0, 10);
  const id = uuidv4();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (name) {
      setMainList([
        ...mainList,
        {
          name: name,
          description: description,
          date: date,
          id: id,
          done: done,
        },
      ]);
    }
    setName("");
    setDescription("");
  };
  return (
    <div className="container d-flex align-items-center justify-content-center p-3">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="col-auto m-1">
            {" "}
            <input
              value={name}
              id="first_name"
              name="first_name"
              type="text"
              placeholder="Task name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="col-auto m-1">
            <input
              value={description}
              id="first_name"
              name="first_name"
              type="text"
              placeholder="Task description"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="col-auto d-flex align-items-center justify-content-center p-1 ">
            <button type="submit" className="btn btn-primary w-100">
              Create task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEntry;
