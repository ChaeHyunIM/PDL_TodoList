import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DragAndDrop from '../../tdlbackup/components/DragAndDrop';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<DragAndDrop />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
