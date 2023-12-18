import React, { FC, useState } from 'react';
import './BookShow.css';
import { BookShowProps } from '../../interfaces';
import BookEdit from '../BookEdit/BookEdit';



const BookShow: FC<BookShowProps> = ({title, deleteBook, editTitle, id}) => {

	const [active, setActive] = useState(false)

	let activeHandler = () => {
		active ? setActive(false) : setActive(true)
	}

 return <div className="BookShow">
	<div className="BookShow_top">
		<button className="edit" onClick={activeHandler}>&#9998;</button>
		<button className="delete" onClick={deleteBook}>&#128465;</button>
	</div>
	<div className="BookShow_mid">
		<img src={`https://picsum.photos/seed/${id}/290/200`} alt="book" />

	</div>
	<span className="title">
		{active ? <BookEdit setEditFalse={activeHandler}
		editTitle={editTitle} id={id} defaultVal={title}/> : title
			
		}
	</span>
  </div>
};

export default BookShow;
