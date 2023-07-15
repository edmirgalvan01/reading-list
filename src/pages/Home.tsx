import "./Home.css";
import { ListOfBooks } from "../components/ListOfBooks/ListOfBooks";
import { Filters } from "../components/Filters/Filters";

export const Home = () => {
  return (
    <section className="Home">
      <h1>Lista de lectura</h1>
      <h3>
        8 libros disponibles <small>(2 en la lista de lectura)</small>
      </h3>
      <Filters />
      <ListOfBooks />
    </section>
  );
};
