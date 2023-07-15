import "./BookCard.css";

interface Props {
  title: string;
  cover: string;
}

export const BookCard = ({ title, cover }: Props) => {
  return (
    <li className="BookCard">
      <img src={cover} alt={title} />
    </li>
  );
};
