import React, { useEffect, useState } from 'react';

function Todos() {
    const [todos, setTodos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const [showPending, setShowPending] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error.message);
            }
        };

        fetchTodos();
    }, []);

    const filteredTodos = todos.filter((todo) => {
        if (showCompleted && todo.completed) return true;
        if (showPending && !todo.completed) return true;
        if (!showCompleted && !showPending) return true;
        return false;
    });

    return (
        <div style={{margin: "20px"}}>
            <h1>Todos</h1>
            <div>
                <button onClick={() => { setShowPending(false); setShowCompleted(true);}}>Vis udførte todos</button>
                <button onClick={() => { setShowPending(true); setShowCompleted(false);}}>Vis afventende todos</button>
            </div>
            {filteredTodos.map((todo) => (
                <div key={todo.id}>
                    <p>{todo.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Todos;
