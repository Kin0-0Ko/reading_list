import React, { FC, useState } from 'react';
import './BookEdit.css';
import { BookEditProps } from '../../interfaces';


const BookEdit: FC<BookEditProps> = ({defaultVal, editTitle, id, setEditFalse}) => {
	const [value, setValue] = useState(defaultVal)

	let submitHandelr = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		editTitle(id, value)
		setEditFalse();
	
	}

 return <div className="BookEdit">
	<form onSubmit={submitHandelr}>
		<label htmlFor='title'>Title:</label>
		<input 
		type="text" name="title" value={value}
		id="title"
		onChange={(e) => setValue(e.target.value)}
		/>
	</form>
  </div>
};

export default BookEdit;
