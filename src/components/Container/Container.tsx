import "./Container.css";

import TRepo from "../../types/repo";

import Card from "../Card/Card";

const Container = ({
  repos,
  onCardClick,
}: {
  repos: TRepo[];
  onCardClick: (card: TRepo) => void;
}) => {
  return (
    <div className="container">
      <div className="container__titles">
        <p>Title</p>
        <p>Author</p>
        <p>Rating</p>
      </div>
      {repos.map((el: TRepo, ind: number) => (
        <Card key={ind} card={el} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

export default Container;
