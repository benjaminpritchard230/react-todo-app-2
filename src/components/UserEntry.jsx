import { useState } from "react";

const UserEntry = ({ mainList, setMainList }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const date = new Date().toISOString().slice(0, 10);
  const id = Math.floor(Math.random() * 10000) + 1;

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
        },
      ]);
    }
    setName("");
    setDescription("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <input
              value={name}
              id="first_name"
              name="first_name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              value={description}
              id="first_name"
              name="first_name"
              type="text"
              onChange={(event) => setDescription(event.target.value)}
            />

            <button type="submit">Submit form</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserEntry;
