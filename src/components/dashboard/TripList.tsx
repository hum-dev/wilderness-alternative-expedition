import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Plus, Mountain, Binoculars, Map } from 'lucide-react';
import { useTripContext } from '@/contexts/TripContext';
import { useToast } from '@/hooks/use-toast';

interface TripListProps {
  onAddRoute: (tripId: string) => void;
}

const TripList: React.FC<TripListProps> = ({ onAddRoute }) => {
  const { trips, deleteTrip } = useTripContext();
  const { toast } = useToast();

  const handleDeleteTrip = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      deleteTrip(id);
      toast({
        title: 'Trip Deleted',
        description: `${title} has been removed successfully.`,
      });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mountain':
        return <Mountain className="h-4 w-4" />;
      case 'Safari':
        return <Binoculars className="h-4 w-4" />;
      default:
        return <Map className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Easy')) {
      return 'bg-emerald-500/10 text-emerald-600 border-emerald-200';
    } else if (difficulty.includes('Moderate')) {
      return 'bg-orange-500/10 text-orange-600 border-orange-200';
    } else if (difficulty.includes('Challenging')) {
      return 'bg-red-500/10 text-red-600 border-red-200';
    }
    return 'bg-gray-500/10 text-gray-600 border-gray-200';
  };

  if (trips.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Map className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No trips yet</h3>
          <p className="text-muted-foreground mb-4">
            Get started by creating your first expedition offering.
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Trip
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {trips.map((trip) => (
        <Card key={trip.id} className="overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center space-x-2 mb-1">
                {getCategoryIcon(trip.category)}
                <Badge variant="secondary" className="text-xs">
                  {trip.category}
                </Badge>
              </div>
              <h3 className="text-xl font-bold">{trip.title}</h3>
              <p className="text-sm text-white/90">{trip.subtitle}</p>
            </div>
          </div>
          
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <span className="text-lg">{trip.title}</span>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleDeleteTrip(trip.id, trip.title)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {trip.description}
            </p>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Duration: {trip.duration}</span>
              <Badge variant="outline" className={getDifficultyColor(trip.difficulty)}>
                {trip.difficulty}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium">Highlights:</div>
              <div className="flex flex-wrap gap-1">
                {trip.highlights.slice(0, 3).map((highlight, index) => (
                  <span
                    key={index}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
                {trip.highlights.length > 3 && (
                  <span className="text-xs text-muted-foreground px-2 py-1">
                    +{trip.highlights.length - 3} more
                  </span>
                )}
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Routes ({trip.routes.length})
                </span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onAddRoute(trip.id)}
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add Route
                </Button>
              </div>
              
              {trip.routes.length > 0 ? (
                <div className="space-y-1 max-h-20 overflow-y-auto">
                  {trip.routes.map((route, index) => (
                    <div 
                      key={index} 
                      className="text-xs text-muted-foreground flex justify-between"
                    >
                      <span>{route.name}</span>
                      <span>{route.duration}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground italic">
                  No routes added yet
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TripList;