interface Props {
  title: string;
  cover: string;
}

export const BookCard = ({ title, cover }: Props) => {
  return (
    <li className="BookCard">
      <img
        style={{
          maxWidth: "200px",
          borderRadius: "4px",
        }}
        src={cover}
        alt={title}
      />
    </li>
  );
};
