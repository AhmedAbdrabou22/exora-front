import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SmartSurveillance from './pages/Services/SmartSurveillance';
import SmartLightingControl from './pages/Services/SmartLightingControl';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service/smart-surveillance-systems" element={<SmartSurveillance/>} />
          <Route path="/service/smart-lighting-control" element={<SmartLightingControl/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
