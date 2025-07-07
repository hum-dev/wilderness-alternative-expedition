import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import MtKenya from "./pages/MtKenya";
import Kilimanjaro from "./pages/Kilimanjaro";
import Sirimon from "./pages/routes/Sirimon";
import NaroMoru from "./pages/routes/NaroMoru";
import Chogoria from "./pages/routes/Chogoria";
import ChogoriaDown from "./pages/routes/ChogoriaDown";
import Burguret from "./pages/routes/Burguret";
import Kamweti from "./pages/routes/Kamweti";
import Timau from "./pages/routes/Timau";
import Lemosho from "./pages/routes/Lemosho";
import Machame from "./pages/routes/Machame";
import Marangu from "./pages/routes/Marangu";
import Rongai from "./pages/routes/Rongai";
import NorthernCircuit from "./pages/routes/NorthernCircuit";
import Safaris from "./pages/Safaris";
import MaasaiMara from "./pages/safaris/MaasaiMara";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Expeditions from "./pages/Expeditions";
import Samburu from "./pages/safaris/Samburu";
import Meru from "./pages/safaris/Meru";
import Amboseli from "./pages/safaris/Amboseli";
import OlPejeta from "./pages/safaris/OlPejeta";
import NairobiPark from "./pages/safaris/NairobiPark";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/mt-kenya" element={<MtKenya />} />
            <Route path="/mt-kenya/sirimon" element={<Sirimon />} />
            <Route path="/mt-kenya/naro-moru" element={<NaroMoru />} />
            <Route path="/mt-kenya/chogoria" element={<Chogoria />} />
            <Route path="/mt-kenya/chogoria-down" element={<ChogoriaDown />} />
            <Route path="/mt-kenya/burguret" element={<Burguret />} />
            <Route path="/mt-kenya/kamweti" element={<Kamweti />} />
            <Route path="/mt-kenya/timau" element={<Timau />} />
            <Route path="/kilimanjaro" element={<Kilimanjaro />} />
            <Route path="/kilimanjaro/lemosho" element={<Lemosho />} />
            <Route path="/kilimanjaro/machame" element={<Machame />} />
            <Route path="/kilimanjaro/marangu" element={<Marangu />} />
            <Route path="/kilimanjaro/rongai" element={<Rongai />} />
            <Route path="/kilimanjaro/northern-circuit" element={<NorthernCircuit />} />
            <Route path="/safaris" element={<Safaris />} />
            <Route path="/safaris/maasai-mara" element={<MaasaiMara />} />
            <Route path="/safaris/samburu" element={<Samburu />} />
            <Route path="/safaris/meru" element={<Meru />} />
            <Route path="/safaris/amboseli" element={<Amboseli />} />
            <Route path="/safaris/ol-pejeta" element={<OlPejeta />} />
            <Route path="/safaris/nairobi-park" element={<NairobiPark />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/expeditions" element={<Expeditions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
