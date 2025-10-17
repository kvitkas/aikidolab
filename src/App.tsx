/**
 * Main Application Component
 *
 * This is the root component of the Aikido Labs application.
 * It sets up the routing, global providers, and handles scroll behavior.
 *
 * Features:
 * - React Router for client-side routing
 * - React Query for data fetching and caching
 * - Toast notifications with dual providers
 * - Tooltip functionality
 * - Automatic scroll to top on route changes
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Page imports
import Index from "./pages/Index";
import WhatWeDo from "./pages/WhatWeDo";
import Research from "./pages/Research";
import Booking from "./pages/Booking";
import Policy from "./pages/Policy";
import Tos from "./pages/Tos";
import NotFound from "./pages/NotFound";

// Initialize React Query client with optimized defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

/**
 * ScrollToTop Component
 *
 * Automatically scrolls to the top of the page when the route changes.
 * This ensures a consistent user experience across page navigation.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/**
 * Main App Component
 *
 * Sets up the application with all necessary providers and routing.
 * The routing structure follows a hierarchical pattern with the homepage
 * serving multiple sections and dedicated pages for specific content.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast notification systems */}
      <Toaster />
      <Sonner />

      {/* Router setup with scroll management */}
      <BrowserRouter>
        <ScrollToTop />

        {/* Application Routes */}
        <Routes>
          {/* Homepage - contains hero, process, pricing, and contact sections */}
          <Route path="/" element={<Index />} />

          {/* Dedicated pages */}
          <Route path="/about" element={<WhatWeDo />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/research" element={<Research />} />
          <Route path="/booking" element={<Booking />} />

          {/* Legal pages */}
          <Route path="/policy" element={<Policy />} />
          <Route path="/tos" element={<Tos />} />

          {/* Section redirects - redirect to homepage with scroll to section */}
          <Route path="/process" element={<Index />} />
          <Route path="/pricing" element={<Index />} />
          <Route path="/contact" element={<Index />} />

          {/* Catch-all route for 404 handling - MUST BE LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
