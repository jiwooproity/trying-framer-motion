import { BrowserRouter, Route, Routes } from "react-router-dom";
import OutInList from "./framer/OutInList";
import RotateBox from "./framer/RotateBox";
import ShowBox from "./framer/ShowBox";
import PagingBox from "./framer/PagingBox";
import MoveBox from "./framer/MoveBox";
import First from "./practice/First";
import ControlScale from "./framer/ControlScale";

const TestComponentRender = () => (
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentRender />} />
        <Route path="/paging" element={<PagingBox />} />
        <Route path="/movebox" element={<MoveBox />} />
        <Route path="/practice" element={<First />} />
        <Route path="/control-scale" element={<ControlScale />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
