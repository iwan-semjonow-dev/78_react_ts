interface ToDoListProps {
    tasks: string[];
    deleteTask: (index: number) => void;
}

function ToDoList({ tasks, deleteTask }: ToDoListProps) {
    return (
        <div>
            {tasks.map((item, index) => (
                <div key={index}>
                    {item}
                    <button onClick={() => deleteTask(index)}>X</button>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
