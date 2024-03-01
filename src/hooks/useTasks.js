import { useState } from 'react';
import { v4 } from 'uuid';

export const useTasks = () => {
	const [tasks, setTasks] = useState([]);

	// FUNCION PINTAR NUEVA TAREA
	const printTask = event => {
		event.preventDefault();
		if (!event.target.input.value) return;
		const newTask = {
			id: v4(),
			task: event.target.input.value
		};
		setTasks([...tasks, newTask]);
		event.target.reset();
	};

	// FUNCION PARA ELIMINAR LA TAREA DE LA LISTA
	const deleteTask = task => {
		const updatedTasks = tasks.filter(
			taskToDelete => taskToDelete.id !== task.id
		);
		setTasks(updatedTasks);
	};

	return { tasks, printTask, deleteTask };
};
