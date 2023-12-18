import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { BookListI } from './interfaces';
import BookCreat from './components/BookCreat/BookCreat';
import BookList from './components/BookList/BookList';
import axios from 'axios';

function App() {

	const [bookList, setBookList] = useState<BookListI[]>([])

	useEffect(() => {
		fetchData();
	
	}, [])
	
	
	let fetchData = async () => {
		let res = await axios.get('http://localhost:5000/books')
		setBookList(res.data)
	}

	let createBook = async (title: string) => {

		let res = await axios.post('http://localhost:5000/books', {title})

		// let newBook = {id: bookList.length+1,title: title}
		setBookList([...bookList, res.data])
		
	}

	let editBookTitle = async (id: number, title: string) => {

		let res = await axios.put(`http://localhost:5000/books/${id}`, {title} )

	
		setBookList(bookList.map(el => {
			return el.id === id ?  {...el, ...res.data} : el
		}))
	}


	let deleteBook =  async (id: number ) => {

		await axios.delete(`http://localhost:5000/books/${id}`)
		setBookList(
			//[ ...bookList.slice(0, id), first way to remove element, by index
			// ...bookList.slice(id+1) ]
			bookList.filter((el) => el.id !== id) // seconde way to remove elements, by id
		)
		
		
	}

  return (
    <div className="App">
		<h1>Reading List</h1>
		<BookCreat func={createBook}/>
		<BookList deleteBook={deleteBook} bookList={bookList} editTitle={editBookTitle}/>
    </div>
  );
}

export default App;
