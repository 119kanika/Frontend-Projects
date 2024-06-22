import "./App.css";
import StarsRating from "./component/StarsRating";

function App() {
  return (
    <div>
      <StarsRating stars="4.2" reviews="This was a nice product" />
      <StarsRating stars="2" reviews="This was a nice product" />
      <StarsRating stars="3.6" reviews="This was a nice product" />
      <StarsRating stars="0" reviews="This was a nice product" />
    </div>
  );
}

export default App;
