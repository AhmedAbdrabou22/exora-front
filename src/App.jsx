import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import SmartSurveillance from './pages/Services/SmartSurveillance';
import SmartLightingControl from './pages/Services/SmartLightingControl';
import SecuritySystem from './pages/Services/SecuritSystem';
import HvacSystem from './pages/Services/HvacSystem';
import './i18n';
import MediaHomeSystem from './pages/Services/MediaHomeSustem';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

function App() {
  return (
    <ThemeProvider>

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/service/smart-surveillance-systems" element={<SmartSurveillance />} />
            <Route path="/service/smart-lighting-control" element={<SmartLightingControl />} />
            <Route path="/service/integrated-security-systems" element={<SecuritySystem />} />
            <Route path="/service/smart-hvac-systems" element={<HvacSystem />} />
            <Route path="/service/home-audio-media-systems" element={<MediaHomeSystem />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
