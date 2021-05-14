import React from 'react';
import styles from './Header.module.css';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { THEME } from '../constants';
import { setTheme } from '../actions/actions';

const Header = ({ changeTheme, theme, setTheme }) => {
	const onClick = () => {
		switch (theme) {
			case THEME.LIGHT:
				setTheme(THEME.DARK);
				break;
			case THEME.DARK:
				setTheme(THEME.LIGHT);
				break;
			default:
				return;
		}
	};

	return (
		<div className={styles.Header}>
			<h1>TODO</h1>
			<img
				src={theme === 'darkMode' ? sun : moon}
				alt='Theme-Icon'
				onClick={onClick}
			/>
		</div>
	);
};

Header.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	theme: state.theme,
});
export default connect(mapStateToProps, { setTheme })(Header);
