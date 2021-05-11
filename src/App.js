import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Todos from './components/Todos';
import Input from './components/Input';
import Menu from './components/Menu';

const App = () => {
	return (
		<Provider store={store}>
			<div className='App bg-dark-mode'>
				<div className='container'>
					<Header />
					<Input />
					<Todos />
					<Menu />
				</div>
			</div>
		</Provider>
	);
};

export default App;
