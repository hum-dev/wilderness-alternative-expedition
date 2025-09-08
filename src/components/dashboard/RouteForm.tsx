import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTripContext, Route } from '@/contexts/TripContext';
import { useToast } from '@/hooks/use-toast';

const routeSchema = z.object({
  name: z.string().min(1, 'Route name is required'),
  path: z.string().min(1, 'Route path is required'),
  duration: z.string().min(1, 'Duration is required'),
  difficulty: z.enum(['Easy', 'Easy-Moderate', 'Moderate', 'Challenging']),
  description: z.string().optional(),
  tripId: z.string().min(1, 'Please select a trip'),
});

type RouteFormData = z.infer<typeof routeSchema>;

interface RouteFormProps {
  tripId?: string;
  onClose: () => void;
  onSuccess: () => void;
}

const RouteForm: React.FC<RouteFormProps> = ({ tripId, onClose, onSuccess }) => {
  const { trips, addRouteToTrip } = useTripContext();
  const { toast } = useToast();

  const form = useForm<RouteFormData>({
    resolver: zodResolver(routeSchema),
    defaultValues: {
      name: '',
      path: '',
      duration: '',
      difficulty: 'Moderate',
      description: '',
      tripId: tripId || '',
    },
  });

  const onSubmit = (data: RouteFormData) => {
    const { tripId: selectedTripId, ...routeData } = data;
    
    const route: Route = {
      name: routeData.name,
      path: routeData.path,
      duration: routeData.duration,
      difficulty: routeData.difficulty,
      description: routeData.description,
    };

    addRouteToTrip(selectedTripId, route);

    toast({
      title: 'Success',
      description: 'Route added successfully',
    });

    onSuccess();
  };

  const generatePath = (tripId: string, routeName: string) => {
    const trip = trips.find(t => t.id === tripId);
    if (!trip) return '';
    
    const basePath = trip.category === 'Mountain' 
      ? `/${trip.title.toLowerCase().replace(/\s+/g, '-')}`
      : `/${trip.category.toLowerCase()}s`;
    
    const routePath = routeName.toLowerCase().replace(/\s+/g, '-');
    return `${basePath}/${routePath}`;
  };

  const watchedTripId = form.watch('tripId');
  const watchedRouteName = form.watch('name');

  React.useEffect(() => {
    if (watchedTripId && watchedRouteName) {
      const generatedPath = generatePath(watchedTripId, watchedRouteName);
      form.setValue('path', generatedPath);
    }
  }, [watchedTripId, watchedRouteName, form]);

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Route</DialogTitle>
          <DialogDescription>
            Add a new route to an existing trip.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="tripId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Trip</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a trip" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {trips.map(trip => (
                        <SelectItem key={trip.id} value={trip.id}>
                          {trip.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Route Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Machame Route" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="path"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Route Path</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="/kilimanjaro/machame" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input placeholder="6-7 Days" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="difficulty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Difficulty</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Easy">Easy</SelectItem>
                        <SelectItem value="Easy-Moderate">Easy-Moderate</SelectItem>
                        <SelectItem value="Moderate">Moderate</SelectItem>
                        <SelectItem value="Challenging">Challenging</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Additional details about this route..."
                      className="min-h-[60px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Add Route</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RouteForm;