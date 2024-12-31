import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ADD, UPDATE } from "../actions/actions";
import { DELETE } from "../actions/actions";

const Input = () => {
  const toDo = useSelector((state) => state.addTodo) || [];
  const dispatch = useDispatch();
  const [dataToUpdate, setDataToUpdate] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleDelete = (id) => {
    dispatch(DELETE(id))
  };
  const handleUpdate = (todo) => {
    setDataToUpdate(todo)
  }

  const handleAddTodo = () => {
    if (inputValue === "" && !dataToUpdate) return;

    if(dataToUpdate){
      if (dataToUpdate.content === "") return;
      dispatch(UPDATE(dataToUpdate))
      setDataToUpdate(null)
    }else{
      dispatch(ADD(inputValue));
    }
  setInputValue("")
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 p-3 card shadow">
          <h1 className="text-danger text-center mb-4">Todo List</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex align-items-center mb-2"
          >
            <input
              type="text"
              className="form-control me-2"
              placeholder="Insert what will you do today?"
              value={dataToUpdate ? dataToUpdate.content : inputValue}
              onChange={(e) =>
                dataToUpdate ? setDataToUpdate({...dataToUpdate, content : e.target.value}) :
                setInputValue(e.target.value)
              }
            />
            <button onClick={() => handleAddTodo()} className="btn btn-primary">
            {dataToUpdate ? "Update" : "Add"}
            </button>
          </form>
          <div>
            {toDo && toDo.length > 0 ? (
              toDo.map((todo) => (
                <div key={todo.id} className=" d-flex align-items-center justify-content-between p-2 border rounded mb-2">
                  <p className="mb-0">{todo.content}</p>
                  <div className="d-flex gap-3 align-items-center">
                    <button
                      className="btn btn-light p-1"
                      onClick={() => handleUpdate(todo)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="btn btn-light p-1"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No tasks available!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
