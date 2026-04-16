import { useTheme } from '../components/theme-provider';
import TripHistoryCard from '../components/TripHistoryCard';
import type { Trip } from '../components/TripHistoryCard';

const MOCK_TRIPS: Trip[] = [
  {
    id: "t1",
    date: "Oct 24",
    time: "08:45 AM",
    departureLocation: "North Gate Parking",
    arrivalLocation: "Wilkinson Student Union",
    driverName: "Marcus Chen",
    driverAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDieD7zGP5SuYly-ZM1JTFhhj2O4xXYab8WT5BjjVPhxpmZgrAyMfzb_ks5TCPSj9B2aOVlxOSgcxDIl5Bvk5IgyfvoakIkrPi9EKgAhq9bYeqmwMIUEq1MuGzb0ikFYxA4TA6Gn8G-QmitNb_AAYtGZkyDmQs3szcWaPbl72e5uoVnggDNDo9b2S6fOcToEfksgPx1Fk8pejF7RWIlAQYunOIvlhu_xi-TQWuJioo9eROgiAtoizuS2pG1OUWZiE4bTIDy2J_tfX-s",
    rating: "4.9",
    price: "4.50"
  },
  {
    id: "t2",
    date: "Oct 22",
    time: "02:15 PM",
    departureLocation: "Marriott Center",
    arrivalLocation: "Library Quad",
    driverName: "Sarah Jenkins",
    driverAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuZPrA_mPRZPME_1u6Tj0dAq9zSq6ZbaosweNyFFGpc56x-MKFqeqtw7UCNxO8Ki32LSm4cl8HcHdwA13Kf0Uc9fvc7Vi182DgbwzJzIvapJAFBAjQ8PJJrEODaUG6W_mL99ZQgoS5JZ7UNTUWQsZFhyh8X77G2Pk0PMLRdxEgoipE2tZIa1ucN11bQYFchGWNyhmf6ukDc2T93sHsCzVQcCWvBayZHule1U3ieN9E9qfpdxyTVPJqwFXQA8SmydUcnz237-BqcvGF",
    rating: "5.0",
    price: "3.75"
  },
  {
    id: "t3",
    date: "Oct 20",
    time: "06:50 PM",
    departureLocation: "Heritage Halls",
    arrivalLocation: "Law School",
    driverName: "David Miller",
    driverAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx_YRW3QfFdmWp6p5EK_MjMkj-7XebK_AeH_vG-wAdIbRkEcenXNObCZahfT-x3xhL7tECfmD3S3NDj2h0LZcjOSrXfbmV3tTA4iN_eu3StdEuEZShHK798ZCYyZVvQ33LZwicl4cY7jPFAEgnGx7rK0Fnvwp_n2lQmqJsOB-e1wUsDimle9-gQNeWqF9Frtknn1SZam90lNDg1qoIM6UGB9M5K4KoNpKhQ-hNQOgNm3Clw3i39HOGDFt52J9K3DnqROLXeNH8rge2",
    rating: "4.8",
    price: "5.20"
  }
];

