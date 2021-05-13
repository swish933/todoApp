import React from 'react';
import styles from './Header.module.css';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';

const Header = () => {
	return (
		<div className={styles.Header}>
			<h1>TODO</h1>
			<img src={sun} alt='Theme-Icon' />
		</div>
	);
};

export default Header;
