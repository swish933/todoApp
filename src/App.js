import React from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Input from './components/Input';
import Menu from './components/Menu';

const App = () => {
	return (
		<div className='App bg-dark-mode'>
			<div className='container b-red'>
				<Header />
				<Input />
				<Todos />
				<Menu />
			</div>
		</div>
	);
};

export default App;
