export interface BookListI {
	id: number
	title: string
}
export interface BookCreatProps {
	func: (title: string) => void
}
export interface BookListProps {
	bookList: BookListI[]
	deleteBook: (id: number) => void,
	editTitle: (id: number, title: string) => void
}
export interface BookShowProps {
	title: string
	deleteBook: () => void
	id: number
	editTitle: (id: number, title: string) => void

}
export interface BookEditProps {
	defaultVal: string
	id: number
	setEditFalse: () => void
	editTitle: (id: number, title: string) => void

}
