import OutInList from "./framer/OutInList";
import RotateBox from "./framer/RotateBox";
import ShowBox from "./framer/ShowBox";

const App = () => {
  return (
    <div className="framer-container">
      <div className="framer-wrapper">
        <RotateBox />
      </div>
      <div className="framer-wrapper">
        <OutInList />
      </div>
      <div className="framer-wrapper">
        <ShowBox />
      </div>
    </div>
  );
};

export default App;
