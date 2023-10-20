import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = ({ items, getDelItme }) => {
  return (
    <>
      <section>
        <div className="tabelHead">
          <p className="f-bg">Index</p>
          <p className="s-bg">Name</p>
          <p className="f-bg">Email</p>
          <p className="s-bg">Edit</p>
          <p className="f-bg">Delete</p>
        </div>
        {items.map((item, index) => {
          return (
            <div className="tabelData">
              <p className="f-bg">{index + 1}</p>
              <p className="s-bg">{item.name}</p>
              <p className="f-bg">{item.email}</p>
              <p className="s-bg">
                <EditIcon className="cursor" />
              </p>
              <p className="f-bg">
                <DeleteIcon
                  className="cursor"
                  onClick={() => getDelItme(index)}
                />
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default DataTable;
