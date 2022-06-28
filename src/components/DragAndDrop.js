import {todoListState} from '../store/atoms';
import {useRecoilState} from 'recoil';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import TodoList from "./TodoList/TodoList";

const DragAndDrop = () => {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};

	const onDragEnd = (result) => {
		if (!result.destination) {
			return;
		}

		if (result.destination.index === result.source.index) {
			return;
		}

		const todo = reorder(
			todoList,
			result.source.index,
			result.destination.index,
		);

		setTodoList(todo);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='list'>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<TodoList />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default DragAndDrop;
