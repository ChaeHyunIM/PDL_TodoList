import React from 'react';
import {useRecoilState} from 'recoil';
import {todoListState} from '../../store/atoms';
import {Draggable} from 'react-beautiful-dnd';

const TodoItem = ({item, index: currentIndex}) => {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = ({target: {value}}) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value,
		});
		setTodoList(newList);
	};
	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});
		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);
		setTodoList(newList);
	};

	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{todoList.content}
					<input
						type='text'
						value={item.text}
						onChange={editItemText}
						style={
							item.isMajor
								? {backgroundColor: 'lightblue'}
								: {backgroundColor: 'red'}
						}
					/>
					<input
						type='checkbox'
						checked={item.isComplete}
						onChange={toggleItemCompletion}
					/>
					<button onClick={deleteItem}>
						{currentIndex + 1}번째 아이템 삭제하기
					</button>
				</div>
			)}
		</Draggable>
	);
};

function replaceItemAtIndex(arr, index, newValue) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
