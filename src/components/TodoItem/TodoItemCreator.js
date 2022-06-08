import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {todoListState} from '../../store/atoms';

const TodoItemCreator = () => {
	const [inputValue, setInputValue] = useState('');
	const setTodoList = useSetRecoilState(todoListState);

	const addMajorItem = () => {
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id: getId(),
				text: inputValue,
				isComplete: false,
				isMajor: true,
			},
		]);
		setInputValue('');
	};

	const addMinorItem = () => {
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id: getId(),
				text: inputValue,
				isComplete: false,
				isMajor: false,
			},
		]);
		setInputValue('');
	};

	const onChange = ({target: {value}}) => {
		setInputValue(value);
	};

	return (
		<div>
			<input type='text' value={inputValue} onChange={onChange} />
			<button onClick={addMajorItem} disabled={inputValue === ''}>
				Add1
			</button>
			<button onClick={addMinorItem} disabled={inputValue === ''}>
				Add2
			</button>
		</div>
	);
};

let id = 1;
const getId = () => {
	return `${id++}`;
};

export default TodoItemCreator;
