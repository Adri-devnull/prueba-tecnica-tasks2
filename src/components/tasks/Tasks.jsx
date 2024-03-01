import { useTasks } from '../../hooks/useTasks';

const Tasks = () => {
	const { tasks, printTask, deleteTask } = useTasks();

	return (
		<>
			<form onSubmit={event => printTask(event)}>
				<div>
					<label htmlFor='input'>Introduce tarea</label>
					<input type='text' id='input' />
					<button>Add task</button>
				</div>
			</form>
			<div>
				<h3>Lista de tareas</h3>
				{tasks.map(task => (
					<div key={task.id}>
						<span>
							{task.task}
							<button onClick={() => deleteTask(task)}>x</button>
						</span>
					</div>
				))}
				<span>Tareas pendientes: {tasks.length}</span>
			</div>
		</>
	);
};

export default Tasks;
