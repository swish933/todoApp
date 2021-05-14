import React from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Input from './components/Input';
import cx from 'classnames';
import { connect } from 'react-redux';

const App = ({ theme }) => {
	return (
		<div
			className={cx({
				App: true,
				darkMode: theme === 'darkMode',
				lightMode: theme === 'lightMode',
			})}>
			<div className='container'>
				<Header />
				<Input />
				<Todos />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	theme: state.theme,
});

export default connect(mapStateToProps, null)(App);
