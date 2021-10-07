import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal'
import {TodosLoading} from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {

	const {
		error,
		loading,
		searchedTodos,
		toggleCompleteTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = useContext(TodoContext);

	return (

		<>
			<TodoCounter />
			<TodoSearch />

			<TodoList>

				{error && <p>Desespérate, hubo un error...</p>}
				{loading && <TodosLoading/>}
				{(!loading && !searchedTodos.length) && <EmptyTodos/>}


				{searchedTodos.map(todo => (

					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => toggleCompleteTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>

				))}

			</TodoList>

			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

			<CreateTodoButton
				setOpenModal={setOpenModal}
				openModal={openModal}
			/>

		</>

	);
}

export { AppUI };