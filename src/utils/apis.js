import axios from "axios";
const baseURL = "https://mern-todo-backend-c98k.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(baseURL).then(({ data }) => {
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseURL}/save`, { text })
    .then((data) => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseURL}/update`, { _id: toDoId, text })
    .then(() => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};
const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseURL}/delete`, { _id })
    .then(() => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
