import React, { useState } from "react";

import StarRating from "./StarRating";
function InputForm() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, Description);
    const date = { title, Description };
    if (title && Description) {
      setList((ls) => [...ls, date]);
      setTitle("");
      setDescription("");
    }
  };

  // const Reset = (e) => {};

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Give Review</h1>
        <div className="input-group mb-3 mt-5 ">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title of your Review
          </span>
          <input
            htmlType="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <StarRating />

        <div className="input-group mb-3 mt-2 ">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Description of your Review
          </span>
          <input
            htmlType="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          htmlType="button"
          onClick={handleSubmit}
          className="btn btn-primary btn-lg  "
        >
          Submit
        </button>
        <button htmlType="reset" className="btn btn-secondary btn-lg ms-5 ">
          Reset
        </button>
      </form>
      <br />
      <h1>Reviews</h1>
      <br />
      {list.map((a) => (
        <div>
          <li>{a.title}</li>
          <li>{a.Description}</li>
        </div>
      ))}
    </div>
  );
}

export default InputForm;
