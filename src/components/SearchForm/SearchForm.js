import React from 'react';
import classes from './SearchForm.module.css';
import searchIcon from './searchIcon.svg';

const searchForm = (props) => {
	return(
		<form className={classes.SearchForm} onSubmit={props.onSearch}>
			<input onChange={props.onChangeHandler} type="search" name="search" placeholder="Search" required/>
			<button type="submit">
				<img src={searchIcon} alt="search icon"/>
			</button>
		</form>
	);
}

export default searchForm;
