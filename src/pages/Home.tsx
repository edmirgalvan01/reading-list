import "./Home.css";
import books from "../mocks/books.json";

export const Home = () => {
  return (
    <section className="Home">
      <h1>Lista de lectura</h1>
      <ul>
        {books.library.map(({ book }) => (
          <li>{book.title}</li>
        ))}
      </ul>
    </section>
  );
};
