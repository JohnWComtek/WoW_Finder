import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import store from './store';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './pages/Home';
import PlayerFinder from './pages/PlayerFinder';
import RosterManager from './pages/RosterManager';
import RosterDetail from './pages/RosterDetail';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

// Feature Pages
import FindPlayers from './pages/features/FindPlayers';
import TrackProgress from './pages/features/TrackProgress';
import ManageRosters from './pages/features/ManageRosters';
import ScheduleEvents from './pages/features/ScheduleEvents';

// Create theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3', // Light blue instead of purple
    },
    secondary: {
      main: '#ffd700', // WoW gold
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="App">
            <Navbar />
            <main style={{ minHeight: 'calc(100vh - 128px)', padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/find-players" element={<PlayerFinder />} />
                <Route path="/rosters" element={<RosterManager />} />
                <Route path="/rosters/:id" element={<RosterDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Feature Pages */}
                <Route path="/features/find-players" element={<FindPlayers />} />
                <Route path="/features/track-progress" element={<TrackProgress />} />
                <Route path="/features/manage-rosters" element={<ManageRosters />} />
                <Route path="/features/schedule-events" element={<ScheduleEvents />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
