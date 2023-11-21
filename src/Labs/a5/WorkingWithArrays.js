import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({}); // {id: 1, title: "Go to work"
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    fetchTodos();
  }, []);

  <input
    className="form-control"
    value={id}
    onChange={(e) => setTodo({ ...todo, id: e.target.value })}
  />;

  const TODOS_API = "http://localhost:4000/a5/todos";

  const fetchTodosPromise = () => {
    const promise = axios.get(TODOS_API);
    promise.then((response) => {
      setTodos(response.data);
    });
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${TODOS_API}/${id}`);
    setTodo(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    setTodos(response.data);
  };


  const postTodo = async () => {
    const response = await axios.post(TODOS_API, todo);
    setTodos([...todos, response.data]);
  };


  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:4000/a5/todos");
    setTodos(response.data);
  };

  const removeTodo = async (todo) => {
    const response = await axios
      .get(`${TODOS_API}/${todo.id}/delete`);
    setTodos(response.data);
  };


  const deleteTodo = async (todo) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };


  const updateTitle = async () => {
    const response = await axios.get(
      `${TODOS_API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

    
    const updateTodo = async () => {
        try {
          const response = await axios.put(
            `${TODOS_API}/${todo.id}`, todo);
          setTodos(todos.map((t) => (
            t.id === todo.id ? todo : t)));
          setTodo({});
        } catch (error) {
          console.log(error);
          setErrorMessage(error.response.data.message);
    }
    };
    




  useEffect(() => {
    // fetchTodosPromise();
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Working with Arrays</h1>
      <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <h2>Todos from server</h2>
      <button
        className="btn btn-primary"
        onClick={() => updateTitle(id, title)}
      >
        Update Todo Title
      </button>
      <button className="btn btn-primary" onClick={createTodo}>
        Create Todo
      </button>
      <button className="btn btn-primary" onClick={postTodo}>
        Post Todo
      </button>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <button
              className="btn btn-danger float-end"
              onClick={() => deleteTodo(todo)}
            >
              Delete
            </button>
            {todo.title}
            <hr />
            {todo.id}
          </li>
        ))}
      </ul>
      <h2>Update item title</h2>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <a
        href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
        className="btn btn-primary"
      >
        Update Todo Title
      </a>
      <h2>Fetch item by id</h2>

      <input
        className="form-control"
        value={id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />

      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a
        href={`http://localhost:4000/a5/todos/${id}`}
        className="btn btn-primary"
      >
        Fetch Todo {id}
      </a>
      <h2>Fetch Array</h2>
      <a href="http://localhost:4000/a5/todos" className="btn btn-primary">
        Fetch Todos
      </a>
      <br />
      <textarea
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text" className="form-control"
      />
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date" className="form-control"
      />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox" className="form-check-input"
        />
        Completed
      </label>
      <button onClick={postTodo} className = "btn btn-warning">
        Post Todo
      </button>
      <button onClick={updateTodo}>
        Update Todo
      </button>
      <ul className="list-group">
        
      <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
        Update Title
        {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      </button>
        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item">
            <button
                    onClick={() => fetchTodoById(todo.id)}
                    className="btn btn-warning me-2 float-end" >
                    Edit
            </button>
            <button
                onClick={() => removeTodo(todo)}
                className="btn btn-danger float-end" >
                Remove
            </button>
            <button
                onClick={() => deleteTodo(todo)}
                className="btn btn-primary float-end ms-2">
                Delete
            </button>
            
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            
          </li>

        ))}
      </ul>
    </div>
  );
}

export default WorkingWithArrays;