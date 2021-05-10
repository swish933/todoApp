import React from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import Input from './components/Input';
import Menu from './components/Menu';

const App = () => {
	return (
		<div className='App bg-dark-mode'>
			<div className='container'>
				<Header />
				<Input />
				<Todo />
				<Menu />
			</div>
		</div>
	);
};

export default App;
