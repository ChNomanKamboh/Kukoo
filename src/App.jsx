import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Slider from "./components/Slider";
import VideoGallery from "./components/Video";

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/videos" element={<VideoGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
