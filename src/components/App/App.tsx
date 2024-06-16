import "./App.css";

import { lazy, Suspense, useState } from "react";

import TRepo from "../../types/repo";

import api from "../../utils/Api";

import useDebounce from "../../hooks/useDebounce";

import Preloader from "../Preloader/Preloader";
import Info from "../Info/Info";
const Container = lazy(() => import("../Container/Container"));
const Input = lazy(() => import("../Input/Input"));

function App() {
  const [res, setRes] = useState<TRepo[]>([]);
  const [currentCard, setCurrentCard] = useState<TRepo | null>(null);
  const [isClear, setIsClear] = useState(false);

  function handleSearch(query: string) {
    api
      .getRepo(query)
      .then((res) => setRes(res.items))
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardClick(card: TRepo) {
    setCurrentCard(card);
    setIsClear(!isClear);
  }

  return (
    <main className="app">
      <Suspense fallback={<Preloader />}>
        <div className="app__content">
          <Input onSearch={useDebounce(handleSearch, 600)} clear={isClear} />
          <Container repos={res} onCardClick={handleCardClick} />
        </div>
        <Info card={currentCard} />
      </Suspense>
    </main>
  );
}

export default App;
