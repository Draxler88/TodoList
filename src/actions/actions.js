export const ADD = (inputValue) => {
    return {
        type: "ADD",
        payload: {content : inputValue, id : Date.now()},
      }
}


export const DELETE = (id) => {
    return {
        type: "DELETE",
        payload : {id},
      }
}

export const UPDATE = (updatedTodo) => {
    return {
        type: "UPDATE",
        payload : updatedTodo,
      }
}