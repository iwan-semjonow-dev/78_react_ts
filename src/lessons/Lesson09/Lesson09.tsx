import ToDoList from "../../components/ToDoList/ToDoList";

import { useState, type ChangeEvent } from "react";

function Lesson09() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<string[]>([]);
    const [error, setError] = useState("");

    const addTask = () => {
        if (task === "") {
            setError("Введите задачу");
            return;
        }

        setTasks([task, ...tasks]);
        setTask("");
        setError("");
    };

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
        setError("");
    };

    const deleteTask = (index: number) => {
        const newTasks = tasks.filter((_, itemIndex) => itemIndex !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={inputChange}
            />
            <button onClick={addTask}>Добавить</button>

            {error && <div>{error}</div>}

            <ToDoList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}

export default Lesson09
