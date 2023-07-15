import "./Home.css";
import books from "../mocks/books.json";

export const Home = () => {
  return (
    <section className="Home">
      <h1>Lista de lectura</h1>
      <div className="Filters">
        <label>
          Filtrar por titulo
          <input type="text" name="search" id="search" />
        </label>
        <label>
          Filtrar por paginas
          <input type="range" name="pages" id="pages" min="0" max="100" />
        </label>
        <label>
          Filtrar por genero
          <select name="genres" id="genres">
            <option selected>Todas</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Terror">Terror</option>
          </select>
        </label>
      </div>
      <ul>
        {books.library.map(({ book }) => (
          <li>{book.title}</li>
        ))}
      </ul>
    </section>
  );
};
