import type { Ride } from '@/types/Ride';

export default function FeaturedRideCard({ ride }: { ride: Ride }) {
  return (
    <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          <img
            className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary-container ring-offset-2"
            alt={`Profile picture of ${ride.driverName}`}
            src={ride.driverAvatar}
          />
          <div>
            <h3 className="font-bold text-lg">{ride.driverName}</h3>
            <div className="flex items-center gap-2">
              {ride.isVerified && (
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Verified Driver
                </span>
              )}
              <span className="text-xs text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>{" "}
                {ride.rating}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-3xl font-headline font-black text-primary">${ride.price}</span>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Per Seat</p>
        </div>
      </div>

      <div className="flex items-center gap-8 mb-8">
        <div className="flex-1">
          <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Departure</p>
          <p className="font-headline font-bold text-xl">{ride.departureTime}</p>
          <p className="text-sm text-on-surface-variant">{ride.departureLocation}</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-secondary animate-pulse">
            keyboard_double_arrow_right
          </span>
        </div>
        <div className="flex-1 text-right">
          <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Arrival</p>
          <p className="font-headline font-bold text-xl">{ride.arrivalTime}</p>
          <p className="text-sm text-on-surface-variant">{ride.arrivalLocation}</p>
        </div>
      </div>

      <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {Array.from({ length: Math.min(ride.totalSeats - ride.seatsOpen, 3) }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-slate-300"></div>
            ))}
            {ride.seatsOpen > 0 && (
              <div className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-secondary-container flex items-center justify-center text-[10px] font-bold">
                +{ride.seatsOpen}
              </div>
            )}
          </div>
          <span className="text-sm font-medium text-on-surface-variant">{ride.seatsOpen} seat{ride.seatsOpen !== 1 && 's'} left</span>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity active:scale-95">
          Book Now
        </button>
      </div>
    </div>
  );
}
