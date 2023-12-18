import React, { FC, useState } from 'react';
import './BookCreat.css';
import { BookCreatProps } from '../../interfaces';


const BookCreat: FC<BookCreatProps> = ({func}) => {

const [title, setTitle] = useState<string>('')
let submitHandelr = (e: React.MouseEvent) => {
	e.preventDefault();
	func(title);
	setTitle('')

}

return <div className="BookCreat">
	<h2>Add a Book</h2>
    <form className='BookCreat_form'>
		<span>Title</span>
		<input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
		<button className="BookCreat_button"onClick={(e) => submitHandelr(e)}>Submit</button>
	</form>
  </div>
};

export default BookCreat;
