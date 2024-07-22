import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Landing/Home';
import Navbar from './components/Landing/Navbar';
import Footer from './components/Landing/Footer';
import SecurityPrivacy from './components/Landing/SecurityPrivacy';
import Contact from './components/Landing/Contact';
import LoginPage from './components/Landing/LoginPage';
import RegisterPage from './components/Landing/RegisterPage';
import ComingSoon from './components/Landing/ComingSoon';
import DashboardLayout from './components/AdminWebApp/DashboardLayout';
import DashboardHome from './components/AdminWebApp/DashboardHome';
import DashboardSettings from './components/AdminWebApp/DashboardSettings';
import DashboardAccount from './components/AdminWebApp/DashboardAccount';
import DashboardBoards from './components/AdminWebApp/DashboardBoards';
import DashboardTeam from './components/AdminWebApp/DashboardTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Home />
          <Footer />
        </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<>
          <Navbar />
          <Contact />
          <Footer />
        </>
        } />
        <Route path="/security-privacy" element={<>
          <Navbar />
          <SecurityPrivacy />
          <Footer />
        </>
        } />
        <Route path="/blog" element={<>
          <Navbar />
          <ComingSoon />
          <Footer />
        </>
        } />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pricing" element={<>
          <Navbar />
          <ComingSoon />
          <Footer />
        </>
        } />
        <Route path="/how-it-works" element={<>
          <Navbar />
          <ComingSoon />
          <Footer />
        </>
        } />
        <Route path="/company" element={<>
          <Navbar />
          <Home />
          <Footer />
        </>
        } />
        <Route path="/beta" element={<>
          <Navbar />
          <ComingSoon />
          <Footer />
        </>
        } />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="team" element={<DashboardTeam />} />
          <Route path="boards" element={<DashboardBoards />} />
          <Route path="settings" element={<DashboardSettings />} />
          <Route path="account" element={<DashboardAccount />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
