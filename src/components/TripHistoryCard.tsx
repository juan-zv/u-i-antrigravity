export type Trip = {
  id: string;
  date: string;
  time: string;
  departureLocation: string;
  arrivalLocation: string;
  driverName: string;
  driverAvatar: string;
  rating: string;
  price: string;
};

export default function TripHistoryCard({ trip }: { trip: Trip }) {
  return (
    <div className="bg-surface-container-low hover:bg-surface-container transition-all p-6 rounded-lg flex flex-col md:flex-row items-center gap-6 group">
      <div className="flex-none w-full md:w-32 text-center md:text-left">
        <span className="block font-label text-[0.6875rem] text-secondary font-bold tracking-widest uppercase">
          {trip.date}
        </span>
        <span className="block font-headline text-lg font-bold text-on-surface">
          {trip.time}
        </span>
      </div>
      <div className="flex-grow w-full">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-secondary"></span>
          <span className="font-body font-semibold text-on-surface">
            {trip.departureLocation}
          </span>
        </div>
        <div className="h-6 ml-[4.5px] border-l-2 border-dashed border-outline-variant my-1"></div>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary text-sm">
            location_on
          </span>
          <span className="font-body font-semibold text-on-surface">
            {trip.arrivalLocation}
          </span>
        </div>
      </div>
      <div className="flex-none flex items-center gap-4 w-full md:w-auto pt-4 md:pt-0 border-t border-outline-variant/10 md:border-0">
        <div className="flex items-center gap-3 pr-4 border-r border-outline-variant/30">
          <img
            className="w-10 h-10 rounded-full object-cover"
            alt={`driver ${trip.driverName}`}
            src={trip.driverAvatar}
          />
          <div>
            <span className="text-xs text-on-surface-variant block">Driver</span>
            <span className="text-sm font-bold">{trip.driverName}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end text-tertiary-container gap-0.5 mb-1">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-sm font-bold">{trip.rating}</span>
          </div>
          <span className="font-headline text-lg font-extrabold text-primary">
            ${trip.price}
          </span>
        </div>
      </div>
    </div>
  );
}
