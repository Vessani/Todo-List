"use client";
import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className=" flex flex-col items-center gap-4">
      <h1 className="text-2xl mb-4">Lista de Tarefas</h1>
      <div className="mb-4 flex gap-2 items-center">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border w-60 h-10"
          placeholder="Nova Tarefa"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 w-20 h-10"
        >
          Adicionar
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className=" mb-2 items-center flex gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through" : ""}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-auto text-red-500"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
