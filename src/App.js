import React, { useState } from "react";
import "./App.css";
import Header from "./Compunent/Header";
import InputForm from "./Compunent/inputForm";
import DataTable from "./Compunent/DataTable";

const App = () => {
  const [items, setItems] = useState([]);
  const getData = (iData) => {
    setItems((preData) => {
      return [...preData, iData];
    });
  };
  const getDelItme = (id) => {
    setItems((preData) => {
      return preData.filter((ele, ind) => {
        return id !== ind;
      });
    });
  };
  return (
    <>
      <Header />
      <InputForm getData={getData} />
      <DataTable items={items} getDelItme={getDelItme} />
    </>
  );
};

export default App;
