import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SmartSurveillance from './pages/Services/SmartSurveillance';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service/smart-surveillance-systems" element={<SmartSurveillance/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
