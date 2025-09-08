import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Mountain, Binoculars, Map, LogOut } from 'lucide-react';
import { useTripContext } from '@/contexts/TripContext';
import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import TripForm from '@/components/dashboard/TripForm';
import RouteForm from '@/components/dashboard/RouteForm';
import TripList from '@/components/dashboard/TripList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const { trips } = useTripContext();
  const { user, signOut } = useAuth();
  const [showTripForm, setShowTripForm] = useState(false);
  const [showRouteForm, setShowRouteForm] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState<string>('');

  const handleAddRoute = (tripId: string) => {
    setSelectedTripId(tripId);
    setShowRouteForm(true);
  };

  const totalRoutes = trips.reduce((sum, trip) => sum + trip.routes.length, 0);
  const mountainTrips = trips.filter(trip => trip.category === 'Mountain').length;
  const safariTrips = trips.filter(trip => trip.category === 'Safari').length;

  return (
    <ProtectedRoute requireAdmin>
      <div className="min-h-screen">
        <Header />
        
        <main className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground">Welcome, {user?.email}. Manage your trips, routes, and expedition content</p>
              </div>
              <Button variant="outline" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
                <Map className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{trips.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Routes</CardTitle>
                <Mountain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalRoutes}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mountain Expeditions</CardTitle>
                <Mountain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mountainTrips}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Safari Expeditions</CardTitle>
                <Binoculars className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{safariTrips}</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="trips" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="trips">Manage Trips</TabsTrigger>
              <TabsTrigger value="routes">Manage Routes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="trips" className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Trips</h2>
                  <p className="text-muted-foreground">Create and manage your expedition offerings</p>
                </div>
                <Button onClick={() => setShowTripForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Trip
                </Button>
              </div>
              
              <TripList onAddRoute={handleAddRoute} />
            </TabsContent>
            
            <TabsContent value="routes" className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Routes</h2>
                  <p className="text-muted-foreground">Add routes to existing trips</p>
                </div>
                <Button 
                  onClick={() => setShowRouteForm(true)}
                  disabled={trips.length === 0}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Route
                </Button>
              </div>
              
              {trips.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No trips available. Create a trip first to add routes.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {trips.map(trip => (
                    <Card key={trip.id}>
                      <CardHeader>
                        <CardTitle>{trip.title}</CardTitle>
                        <CardDescription>
                          {trip.routes.length} route{trip.routes.length !== 1 ? 's' : ''} available
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {trip.routes.map(route => (
                            <div key={route.name} className="p-4 border rounded-lg">
                              <h4 className="font-medium">{route.name}</h4>
                              <p className="text-sm text-muted-foreground">{route.duration} • {route.difficulty}</p>
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => handleAddRoute(trip.id)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Route
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />

      {/* Modals */}
      {showTripForm && (
        <TripForm 
          onClose={() => setShowTripForm(false)}
          onSuccess={() => setShowTripForm(false)}
        />
      )}
      
      {showRouteForm && (
        <RouteForm 
          tripId={selectedTripId}
          onClose={() => {
            setShowRouteForm(false);
            setSelectedTripId('');
          }}
          onSuccess={() => {
            setShowRouteForm(false);
            setSelectedTripId('');
          }}
        />
      )}
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;