import {todoListState} from '../../store/atoms';
import {useRecoilValue} from 'recoil';
import TodoItemCreator from '../TodoItem/TodoItemCreator';
import TodoItem from '../TodoItem/TodoItem';
import TodoListStats from './TodoListStats';

const TodoList = () => {
	const todoList = useRecoilValue(todoListState);
	console.log(todoList);
	console.log(todoList.length);

	return (
		<>
			<TodoListStats />
			<TodoItemCreator />
			{todoList.map((todoItem, index) => (
				<TodoItem index={index} key={todoItem.id} item={todoItem} />
			))}
		</>
	);
};

export default TodoList;
