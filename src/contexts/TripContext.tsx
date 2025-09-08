import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Route {
  name: string;
  path: string;
  duration: string;
  difficulty: 'Easy' | 'Easy-Moderate' | 'Moderate' | 'Challenging';
  description?: string;
}

export interface Trip {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  duration: string;
  difficulty: string;
  category: 'Mountain' | 'Safari' | 'Other';
  routes: Route[];
}

interface TripContextType {
  trips: Trip[];
  addTrip: (trip: Omit<Trip, 'id'>) => void;
  updateTrip: (id: string, trip: Partial<Trip>) => void;
  deleteTrip: (id: string) => void;
  addRouteToTrip: (tripId: string, route: Route) => void;
  removeRouteFromTrip: (tripId: string, routeName: string) => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within a TripProvider');
  }
  return context;
};

export const TripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  // Load initial data and saved data from localStorage
  useEffect(() => {
    const savedTrips = localStorage.getItem('dashboard-trips');
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    } else {
      // Initialize with existing data structure
      const initialTrips: Trip[] = [
        {
          id: 'mt-kenya',
          title: 'Mount Kenya',
          subtitle: "Africa's Second Highest Peak",
          description: "Challenge yourself on Kenya's most iconic mountain with diverse routes through alpine landscapes and unique wildlife encounters.",
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
          highlights: ["Point Lenana (4,985m)", "5 Different Routes", "Alpine Wildlife"],
          duration: "4-6 Days",
          difficulty: "Moderate to Challenging",
          category: 'Mountain',
          routes: [
            { name: "Sirimon Route", path: "/mt-kenya/sirimon", duration: "4-5 Days", difficulty: "Moderate" },
            { name: "Naro Moru Route", path: "/mt-kenya/naro-moru", duration: "3-4 Days", difficulty: "Moderate" },
            { name: "Chogoria Route", path: "/mt-kenya/chogoria", duration: "5-6 Days", difficulty: "Moderate" },
            { name: "Chogoria Down", path: "/mt-kenya/chogoria-down", duration: "4-5 Days", difficulty: "Moderate" },
            { name: "Burguret Route", path: "/mt-kenya/burguret", duration: "4-5 Days", difficulty: "Challenging" },
            { name: "Kamweti Route", path: "/mt-kenya/kamweti", duration: "4-5 Days", difficulty: "Moderate" },
            { name: "Timau Route", path: "/mt-kenya/timau", duration: "4-5 Days", difficulty: "Moderate" }
          ]
        },
        {
          id: 'kilimanjaro',
          title: 'Mount Kilimanjaro',
          subtitle: "Roof of Africa",
          description: "Conquer Africa's highest peak through stunning climate zones from rainforest to arctic conditions at the summit.",
          image: "/src/assets/kilimanjaro-trek.jpg",
          highlights: ["Uhuru Peak (5,895m)", "7 Different Routes", "No Technical Climbing"],
          duration: "5-9 Days",
          difficulty: "Moderate",
          category: 'Mountain',
          routes: [
            { name: "Lemosho Route", path: "/kilimanjaro/lemosho", duration: "7-8 Days", difficulty: "Moderate" },
            { name: "Machame Route", path: "/kilimanjaro/machame", duration: "6-7 Days", difficulty: "Moderate" },
            { name: "Marangu Route", path: "/kilimanjaro/marangu", duration: "5-6 Days", difficulty: "Easy-Moderate" },
            { name: "Rongai Route", path: "/kilimanjaro/rongai", duration: "6-7 Days", difficulty: "Moderate" },
            { name: "Northern Circuit", path: "/kilimanjaro/northern-circuit", duration: "8-9 Days", difficulty: "Moderate" }
          ]
        },
        {
          id: 'safaris',
          title: 'Wildlife Safaris',
          subtitle: "Big Five Adventures",
          description: "Experience Kenya's world-renowned wildlife in their natural habitat across multiple national parks and conservancies.",
          image: "/src/assets/safari-wildlife.jpg",
          highlights: ["Big Five Sightings", "Great Migration", "Cultural Experiences"],
          duration: "3-14 Days",
          difficulty: "Easy",
          category: 'Safari',
          routes: [
            { name: "Maasai Mara", path: "/safaris/maasai-mara", duration: "3-7 Days", difficulty: "Easy" },
            { name: "Samburu National Reserve", path: "/safaris/samburu", duration: "2-4 Days", difficulty: "Easy" },
            { name: "Meru National Park", path: "/safaris/meru", duration: "2-3 Days", difficulty: "Easy" },
            { name: "Amboseli National Park", path: "/safaris/amboseli", duration: "2-4 Days", difficulty: "Easy" },
            { name: "Ol Pejeta Conservancy", path: "/safaris/ol-pejeta", duration: "2-3 Days", difficulty: "Easy" },
            { name: "Nairobi National Park", path: "/safaris/nairobi-park", duration: "1 Day", difficulty: "Easy" }
          ]
        }
      ];
      setTrips(initialTrips);
    }
  }, []);

  // Save to localStorage whenever trips change
  useEffect(() => {
    localStorage.setItem('dashboard-trips', JSON.stringify(trips));
  }, [trips]);

  const addTrip = (trip: Omit<Trip, 'id'>) => {
    const newTrip: Trip = {
      ...trip,
      id: Date.now().toString(),
    };
    setTrips(prev => [...prev, newTrip]);
  };

  const updateTrip = (id: string, updatedTrip: Partial<Trip>) => {
    setTrips(prev => prev.map(trip => 
      trip.id === id ? { ...trip, ...updatedTrip } : trip
    ));
  };

  const deleteTrip = (id: string) => {
    setTrips(prev => prev.filter(trip => trip.id !== id));
  };

  const addRouteToTrip = (tripId: string, route: Route) => {
    setTrips(prev => prev.map(trip => 
      trip.id === tripId 
        ? { ...trip, routes: [...trip.routes, route] }
        : trip
    ));
  };

  const removeRouteFromTrip = (tripId: string, routeName: string) => {
    setTrips(prev => prev.map(trip => 
      trip.id === tripId 
        ? { ...trip, routes: trip.routes.filter(route => route.name !== routeName) }
        : trip
    ));
  };

  return (
    <TripContext.Provider value={{
      trips,
      addTrip,
      updateTrip,
      deleteTrip,
      addRouteToTrip,
      removeRouteFromTrip
    }}>
      {children}
    </TripContext.Provider>
  );
};