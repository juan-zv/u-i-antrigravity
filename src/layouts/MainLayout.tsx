import { Outlet } from 'react-router-dom';
import BottomNavBar from '../components/BottomNavBar';
import TopNavBar from '../components/TopNavBar';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar />
      <Outlet />
      <BottomNavBar />
    </div>
  );
}