export default function ProfilePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">

      <main className="pt-24 px-6 max-w-screen-xl mx-auto flex-1 w-full pb-32">
        {/* Profile Hero Section: Scholarly Luminary Style */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <span className="font-label text-[0.6875rem] font-bold tracking-[0.05em] text-secondary uppercase mb-2 block">
                Student Account
              </span>
              <h2 className="font-headline text-5xl font-extrabold tracking-tight text-primary leading-tight">
                James Sterling
              </h2>
              <p className="font-body text-on-surface-variant text-lg mt-2 flex items-center gap-2">
                Academic Traveler <span className="w-1 h-1 rounded-full bg-outline"></span> Senior Researcher
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="bg-primary-container text-on-primary-fixed-variant px-6 py-4 rounded-lg flex flex-col items-center">
                <span className="font-label text-[0.625rem] tracking-widest uppercase opacity-70">
                  U&I Miles
                </span>
                <span className="font-headline text-3xl font-bold text-primary-fixed">
                  12,450
                </span>
              </div>
            </div>
          </div>

          {/* Bento Status Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="col-span-2 bg-primary text-on-primary p-6 rounded-lg relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-primary-fixed text-sm font-medium mb-1 block">
                  Tier Status
                </span>
                <h3 className="text-2xl font-bold font-headline">Cum Laude Elite</h3>
                <p className="text-sm opacity-80 mt-4 max-w-[180px]">
                  Enjoy priority matching and scholarly lounge access.
                </p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                school
              </span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg flex flex-col justify-between">
              <span className="material-symbols-outlined text-secondary text-3xl">
                verified_user
              </span>
              <div>
                <span className="text-on-surface-variant text-xs font-semibold block">
                  Verified
                </span>
                <span className="text-on-surface font-bold">BYU Student</span>
              </div>
            </div>
            <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-lg flex flex-col justify-between">
              <span className="material-symbols-outlined text-on-tertiary-container text-3xl">
                local_fire_department
              </span>
              <div>
                <span className="text-xs font-semibold block">Streak</span>
                <span className="font-bold">14 Successful Rides</span>
              </div>
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="mt-16">
          <div className="mb-6">
            <h3 className="font-headline text-3xl font-bold text-primary tracking-tight">
              Preferences
            </h3>
            <p className="font-body text-on-surface-variant mt-1">
              Customize your app experience.
            </p>
          </div>
          
          <div className="bg-surface-container-low p-6 rounded-lg flex items-center justify-between group hover:bg-surface-container transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">
                  {theme === 'dark' ? 'dark_mode' : theme === 'light' ? 'light_mode' : 'brightness_auto'}
                </span>
              </div>
              <div>
                <span className="block font-bold text-on-surface">App Theme</span>
                <span className="block text-sm text-on-surface-variant">Switch between light, dark, or system mode.</span>
              </div>
            </div>
            <div className="flex bg-surface-container-high rounded-full p-1 border border-outline-variant/20">
              <button 
                onClick={() => setTheme('light')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${theme === 'light' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Light
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${theme === 'dark' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Dark
              </button>
              <button 
                onClick={() => setTheme('system')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${theme === 'system' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                System
              </button>
            </div>
          </div>
        </section>

        {/* Trip History Section */}
        <section className="mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h3 className="font-headline text-3xl font-bold text-primary tracking-tight">
                Trip History
              </h3>
              <p className="font-body text-on-surface-variant mt-1">
                Review your scholarly journeys across campus.
              </p>
            </div>
            {/* Filter Tabs */}
            <div className="bg-surface-container-high p-1.5 rounded-full flex gap-1">
              <button className="px-6 py-2 rounded-full text-sm font-semibold bg-surface-container-lowest text-primary shadow-sm">
                This Month
              </button>
              <button className="px-6 py-2 rounded-full text-sm font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
                All Time
              </button>
            </div>
          </div>

          {/* Trip List: No-Line Tonal Layering */}
          <div className="space-y-4">
            {MOCK_TRIPS.map(trip => (
              <TripHistoryCard key={trip.id} trip={trip} />
            ))}
          </div>

          <button className="mt-8 w-full py-4 rounded-lg bg-surface-container text-primary font-bold hover:bg-surface-container-high transition-colors">
            View More History
          </button>
        </section>

        {/* Logout Section */}
        <section className="mt-12 flex justify-center">
          <button 
            onClick={async () => {
              const { supabase } = await import('../supabase');
              await supabase.auth.signOut();
              window.location.href = '/auth'; 
            }}
            className="flex items-center gap-2 px-6 py-3 text-error bg-error-container/20 rounded-full hover:bg-error-container/40 transition-colors font-bold"
          >
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </section>
      </main>
    </div>
  );
}
