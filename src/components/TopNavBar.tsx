import { NavLink, Link } from 'react-router-dom';

export default function TopNavBar() {
  const linkClasses = ({ isActive }: { isActive: boolean }) => 
    `text-sm font-bold font-headline transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`;

  return (
    <header className="bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-blue-900 dark:text-blue-100 hover:opacity-80 transition-opacity active:scale-95 duration-200">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link to="/feed" className="font-headline font-black text-xl text-blue-900 dark:text-blue-50">
            U&I Ride
          </Link>
          
          {/* Desktop Navigation Links - Shown alongside the brand */}
          <div className="hidden md:flex items-center gap-8 ml-8">
            <NavLink to="/feed" className={linkClasses}>Home</NavLink>
            <NavLink to="/post" className={linkClasses}>Post</NavLink>
            <NavLink to="/chat" className={linkClasses}>Chat</NavLink>
            <NavLink to="/profile" className={linkClasses}>Profile</NavLink>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/profile" className="w-8 h-8 rounded-full bg-primary-container overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all">
            <img className="w-full h-full object-cover" alt="Student Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6GGXVlk1ecjbXu9vkOzvuYMMMaDCwNv3Jx1jA5kzPyuS959-ZzBM6dA8p1XEowbIJ74HO8taQCcQYp1uOxqPR55rivM_qSusa6ndthqvfYk1JFLv2knDkC_XNFwQVibfxuIcNWZsw8t3UoI6JzOOqfIl6r5eqjpbDxzKrJ_5GRT396dtyvy5U462xUAfHrxuT4VtQ5tiIpooshxvJSQQ-Rc2mqPJLKG3VtuWMtJfV8vVZH5px2yedXP6xddCRkyZtxG-COftWEcva" />
          </Link>
        </div>
      </div>
    </header>
  );
}
