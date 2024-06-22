import "./App.css";
import GiveStarsRating from "./component/GiveStarsRating";
import ShowStarsRating from "./component/ShowStarRating";

function App() {
  return (
    <div>
      <GiveStarsRating />

      <ShowStarsRating stars="2" reviews="This was a nice product" />
    </div>
  );
}

export default App;
