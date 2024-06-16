import "./Card.css";

import { FC } from "react";

import TRepo from "../../types/repo";

interface Props {
  card: TRepo;
  onCardClick: (card: TRepo) => void;
}

const Card: FC<Props> = (props) => {
  return (
    <button
      className="card"
      type="button"
      onClick={() => props.onCardClick(props.card)}
    >
      <p className="card__field">{props.card.name}</p>
      <p className="card__field">{props.card.owner.login}</p>
      <p className="card__field">{props.card.stargazers_count}</p>
    </button>
  );
};

export default Card;
