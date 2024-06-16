import "./Info.css";

import TRepo from "../../types/repo";

const Info = ({ card }: { card: TRepo | null }) => {
  return (
    <div className={card ? "info info_visible" : "info"}>
      <p className="info__name">{card?.name}</p>
      <div className="info__owner">
        <p className="info__field">by {card?.owner.login}</p>
        <img
          className="info__avatar"
          src={card?.owner.avatar_url}
          alt={card?.name}
        />
      </div>
      <p className="info__field">{card?.stargazers_count} stars</p>
      <p className="info__field">{card?.forks} forks</p>
      <p className="info__field">writed on {card?.language}</p>
      <p className="info__field">created at {card?.created_at}</p>
      <p className="info__field">last update {card?.updated_at}</p>
      <a
        href={card?.svn_url}
        target="_blank"
        className="info__field"
        rel="noreferrer"
      >
        link
      </a>
    </div>
  );
};

export default Info;
