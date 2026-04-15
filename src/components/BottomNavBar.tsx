import { NavLink } from 'react-router-dom';

export default function BottomNavBar() {
  const getLinkClasses = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = "flex flex-col items-center justify-center px-5 py-2 tap-highlight-transparent active:scale-90 transition-transform duration-200 mt-1";
    const activeClasses = "bg-[#d5e3ff] dark:bg-[#002e5d] text-[#001938] dark:text-[#d5e3ff] rounded-[1.5rem]";
    const inactiveClasses = "text-[#44474e] dark:text-[#c3c6d0] hover:bg-[#f4f3f6] dark:hover:bg-[#2e3033] rounded-full";
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getIconStyles = ({ isActive }: { isActive: boolean }) => ({
    fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"
  });

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#faf9fc]/70 dark:bg-[#1a1c1e]/70 backdrop-blur-xl z-50 rounded-t-[2rem] shadow-[0px_-4px_32px_rgba(26,28,30,0.06)] md:hidden">
      <NavLink to="/feed" className={getLinkClasses}>
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined" style={getIconStyles({ isActive })}>home</span>
            <span className="font-inter text-[11px] font-medium uppercase tracking-[0.05em] mt-1">Home</span>
          </>
        )}
      </NavLink>

      <NavLink to="/post" className={getLinkClasses}>
         {({ isActive }) => (
          <>
            <span className="material-symbols-outlined" style={getIconStyles({ isActive })}>add_circle</span>
            <span className="font-inter text-[11px] font-medium uppercase tracking-[0.05em] mt-1">Post</span>
          </>
        )}
      </NavLink>

      <NavLink to="/chat" className={getLinkClasses}>
         {({ isActive }) => (
          <>
            <span className="material-symbols-outlined" style={getIconStyles({ isActive })}>chat_bubble</span>
            <span className="font-inter text-[11px] font-medium uppercase tracking-[0.05em] mt-1">Chat</span>
          </>
        )}
      </NavLink>

      <NavLink to="/profile" className={getLinkClasses}>
         {({ isActive }) => (
          <>
            <span className="material-symbols-outlined" style={getIconStyles({ isActive })}>person</span>
            <span className="font-inter text-[11px] font-medium uppercase tracking-[0.05em] mt-1">Profile</span>
          </>
        )}
      </NavLink>
    </nav>
  );
}
