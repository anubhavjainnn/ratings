import React from 'react'

function Form() {
  return (
      <div>
          <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Give Review</h1>
        <div className="input-group mb-3 mt-5 ">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title of your Review
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <StarRating />

        <div className="input-group mb-3 mt-2 ">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Description of your Review
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary btn-lg  ">
          Submit
        </button>
        <button type="button" className="btn btn-secondary btn-lg ms-5 ">
          Reset
        </button>
      </div>
      {list.map((a) => (
        <div>
          <li>{a.title}</li>
          <li>{a.Description}</li>
        </div>
      ))}
    </form>
    </div>
  )
}

export default Form