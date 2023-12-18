import React, { FC, useEffect } from 'react';
import './BookList.css';
import { BookListProps } from '../../interfaces';
import BookShow from '../BookShow/BookShow';


const BookList: FC<BookListProps> = ({bookList, deleteBook, editTitle}) => {


	

return <div className="BookList">
    {bookList.map((el, index) => 
			<BookShow key={el.id} deleteBook={() => deleteBook(el.id)}
			editTitle={editTitle}
			id={el.id} title={el.title}/>
	)}
  </div>
};

export default BookList;
