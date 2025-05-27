import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SmartSurveillance from './pages/Services/SmartSurveillance';
import SmartLightingControl from './pages/Services/SmartLightingControl';
import SecuritySystem from './pages/Services/SecuritSystem';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service/smart-surveillance-systems" element={<SmartSurveillance/>} />
          <Route path="/service/smart-lighting-control" element={<SmartLightingControl/>} />
          <Route path="service/integrated-security-systems" element={<SecuritySystem/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
