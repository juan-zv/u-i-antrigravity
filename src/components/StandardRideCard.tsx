import type { Ride } from '@/types/Ride';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function StandardRideCard({ ride }: { ride: Ride }) {
  // Extract driver initials for the Avatar Fallback
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border-none bg-surface-container-lowest">
      <CardHeader className="p-6 pb-0 mb-6 flex-row justify-between items-start space-y-0">
        <div className="flex gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src={ride.driverAvatar} alt={`Profile avatar of ${ride.driverName}`} />
            <AvatarFallback>{getInitials(ride.driverName)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="font-bold leading-none mb-1">{ride.driverName}</h3>
            <p className="text-xs text-on-surface-variant font-medium">{ride.vehicle}</p>
          </div>
        </div>
        <span className="text-xl font-headline font-black text-primary">${ride.price}</span>
      </CardHeader>

      <CardContent className="p-6 pt-0 space-y-4">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-secondary-container text-lg leading-none">circle</span>
          <div className="flex flex-col">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">{ride.departureTime}</p>
            <p className="text-sm font-medium">{ride.departureLocation}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 border-l-2 border-dashed border-outline-variant ml-2 pl-4 py-2 relative">
          <span className="material-symbols-outlined text-primary text-lg leading-none absolute -left-[11px] bg-surface-container-lowest">location_on</span>
          <div className="flex flex-col">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">{ride.arrivalTime}</p>
            <p className="text-sm font-medium">{ride.arrivalLocation}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex justify-between items-center mt-auto">
        <Badge variant={ride.seatsOpen === 1 ? 'destructive' : 'secondary'} className={ride.seatsOpen !== 1 ? 'bg-tertiary-fixed text-on-tertiary-container hover:bg-tertiary-fixed' : ''}>
          {ride.seatsOpen === 1 ? 'Last seat!' : `${ride.seatsOpen} seats open`}
        </Badge>
        <Button variant="ghost" className="text-primary font-bold hover:bg-primary/10">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
