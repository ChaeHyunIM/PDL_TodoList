import React from 'react';
import Router from './Router';
import {RecoilRoot} from 'recoil';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
	<RecoilRoot>
		<Router />
	</RecoilRoot>,
);
