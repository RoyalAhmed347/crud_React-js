import React, { useState } from "react";

const InputForm = ({ getData }) => {
  const [iData, setiData] = useState({
    name: "",
    email: "",
  });
  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setiData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    getData(iData);
  };
  return (
    <>
      <form className="inputForm" onSubmit={submitData}>
        <input
          onChange={inputEvent}
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          onChange={inputEvent}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input type="submit" className="btn" value="Create" />
      </form>
    </>
  );
};

export default InputForm;
