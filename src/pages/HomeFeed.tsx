import { useState, useMemo } from 'react';
import type { Ride } from '@/types/Ride';
import FeaturedRideCard from '@/components/FeaturedRideCard';
import StandardRideCard from '@/components/StandardRideCard';

const MOCK_RIDES: Ride[] = [
  {
    id: "r1",
    driverName: "Jordan Wells",
    driverAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ3qafBfFkUbKlDPQz--ehiYdlcaSra-d1ZQiHyidLzGk5E6fBIFXdoHcC0PdueLPjKE-58L_y2_pD4YTiMoyfHktPLf39-yPOsfClkxaXneNAbFj0EjAlU6w0Wb65VzuvQ2YBbi284bK2Vq0m3z_9R_AsCk9jWFgA1-PLqRsBRVis94GcuPiuC8T73V1T16HkIRTFqU6bl68QVi8x1KZhExbYW6tnZyCX3S-tXEX-fnzjmTTduYyHQg6P_0QXU0DDlmey1pxF5hRa",
    vehicle: "Toyota Prius",
    rating: 4.9,
    isVerified: true,
    price: 12,
    departureTime: "10:30 AM",
    departureLocation: "Main Campus Library",
    arrivalTime: "11:15 AM",
    arrivalLocation: "Downtown Commons",
    seatsOpen: 2,
    totalSeats: 4,
    featured: true
  },
  {
    id: "r2",
    driverName: "Elena Ruiz",
    driverAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD72V2uWTNuVCQzq1xcHyBsbqh5e5rzRoU_wGzJRX3RNQW30TYLHBaI2W7urczTb0wqX1PxA55S9hCQDIPXxag0NQAMVUmtFZz1LDT2-ugPcROfWe_58_NUX_hIxATTXQEVZK2jQ7of54mwtuqWmMdgxl3hDqjJLEW65bdDT3k9lRfvqRm1SDKupKFUox9Xnq1C6ZdmjJb-LAoUQXQnNqy3ECtxBDUAVHJqfSIQuCeUIDJRaHkb0wo_LZgReY3T-nzXt1uj4PWcCahA",
    vehicle: "Tesla Model 3",
    rating: 5.0,
    isVerified: false,
    price: 8,
    departureTime: "01:45 PM",
    departureLocation: "Engineering Bldg",
    arrivalTime: "02:30 PM",
    arrivalLocation: "North Gate Mall",
    seatsOpen: 3,
    totalSeats: 4
  },
  {
    id: "r3",
    driverName: "Marcus Chen",
    driverAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiWxqIPSCKLaSgYHq53FwpOmriFcyrFkc8SrZaVZt7JhVwMiU9HmXjadsENclIVS8VUhqk0vWQ6Xh-VjDaKq7rGpebn5laDlJtgNLVMucqAwDn9bkUfJUtWTW7aj0CR0UMRnJ2BuwYfD6sqqFycuTxtgZ3I_2OVkNXTO7fc2fFztXoG_kA5A1t1kuAveizd2aEHwZi-WFBJW1EyQ5GsQUkdZ2Qx2Uf3FI_HCeLr9FUC9c-wo70emaQHw-89_RUMqnlytBtGTYxH-fM",
    vehicle: "Honda Civic",
    rating: 4.8,
    isVerified: true,
    price: 15,
    departureTime: "04:00 PM",
    departureLocation: "Student Union",
    arrivalTime: "06:30 PM",
    arrivalLocation: "Airport Terminal 2",
    seatsOpen: 1,
    totalSeats: 3
  }
];

export default function HomeFeed() {
  const [startQuery, setStartQuery] = useState('');
  const [destQuery, setDestQuery] = useState('');

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter logic
  const filteredRides = useMemo(() => {
    return MOCK_RIDES.filter(ride => {
      const matchStart = ride.departureLocation.toLowerCase().includes(startQuery.toLowerCase());
      const matchDest = ride.arrivalLocation.toLowerCase().includes(destQuery.toLowerCase());
      
      let passFilter = true;
      if (activeFilter === 'price') {
        passFilter = ride.price <= 10;
      } else if (activeFilter === 'seats') {
        passFilter = ride.seatsOpen > 1;
      }
      
      return matchStart && matchDest && passFilter;
    });
  }, [startQuery, destQuery, activeFilter]);

  const toggleFilter = (filter: string) => {
    if (activeFilter === filter) setActiveFilter(null);
    else setActiveFilter(filter);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-24 px-6 max-w-7xl mx-auto pb-32 flex-1 w-full">
        {/* Hero Section / Search */}
        <section className="mb-12 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 lg:p-12 text-on-primary">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[15rem] translate-x-20 translate-y-10">
              directions_car
            </span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight mb-6">
              Where to?
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container">
                  near_me
                </span>
                <input
                  value={startQuery}
                  onChange={(e) => setStartQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-on-primary placeholder:text-on-primary-container focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
                  placeholder="Starting point"
                  type="text"
                />
              </div>
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container">
                  location_on
                </span>
                <input
                  value={destQuery}
                  onChange={(e) => setDestQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-on-primary placeholder:text-on-primary-container focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
                  placeholder="Your destination"
                  type="text"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 overflow-x-auto pb-2">
          <button 
            onClick={() => toggleFilter('price')}
            className={`px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors ${activeFilter === 'price' ? 'bg-primary-fixed text-on-primary-fixed shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
          >
            <span className="material-symbols-outlined text-sm">attach_money</span> Budget (≤$10)
          </button>
          <button 
            onClick={() => toggleFilter('seats')}
            className={`px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors ${activeFilter === 'seats' ? 'bg-primary-fixed text-on-primary-fixed shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
          >
            <span className="material-symbols-outlined text-sm">groups</span> 2+ Seats
          </button>
        </div>

        {/* Available Rides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {filteredRides.length === 0 && (
            <div className="md:col-span-2 lg:col-span-3 text-center py-12 opacity-70">
              <span className="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
              <h3 className="font-headline font-bold text-2xl text-on-surface">No rides found</h3>
              <p className="text-on-surface-variant">Try adjusting your starting point, destination, or filters!</p>
            </div>
          )}

          {filteredRides.map(ride => {
            if (ride.featured) {
              return <FeaturedRideCard key={ride.id} ride={ride} />;
            }
            return <StandardRideCard key={ride.id} ride={ride} />;
          })}

          {/* Post Ride Suggestion Card */}
          <div className="lg:col-span-1 border-2 border-dashed border-outline-variant bg-surface-container-low/50 rounded-lg p-6 flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 hover:bg-surface-container-low transition-all cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">add_circle</span>
            </div>
            <h3 className="font-bold text-primary">Can't find your route?</h3>
            <p className="text-xs text-on-surface-variant mt-1">
              Add a new request and drivers will be notified.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
