import { useState } from "react";
import "./App.css";
import img1 from "./assets/cover.png";
import img2 from "./assets/helmet-1.png";
import img3 from "./assets/potion-1.png";
import img4 from "./assets/ring-1.png";
import img5 from "./assets/scroll-1.png";
import img6 from "./assets/shield-1.png";
import img7 from "./assets/sword-1.png";
import GameGrid from "./components/GameGrid";
export const myarr = [
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
  {
    src: img5,
  },
  {
    src: img6,
  },
  {
    src: img7,
  },
];
function App() {
  const [shuffled, setShuffled] = useState([]);
  const [moves, setMoves] = useState(0);

  const shuffleFunc = () => {
    const shuffledArr = [...myarr, ...myarr]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setShuffled(shuffledArr);
  };
  return (
    <>
      <div>
        <div className="flex text-center justify-center m-8">
          <h1 className="text-white ">Magic Match</h1>
        </div>
        <div className="flex text-center justify-center">
          <button
            onClick={shuffleFunc}
            className="text-white w-24 border text-center justify-center cursor-pointer"
          >
            New Game
          </button>
        </div>
        <div className="flex flex-row flex-wrap ">
          {shuffled.map((itr) => (
            <GameGrid key={itr.id} itr={itr} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
