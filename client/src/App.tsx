import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Hash-based location strategy for static hosting
const hashLocation = () => window.location.hash.replace(/^#/, "") || "/";
const hashNavigate = (to: string) => (window.location.hash = to);

function Router() {
  // Use hash-based routing for better compatibility with static hosting
  const [location, setLocation] = useLocation({
    base: hashLocation(),
    navigate: hashNavigate,
  });

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;