import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomeFeed from './pages/HomeFeed';
import PostRidePage from './pages/PostRidePage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import VerificationPage from './pages/VerificationPage';
import MainLayout from './layouts/MainLayout';
import { RequireAuth } from './components/RequireAuth';

import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-ride-theme">
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/verify" element={<VerificationPage />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route element={<MainLayout />}>
              <Route path="/feed" element={<HomeFeed />} />
              <Route path="/post" element={<PostRidePage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Route>
          
          {/* Redirect unknown routes back to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
