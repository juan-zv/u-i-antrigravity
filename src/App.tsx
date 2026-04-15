import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomeFeed from './pages/HomeFeed';
import PostRidePage from './pages/PostRidePage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import AuthPage from './pages/AuthPage';
import VerificationPage from './pages/VerificationPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page is separate and does not have the Bottom Nav Bar */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/verify" element={<VerificationPage />} />

        {/* These routes will use the MainLayout and include the Bottom Nav Bar */}
        <Route element={<MainLayout />}>
          <Route path="/feed" element={<HomeFeed />} />
          <Route path="/post" element={<PostRidePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        
        {/* Redirect unknown routes back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
