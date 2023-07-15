import books from "../../mocks/books.json";
import { BookCard } from "../BookCard/BookCard";
import "./ListOfBooks.css";

export const ListOfBooks = () => {
  return (
    <ul className="ListOfBooks">
      {books.library.map(({ book }) => (
        <BookCard cover={book.cover} title={book.title} key={book.ISBN} />
      ))}
    </ul>
  );
};
