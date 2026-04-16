import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

export default function TopNavBar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">

          <Link to="/feed" className="font-headline font-black text-xl text-blue-900 dark:text-blue-50 lg:mr-4">
            U&I Ride
          </Link>
          
          <div className="hidden md:flex ml-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link to="/feed" />} className={navigationMenuTriggerStyle()} data-active={isActive('/feed') ? "" : undefined}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link to="/post" />} className={navigationMenuTriggerStyle()} data-active={isActive('/post') ? "" : undefined}>
                    Post
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link to="/chat" />} className={navigationMenuTriggerStyle()} data-active={isActive('/chat') ? "" : undefined}>
                    Chat
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-primary-container overflow-hidden">
            <img className="w-full h-full object-cover" alt="Student Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6GGXVlk1ecjbXu9vkOzvuYMMMaDCwNv3Jx1jA5kzPyuS959-ZzBM6dA8p1XEowbIJ74HO8taQCcQYp1uOxqPR55rivM_qSusa6ndthqvfYk1JFLv2knDkC_XNFwQVibfxuIcNWZsw8t3UoI6JzOOqfIl6r5eqjpbDxzKrJ_5GRT396dtyvy5U462xUAfHrxuT4VtQ5tiIpooshxvJSQQ-Rc2mqPJLKG3VtuWMtJfV8vVZH5px2yedXP6xddCRkyZtxG-COftWEcva" />
          </div>
        </div>
      </div>
    </header>
  );
}
